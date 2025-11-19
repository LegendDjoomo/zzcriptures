// sw.js - Service Worker for notifications
self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
    event.waitUntil(clients.claim());
});

self.addEventListener('push', event => {
    console.log('Push event received.');
    if (!event.data) {
        console.log('Push event but no data');
        return;
    }
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'logo.jpg',
        badge: 'logo.jpg',
        data: {
            url: data.url || '/'
        }
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', event => {
    console.log('Notification click received.');
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/')
    );
});
