(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{791:function(e,a,o){"use strict";o.r(a);var l=o(104),s=Object(l.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("GriefDefender has the ability to control PvP globally, per user/group, or per claim.")]),e._v(" "),o("p",[e._v("Here are a few examples on how to configure PvP"),o("br"),e._v("\nNote: These examples assume a clean installation with no modified settings.")]),e._v(" "),o("h3",{attrs:{id:"disable-pvp-on-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-pvp-on-server"}},[e._v("#")]),e._v(" Disable PvP on server")]),e._v(" "),o("p",[e._v("To disable PvP on server, open "),o("code",[e._v("server.properties")]),e._v(" and set "),o("code",[e._v("pvp")]),e._v(" to false (On Sponge, set PVP to false in the Sponge config).")]),e._v(" "),o("h3",{attrs:{id:"disable-pvp-globally-except-specific-claims"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-pvp-globally-except-specific-claims"}},[e._v("#")]),e._v(" Disable PvP globally except specific claims")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Run command "),o("code",[e._v("/cf entity-damage player false context[source=player, default=global]")])])]),e._v(" "),o("li",[o("p",[e._v("Go to claim where you want PvP turned on.")])]),e._v(" "),o("li",[o("p",[e._v("While standing in claim, run command "),o("code",[e._v("/cf entity-damage player true context[source=player, override=claim]")])])]),e._v(" "),o("li",[o("p",[e._v("Remove the "),o("code",[e._v("pvp")]),e._v(" flag definition from users in "),o("code",[e._v("flags.conf")]),e._v(" located in GD config folder.")])])]),e._v(" "),o("h3",{attrs:{id:"disable-pvp-for-a-specific-player"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-pvp-for-a-specific-player"}},[e._v("#")]),e._v(" Disable PvP for a specific player")]),e._v(" "),o("ol",[o("li",[e._v("Run command "),o("code",[e._v("/cfp <player> entity-damage player false context[source=player, override=global]")])])]),e._v(" "),o("h3",{attrs:{id:"disable-pvp-for-a-specific-group-of-users"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-pvp-for-a-specific-group-of-users"}},[e._v("#")]),e._v(" Disable PvP for a specific group of users")]),e._v(" "),o("ol",[o("li",[e._v("Run command "),o("code",[e._v("/cfg <group> entity-damage player false context[source=player, override=global]")])])]),e._v(" "),o("h3",{attrs:{id:"allow-pvp-globally-except-specific-claims"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allow-pvp-globally-except-specific-claims"}},[e._v("#")]),e._v(" Allow PvP globally except specific claims")]),e._v(" "),o("p",[e._v("If you want to allow users to enable/disable PvP then have them do the following")]),e._v(" "),o("ol",[o("li",[e._v("Run command "),o("code",[e._v("/cf")]),e._v(" to launch flag GUI.")]),e._v(" "),o("li",[e._v("Make sure "),o("code",[e._v("PRESET")]),e._v(" "),o("code",[e._v("USER")]),e._v(" tab is selected.")]),e._v(" "),o("li",[e._v("Toggle "),o("code",[e._v("pvp")]),e._v(" to "),o("code",[e._v("false")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"allow-users-to-configure-pvp-as-they-wish"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allow-users-to-configure-pvp-as-they-wish"}},[e._v("#")]),e._v(" Allow users to configure PvP as they wish")]),e._v(" "),o("ol",[o("li",[e._v("Run command "),o("code",[e._v("/cf")]),e._v(" to launch flag GUI.")]),e._v(" "),o("li",[e._v("Make sure "),o("code",[e._v("PRESET")]),e._v(" "),o("code",[e._v("USER")]),e._v(" tab is selected.")]),e._v(" "),o("li",[e._v("Toggle "),o("code",[e._v("pvp")]),e._v(" to "),o("code",[e._v("false")]),e._v(" or "),o("code",[e._v("true")]),e._v(".")])])])}),[],!1,null,null,null);a.default=s.exports}}]);