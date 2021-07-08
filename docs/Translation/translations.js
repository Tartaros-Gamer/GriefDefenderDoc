module.exports = {
	'/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/', ariaLabel: 'Home' },
		  { text: 'Wiki', link: '/wiki/', ariaLabel: 'Wiki' },
		  { text: 'Hooks', link: '/hook/', ariaLabel: 'Hooks' },
		  { text: 'API', link: '/api/', ariaLabel: 'API' },
		  { text: 'Resources', link: '/resource/', ariaLabel: 'Resources' },
		  { text: "Support", ariaLabel: "Purchase Support", items: [
	      { text: "Patreon", link: "https://www.patreon.com/bloodmc" },
          { text: "Spigot", link: "https://www.spigotmc.org/resources/griefdefender.68900/" }]},
        ],
        sidebar: {
            '/wiki/': [
                require("../wiki/sidebar_contents"),  // Title: Information
                require("../wiki/basic/sidebar_contents"), // Title: Basic
                require("../wiki/advanced/sidebar_contents"), // Title: Advanced
                require("../wiki/migration/sidebar_contents"), // Title: migration
            ],
        },
    },
	'/zh_CN/': require("./zh"),
};