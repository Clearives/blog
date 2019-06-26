module.exports = {
    title: 'Clearives',
    description: '前端博客',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    markdown: {
        anchor: {
            permalink: true
          },
          toc: { 
            includeLevel: [1, 2, 3]
          },
          lineNumbers: true
    },
    themeConfig: {
        // repo: 'clearives/blog',
        nav: require('./config/nav'),
        sidebar: require('./config/sidebar'),
        sidebarDepth: 2,
        lastUpdated: '更新于',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: 'Refresh'
            }
        },
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        require('./plugins/blog-router'),
        [
            'vuepress-plugin-comment',
            require('./plugins/blog-comment'),
        ]
    ]
}