module.exports = {
  theme:"antdocs",
  title: "GriefDefender",
  description: "A new way to secure your world.",
  base: "./",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  locales: require("../locales"),
  themeConfig: {
	backToTop: true,
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
	locales: require("../Translation/translations"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/bloodmc/GriefDefenderDoc",
    editLinks: false,
  },
};
