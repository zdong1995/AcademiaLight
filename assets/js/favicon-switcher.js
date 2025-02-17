if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('link[rel="icon"]').href = '/favicon-dark.ico';
} else {
    document.querySelector('link[rel="icon"]').href = '/favicon.ico';
} 