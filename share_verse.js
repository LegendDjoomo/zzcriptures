// === SHARE VERSE FUNCTIONALITY ===

// Configuration
const SHARE_CONFIG = {
    canvasWidth: 1080,
    canvasHeight: 1920,
    overlayOpacity: 0.3,
    fontSize: {
        reference: 56,
        genZ: 52,
        kjv: 52
    },
    padding: 80,
    logoSize: 100
};

// State
let shareBackgrounds = [];
let currentBackgroundIndex = 0;
let currentVerseData = {
    reference: '',
    text: '',
    genZ: '',
    kjv: ''
};

// Initialize share modal
function initShareModal() {
    loadBackgroundsFromFolder();

    // Make Beta Info modal dismissible by clicking outside and with ESC key
    const betaModal = document.getElementById('beta-info-modal');
    if (betaModal) {
        betaModal.addEventListener('click', function(e) {
            if (e.target === betaModal) closeBetaInfoModal();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (betaModal && betaModal.classList.contains('active')) closeBetaInfoModal();
            const appOverlay = document.getElementById('app-expired-overlay');
            if (appOverlay && appOverlay.classList.contains('active')) {
                // Don't allow closing expired overlay with ESC (it's blocking)
            }
        }
    });
}

// Load backgrounds from share_pics folder
async function loadBackgroundsFromFolder() {
    // List of background images (in share_pics folder)
    // We'll try to load them dynamically
    const backgroundFiles = [
        'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg',
        'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg', 'bg10.jpg'
    ];

    shareBackgrounds = [];
    const carousel = document.getElementById('share-bg-carousel');
    carousel.innerHTML = '';

    for (let i = 0; i < backgroundFiles.length; i++) {
        const bgPath = `share_pics/${backgroundFiles[i]}`;
        
        // Test if image exists
        const img = new Image();
        img.onload = function() {
            shareBackgrounds.push(bgPath);
            
            // Create thumbnail
            const thumb = document.createElement('div');
            thumb.className = 'share-bg-thumbnail';
            thumb.style.backgroundImage = `url(${bgPath})`;
            thumb.onclick = () => selectBackground(shareBackgrounds.indexOf(bgPath));
            carousel.appendChild(thumb);
            
            // Select first background by default
            if (shareBackgrounds.length === 1) {
                selectBackground(0);
            }
        };
        img.onerror = function() {
            // Image doesn't exist, skip it
        };
        img.src = bgPath;
    }
}

// Open share modal
function openShareModal() {
    // Get current verse data
    currentVerseData.reference = document.getElementById('daily-verse-reference').textContent;
    currentVerseData.text = document.getElementById('daily-verse-text').textContent.replace(/"/g, '');
    currentVerseData.genZ = document.getElementById('daily-verse-genz').textContent;
    
    // Get KJV text if available (we'll need to fetch this)
    // For now, we'll use the regular text
    currentVerseData.kjv = currentVerseData.text;

    // Show modal
    const modal = document.getElementById('share-verse-modal');
    modal.style.display = 'flex';
    
    // Load backgrounds if not already loaded
    if (shareBackgrounds.length === 0) {
        loadBackgroundsFromFolder();
    } else {
        renderPreview();
    }
}

// Close share modal
function closeShareModal() {
    const modal = document.getElementById('share-verse-modal');
    modal.style.display = 'none';
}

// Beta Info modal
function openBetaInfoModal() {
    const modal = document.getElementById('beta-info-modal');
    if (modal) {
        modal.classList.add('active');
        // fallback in case CSS visibility is blocked elsewhere
        modal.style.display = 'flex';
        // focus first close button for accessibility
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) closeBtn.focus();
        console.log('Beta info modal opened');
    }
}

function closeBetaInfoModal() {
    const modal = document.getElementById('beta-info-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = '';
    }
}

