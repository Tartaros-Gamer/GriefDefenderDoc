module.exports = {
	'/wiki/': [
		require("../../wiki/sidebar_contents"),  // Title: Information
		require("../../wiki/basic/sidebar_contents"), // Title: Basic
        require("../../wiki/advanced/sidebar_contents"), // Title: Advanced
        require("../../wiki/migration/sidebar_contents"), // Title: migration
	],
	'/api/': [{
	  title: "Information",
	  path: "/api/",
	  collapsable: false
	}],
	'/hook/': [{
	  title: "Information",
	  path: "/hook/",
	  collapsable: false,
	  children: require("../../hook/sidebar_content"),
	}],
	'/resource/': [{
	  title: "Information",
	  path: "/resource/",
	  collapsable: false,
	  children: require("../../resource/sidebar_contents"),
	}],
};
