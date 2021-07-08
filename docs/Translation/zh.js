module.exports = {
    selectText: '语言',
        label: '简体中文',
    ariaLabel: '语言',
    editLinkText: '在 GitHub 编辑此页',
    serviceWorker: {
    updatePopup: {
        message: "发现新内容可用.",
            buttonText: "刷新"
    }
},
    algolia: {},
    nav: [
        { text: '主页', link: '/zh_CN/', ariaLabel: '主页' },
        { text: 'Wiki', link: '/zh_CN/wiki/', ariaLabel: 'Wiki' },
        { text: '联动', link: '/zh_CN/hook/', ariaLabel: '联动' },
        { text: 'API', link: '/zh_CN/api/', ariaLabel: 'API' },
        { text: '资源', link: '/zh_CN/resource/', ariaLabel: '资源' },
        { text: "从开发者那寻求帮助", ariaLabel: "购买支持", items: [
                { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
                { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }]},
    ],
    sidebar: {
        '/zh_CN/wiki/': [
            require("../zh_CN/wiki/sidebar_contents"),
            require("../zh_CN/wiki/basic/sidebar_contents"),
            require("../zh_CN/wiki/advanced/sidebar_contents"),
            require("../zh_CN/wiki/migration/sidebar_contents"),
        ],
    }
};