// Select background
function selectBackground(index) {
    currentBackgroundIndex = index;
    
    // Update active state
    const thumbnails = document.querySelectorAll('.share-bg-thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    
    // Render preview
    renderPreview();
}

// Render preview on canvas
async function renderPreview() {
    const canvas = document.getElementById('share-preview-canvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    try {
        // 1. Draw background image
        const bgImage = await loadImage(shareBackgrounds[currentBackgroundIndex]);
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        
        // 2. Apply dark overlay
        ctx.fillStyle = `rgba(0, 0, 0, ${SHARE_CONFIG.overlayOpacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 3. Calculate all text heights first for vertical centering
        const centerX = canvas.width / 2;
        const maxWidth = canvas.width - (SHARE_CONFIG.padding * 2);
        
        // Measure all text
        ctx.font = `bold ${SHARE_CONFIG.fontSize.reference}px Georgia, serif`;
        const referenceHeight = SHARE_CONFIG.fontSize.reference;
        
        ctx.font = `600 ${SHARE_CONFIG.fontSize.genZ}px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
        const genZLines = wrapText(ctx, currentVerseData.genZ, maxWidth);
        const genZHeaderHeight = 32;
        const genZTextHeight = genZLines.length * (SHARE_CONFIG.fontSize.genZ + 20);
        
        ctx.font = `italic ${SHARE_CONFIG.fontSize.kjv}px Georgia, serif`;
        const kjvLines = wrapText(ctx, `"${currentVerseData.kjv}"`, maxWidth);
        const kjvHeaderHeight = 32;
        const kjvTextHeight = kjvLines.length * (SHARE_CONFIG.fontSize.kjv + 15);
        
        // Calculate total content height
        const spacing = 80;
        const totalHeight = referenceHeight + spacing + 
                          genZHeaderHeight + genZTextHeight + spacing +
                          kjvHeaderHeight + kjvTextHeight;
        
        // Start position (vertically centered)
        let yPos = (canvas.height - totalHeight) / 2;
        
        // 4. Render all text centered
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 3;
        
        // Reference
        ctx.font = `bold ${SHARE_CONFIG.fontSize.reference}px Georgia, serif`;
        ctx.fillText(currentVerseData.reference, centerX, yPos);
        yPos += referenceHeight + spacing;
        
        // Gen Z Translation Header
        ctx.font = 'bold italic 45px Georgia, serif';
        ctx.globalAlpha = 1;
        ctx.fillText('GEN Z TRANSLATION', centerX, yPos);
        ctx.globalAlpha = 1;
        yPos += genZHeaderHeight + 20;
        
        // Gen Z Translation Text
        ctx.font = `600 ${SHARE_CONFIG.fontSize.genZ}px Georgia, serif`;
        ctx.globalAlpha = 0.85;
        genZLines.forEach(line => {
            ctx.fillText(line, centerX, yPos);
            yPos += SHARE_CONFIG.fontSize.genZ + 20;
        });
        yPos += spacing - 20;
        
        // KJV Header
        ctx.font = 'bold italic 45px Georgia, serif';
        ctx.globalAlpha = 1;
        ctx.fillText('KING JAMES VERSION', centerX, yPos);
        ctx.globalAlpha = 1;
        yPos += kjvHeaderHeight + 20;
        
        // KJV Text
        ctx.font = `600 ${SHARE_CONFIG.fontSize.kjv}px Georgia, serif`;
        ctx.globalAlpha = 0.85;
        kjvLines.forEach(line => {
            ctx.fillText(line, centerX, yPos);
            yPos += SHARE_CONFIG.fontSize.kjv + 20;
        });
        ctx.globalAlpha = 1;
        
        // 5. Add logo watermarks (top-left and bottom-right for diagonal alignment)
        try {
            const logo = await loadImage('logo1.png');
            const logoSize = SHARE_CONFIG.logoSize;
            
            // TOP-LEFT WATERMARK
            const logoX1 = 150; // Left side
            const logoY1 = 150; // Top side
            
            // Draw logo
            ctx.save();
            ctx.beginPath();
            ctx.arc(logoX1 + logoSize/2, logoY1 + logoSize/2, logoSize/2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(logo, logoX1, logoY1, logoSize, logoSize);
            ctx.restore();
            
            // Add "Zcriptures" text
            ctx.font = 'bold 32px Georgia, serif';
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 10;
            ctx.textAlign = 'left';
            ctx.fillText('Zcriptures', logoX1 + logoSize + 15, logoY1 + logoSize/2 + 10);
            
            // BOTTOM-RIGHT WATERMARK (diagonal from top-left)
            const logoX2 = canvas.width - logoSize - 150; // Right side
            const logoY2 = canvas.height - logoSize - 150; // Bottom side
            
            // Draw logo
            ctx.save();
            ctx.beginPath();
            ctx.arc(logoX2 + logoSize/2, logoY2 + logoSize/2, logoSize/2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(logo, logoX2, logoY2, logoSize, logoSize);
            ctx.restore();
            
            // Add "Zcriptures" text (aligned to the right)
            ctx.font = 'bold 32px Georgia, serif';
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 10;
            ctx.textAlign = 'right';
            ctx.fillText('Zcriptures', logoX2 - 15, logoY2 + logoSize/2 + 10);
        } catch (err) {
            console.log('Logo not loaded:', err);
        }
        
    } catch (error) {
        console.error('Error rendering preview:', error);
        showToast('Error loading background image', 'error');
    }
}

// Helper: Load image
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// Helper: Wrap text
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    words.forEach(word => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    });
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

// Share image
async function shareVerseImage() {
    const btn = document.getElementById('share-now-btn');
    btn.classList.add('loading');
    
    try {
        const canvas = document.getElementById('share-preview-canvas');
        
        // Create blob from canvas
        const blob = await new Promise((resolve, reject) => {
            canvas.toBlob((b) => {
                if (b) {
                    resolve(b);
                } else {
                    reject(new Error('Failed to create blob'));
                }
            }, 'image/png', 1.0);
        });
        
        // Create file from blob
        const fileName = `zcriptures-${currentVerseData.reference.replace(/\s+/g, '-').replace(/:/g, '-')}.png`;
        const file = new File([blob], fileName, { 
            type: 'image/png',
            lastModified: Date.now()
        });
        
        // Check if Web Share API is available and can share files
        if (navigator.share) {
            // Check if we can share files
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: `${currentVerseData.reference} - Zcriptures`,
                        text: `${currentVerseData.genZ}\n\nDownload Zcriptures - Gen Z Bible App on the Google Play Store`
                    });
                    showToast('Verse shared successfully! 📤');
                } catch (err) {
                    // User cancelled or share failed
                    if (err.name === 'AbortError') {
                        // User cancelled, do nothing
                        console.log('Share cancelled by user');
                    } else {
                        console.error('Share failed:', err);
                        showToast('Share failed. Please use Download instead. 💾', 'warning');
                    }
                }
            } else {
                // Can't share files
                showToast('Sharing not supported. Please use Download instead. 💾', 'warning');
            }
        } else {
            // Web Share API not available
            showToast('Sharing not supported. Please use Download instead. 💾', 'warning');
        }
    } catch (error) {
        console.error('Error sharing:', error);
        showToast('Error creating image. Please try again.', 'error');
    } finally {
        btn.classList.remove('loading');
    }
}

// Download image
async function downloadVerseImage() {
    const btn = document.getElementById('download-verse-btn');
    btn.classList.add('loading');
    
    try {
        const canvas = document.getElementById('share-preview-canvas');
        
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `zcriptures-${currentVerseData.reference.replace(/\s+/g, '-')}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('Verse downloaded! 💾');
        }, 'image/png', 1.0);
    } catch (error) {
        console.error('Error downloading:', error);
        showToast('Error downloading image. Please try again.', 'error');
    } finally {
        btn.classList.remove('loading');
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareModal);
} else {
    initShareModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('share-verse-modal');
    if (e.target === modal) {
        closeShareModal();
    }
});
