(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{797:function(e,r,t){"use strict";t.r(r);var n=t(104),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("⚠️ Before using WorldGuard migrator, backup your data (including LuckPerms).  It is recommended to test migration on a test server before applying to production to ensure everything works as expected.")]),e._v(" "),t("h3",{attrs:{id:"griefdefender-supports-a-migration-of-cuboid-regions-from-worldguard-to-migrate-to-griefdefender-perform-the-following-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#griefdefender-supports-a-migration-of-cuboid-regions-from-worldguard-to-migrate-to-griefdefender-perform-the-following-steps"}},[e._v("#")]),e._v(" GriefDefender supports a migration of cuboid regions from WorldGuard. To migrate to GriefDefender, perform the following steps")]),e._v(" "),t("h3",{attrs:{id:"current-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-limitations"}},[e._v("#")]),e._v(" Current Limitations")]),e._v(" "),t("ul",[t("li",[e._v("Only supports cuboid regions.")]),e._v(" "),t("li",[e._v("Does not support regions that cross each other's boundaries.")]),e._v(" "),t("li",[e._v("Does not support custom flags currently. (Will support in future release)")])]),e._v(" "),t("p",[e._v("The following WG flags are currently supported for migration:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("allowed-cmds\nblock-break\nblock-place\nblock-trampling\nblocked-cmds\nbuild\nchest-access\nchorus-fruit-teleport\ncreeper-explosion\ncrop-growth\ndamage-animals\ndeny-spawn\nenderdragon-block-damage\nenderman-grief\nenderpearl\nentity-item-frame-destroy\nentity-painting-destroy\nentry\nexit\nexp-drop\nfall-damage\nfarewell\nfire-spread\nfirework-damage\nghast-fireball\ngrass-growth\ngreeting\ninteract\ninvincible\nitem-drop\nitem-pickup\nlava-fire\nlava-flow\nleaf-decay\nlighter\nlightning\nmob-damage\nmob-spawning\nmushroom-growth\nother-explosion\npvp\nride\nsleep\nsnowman-trail\ntnt\nuse\nvehicle-place\nvine-growth\nwater-flow\nwither-damage\n")])])]),t("h3",{attrs:{id:"the-following-flags-do-not-support-migration-but-can-be-handled-via-gd-s-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-following-flags-do-not-support-migration-but-can-be-handled-via-gd-s-api"}},[e._v("#")]),e._v(" The following flags do not support migration but can be handled via GD's API")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("deny-message\nentry-deny-message\nexit-deny-message\nexit-override\nnotify-enter\nnotify-exit\n")])])]),t("h2",{attrs:{id:"migration-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migration-steps"}},[e._v("#")]),e._v(" Migration Steps")]),e._v(" "),t("ol",[t("li",[e._v("Add GriefDefender jar to plugins")]),e._v(" "),t("li",[e._v("Remove WorldGuard jar from plugins")]),e._v(" "),t("li",[e._v("Start the server at least once to generate GriefDefender configs.")]),e._v(" "),t("li",[e._v("Stop server")]),e._v(" "),t("li",[e._v("Edit global.conf under ./plugins/GriefDefender/")]),e._v(" "),t("li",[e._v("Locate section")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Set to true to enable WorldGuard data migrator.\n# Note: Only cuboid regions are supported.\n# Note: It is recommended to backup data before using.\nworldguard=false\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Set worldguard to "),t("code",[e._v("true")])]),e._v(" "),t("li",[e._v("Start server")])]),e._v(" "),t("p",[e._v("If done properly, GriefDefender will migrate each world's data as it loads from "),t("code",[e._v("plugins/WorldGuard/data/<worldname>")]),e._v(" to "),t("code",[e._v("plugins/GriefDefender")]),e._v(".\nMigration output should appear in console as it is migrating.")])])}),[],!1,null,null,null);r.default=a.exports}}]);