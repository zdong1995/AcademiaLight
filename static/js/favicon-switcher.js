// 监听系统颜色模式变化
if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateFavicon = (e) => {
        const faviconElement = document.querySelector('link[rel="icon"]');
        if (e.matches) {
            // 深色模式
            faviconElement.href = '/favicon/favicon-dark.ico';
        } else {
            // 浅色模式
            faviconElement.href = '/favicon/favicon.ico';
        }
    };
    
    // 初始设置
    updateFavicon(colorSchemeQuery);
    // 监听变化
    colorSchemeQuery.addListener(updateFavicon);
} 