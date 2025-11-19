function showBibleStoriesModal() {
    const modal = document.getElementById('bible-study-modal');
    const modalHeader = document.querySelector('#bible-study-modal .modal-header h2');
    const modalBody = document.querySelector('#bible-study-modal .modal-body');
    
    modalHeader.textContent = 'Bible Stories (Gen Z Edition)';
    
  
    modalBody.innerHTML = `
        <div class="topic-btn" onclick="readStoryChapter('adam', 0)" style="text-align: left; background: linear-gradient(135deg, rgba(6, 214, 160, 0.1), rgba(255, 214, 10, 0.1)); border: 1px solid rgba(6, 214, 160, 0.2);">
            <div style="font-weight: 600; margin-bottom: 4px;">Adam & Eve</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">Genesis 3 • 3 parts</div>
        </div>
       <!-- Noah's Ark -->
<div class="topic-btn" onclick="readStoryChapter('noah', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(72, 202, 228, 0.15)); border: 1px solid rgba(6, 214, 160, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">Noah's Ark</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Genesis 6–9 • 3 parts</div>
</div>

<!-- David and Goliath -->
<div class="topic-btn" onclick="readStoryChapter('david', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(255, 159, 28, 0.15), rgba(255, 94, 77, 0.15)); border: 1px solid rgba(255, 159, 28, 0.3); border-radius: 10px; padding: 10px;">
    <div style="font-weight: 600; margin-bottom: 4px;">David and Goliath</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">1 Samuel 17 • 3 parts</div>
</div>
<!-- Daniel in the Lion's Den -->
<div class="topic-btn" onclick="readStoryChapter('daniel', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(32, 84, 197, 0.15), rgba(255, 215, 0, 0.15)); border: 1px solid rgba(32, 84, 197, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">Daniel in the Lion's Den</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Daniel 6 • 3 parts</div>
</div>

<!-- The Good Samaritan -->
<div class="topic-btn" onclick="readStoryChapter('samaritan', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(72, 187, 120, 0.15), rgba(255, 165, 0, 0.15)); border: 1px solid rgba(72, 187, 120, 0.3); border-radius: 10px; padding: 10px;">
    <div style="font-weight: 600; margin-bottom: 4px;">The Good Samaritan</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Luke 10:25–37 • 3 parts</div>
</div>
<!-- The Life of David -->
<div class="topic-btn" onclick="readStoryChapter('david_life', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(186, 85, 211, 0.15), rgba(255, 140, 0, 0.15)); border: 1px solid rgba(186, 85, 211, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">The Life of David</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">1 Samuel 16 – 2 Samuel 24 • 20 parts</div>
</div>
<!-- Jonah and the Big Fish -->
<div class="topic-btn" onclick="readStoryChapter('jonah', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(0, 119, 190, 0.15), rgba(255, 255, 102, 0.15)); border: 1px solid rgba(0, 119, 190, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">Jonah and the Big Fish</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Jonah 1–4 • 4 parts</div>
</div>
<!-- Paul the Apostle -->
<div class="topic-btn" onclick="readStoryChapter('paul', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(186, 85, 211, 0.15), rgba(0, 191, 255, 0.15)); border: 1px solid rgba(186, 85, 211, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">Paul the Apostle</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">Acts 7–28 • 6 parts</div>
</div>
<!-- Elijah vs the Prophets of Baal -->
<div class="topic-btn" onclick="readStoryChapter('elijah_baal', 0)" 
    style="text-align: left; background: linear-gradient(135deg, rgba(255, 69, 0, 0.15), rgba(30, 144, 255, 0.15)); border: 1px solid rgba(255, 69, 0, 0.3); border-radius: 10px; padding: 10px; margin-bottom: 8px;">
    <div style="font-weight: 600; margin-bottom: 4px;">Elijah vs the Prophets of Baal</div>
    <div style="font-size: 0.85rem; color: var(--text-muted);">1 Kings 18:16–40 • 3 parts</div>
</div>
    `;
    
    modal.classList.add('active');
}

function readStoryChapter(storyKey, chapterIndex) {
    const story = stories[storyKey];
    const chapter = story.chapters[chapterIndex];
    
    const modal = document.getElementById('bible-study-modal');
    const modalHeader = document.querySelector('#bible-study-modal .modal-header h2');
    const modalBody = document.querySelector('#bible-study-modal .modal-body');
    
    modalHeader.textContent = story.title;
    
    modalBody.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div>
                    <h3 class="card-title" style="margin: 0;">${chapter.heading}</h3>
                    <p class="text-muted" style="margin-top: 4px; font-size: 0.85rem;">Part ${chapter.num} of ${story.totalChapters}</p>
                </div>
            </div>
            
            <div style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 30px;">
                ${chapter.content}
            </div>
            
            <!-- Navigation -->
            <div class="navigation-buttons">
                <div class="button-row">
                    ${chapterIndex > 0 ? `<button class="btn btn-secondary" onclick="readStoryChapter('${storyKey}', ${chapterIndex - 1})">← Previous</button>` : `<button class="btn btn-secondary" disabled style="opacity: 0.4; cursor: not-allowed;">← Previous</button>`}
                    <button class="btn btn-secondary" onclick="showBibleStoriesModal()">All Stories</button>
                </div>
                <div class="button-row">
                    ${chapterIndex < story.totalChapters - 1 ? `<button class="btn btn-secondary" onclick="readStoryChapter('${storyKey}', ${chapterIndex + 1})">Next →</button>` : `<button class="btn btn-secondary" disabled style="opacity: 0.4; cursor: not-allowed;">Next →</button>`}
                </div>
            </div>
        </div>
    `;
}