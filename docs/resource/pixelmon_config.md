---
title: Pixelmon
---

# Unlike GP where you had to set multiple flag commands for pixelmon manually, it is now highly recommended to make use of the new Flag Definition system. A flag definition combines 1 or more flag permissions into a single group which allows you to toggle all at once via GUI. Any flag definition entered in your `flags.conf` will be accessible via the Flag GUI config by using `/cf` command in game. The main thing to keep in mind is all flags toggled in game will apply to claim only. However, the flags you set in config that use `gd_claim_default` or `gd_claim_override` contexts will be applied on server startup with the `default-value` you specify.  

Below is a modified `flags.conf` file that contains custom flag definitions created by user `Eoraptor`. They can be used as a template to add custom pixemon flags for your server.  

To use, paste the below config text over your original `flags.conf` which can be found in the GD config folder.

<details>
  <summary>Pixelmon Flag Config (GD 1.5.11)</summary>

```
GriefDefender {
    # Used to define a group of custom flags for players/admins.
    # Each group defined will be displayed in the flag GUI for users.
    # Groups can have the following settings : 
    #    enabled=<true|false>: Whether the group is enabled.
    #    admin-group=<true|false>: Whether this group is considered for admin use only.
    #    Note: GUI toggles in admin groups will always use configured definition contexts.
    #          However, non-admin groups, such as 'user', will always apply to current claim only.
    #    Note: If you assign users the permission 'griefdefender.admin.advanced-flags', they will be able to access admin presets within the claim tab.
    #          It is recommended not to assign this permission to users for best experience.
    #    hover=<text>: The hover text to be displayed when hovering over group name in GUI.
    #    title=<text>: The title text to be used for TAB display.
    #    value=<true|false>: This is used to set a default value for the flag definition. It is only used in conjunction with 'override=<type>, default=<type> settings.
    #    contexts=["key=value"]: A list of definition contexts that will be applied to all permissions.
    # Note: This is primary used with 'default' and 'override' contexts. Ex. contexts=["default=global"]
    # Note: You must specify one of the following contexts :'gd_claim_default=<type>' , 'gd_claim_override=<type>', or 'gd_claim=claim'
    # Each group will have an associated permission in order to be viewable.
    # The 'user' group will use the permission : 'griefdefender.custom.flag.group.user'
    # The 'admin' group will use the permission : 'griefdefender.custom.flag.group.admin'
    # Within each group, you can define flag definitions.
    # Each flag definition must be defined in the following format:
    # enabled: Controls whether the definition is enabled. Accepts a value of 'true' or 'false'
    # default-value: The default value to assign flag definition.
    # description: The flag description to display on hover. Uses the legacy text format.
    # permissions: The list of permissions to link to definition. Each permission accepts the following contexts :
    #    flag=<linked-flag>: This context is used to link the permission to a GD specific flag. Ex. 'flag=block-break' would link permission to GD's block-break flag
    #    source=<id>: This context is used to specify a source id such as 'minecraft:creeper'.
    #    target=<id>: This context is used to specify a target id such as 'minecraft:chest'.
    #    state=<properties>: This context is used to specify a blockstate property such as 'state=lit:true'.
    # Note: All flag definitions that contain a definition context of 'gd_claim_default' or 'gd_claim_override' will be applied to permissions during server startup.
    # Note: Required if no source or target context is specified, the permission will default to ALL.
    # Note: Available contexts are : flag, source, target, state, used_item, item_name
    # These contexts may change, See https://github.com/bloodmc/GriefDefender/wiki for latest information.
    custom-flags {
        groups {
            admin {
                # Set to true if this flag group is for admin use only.
                # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
                # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
                admin-group=true
                definitions {
                    ambient-spawn {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether ambients, such as bats, can spawn."
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=#ambient"
                        ]
                    }
                    animal-block-modify {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether animals can modify blocks."
                        enabled=true
                        permissions=[
                            "flag=block-modify, source=#animal"
                        ]
                    }
                    animal-spawn {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether animals, such as cows and pigs, can spawn."
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=#animal"
                        ]
                    }
                    aquatic-spawn {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether aquatics, such as squids and guardians, can spawn."
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=#aquatic"
                        ]
                    }
                    armorstand-use {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether armorstands can be placed or broken."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=minecraft:armor_stand, source=minecraft:player",
                            "flag=entity-damage, target=minecraft:armor_stand, source=minecraft:player",
                            "flag=interact-entity-secondary, target=minecraft:armor_stand, source=minecraft:player"
                        ]
                    }
                    chorus-fruit-teleport {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether a player can use chorus fruit to teleport."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=minecraft:chorus_fruit, source=minecraft:player"
                        ]
                    }
                    commandblock-block-break {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                        ]
                    }
                    commandblock-block-place {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        enabled=true
                        permissions=[
                            "flag=block-place, source=minecraft:command_block, source=minecraft:chain_command_block, source=minecraft:repeating_command_block"
                        ]
                    }
                    creeper-block-explosion {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether a creeper can explode blocks."
                        enabled=true
                        permissions=[
                            "flag=explosion-block, source=minecraft:creeper"
                        ]
                    }
                    creeper-entity-explosion {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether a creeper can explode entities."
                        enabled=true
                        permissions=[
                            "flag=explosion-entity, source=minecraft:creeper"
                        ]
                    }
                    endcrystal-use {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether endcrystals can be placed or broken."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=minecraft:end_crystal, source=minecraft:player",
                            "flag=entity-damage, target=minecraft:end_crystal, source=minecraft:player",
                            "flag=interact-entity-secondary, target=minecraft:end_crystal, source=minecraft:player"
                        ]
                    }
                    entity-armorstand-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether entities can deal damage to armorstands."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:armor_stand",
                            "flag=projectile-impact-entity, target=minecraft:armor_stand"
                        ]
                    }
                    entity-itemframe-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether entities can deal damage to item frames."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:item_frame",
                            "flag=projectile-impact-entity, target=minecraft:item_frame"
                        ]
                    }
                    exp-drop {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether experience orbs can drop."
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=minecraft:xp_orb"
                        ]
                    }
                    fall-entity-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether entities can take fall damage."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=minecraft:fall"
                        ]
                    }
                    fall-player-damage {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can take fall damage."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:player, source=minecraft:fall"
                        ]
                    }
                    falling-block-break {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether falling blocks can break."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:fall"
                        ]
                    }
                    fire-block-damage {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether fire can cause block damage."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:fire"
                        ]
                    }
                    fire-entity-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether fire can cause entity damage."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=minecraft:fire",
                            "flag=entity-damage, source=minecraft:fire_tick",
                            "flag=entity-damage, source=minecraft:magma_block",
                            "flag=entity-damage, source=minecraft:flowing_lava"
                        ]
                    }
                    lightning-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether lightning can cause harm."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=minecraft:lightning_bolt"
                        ]
                    }
                    monster-animal-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether monsters can deal damage to animals."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=#monster, target=#animal",
                            "flag=entity-damage, source=#monster, target=#aquatic",
                            "flag=projectile-impact-entity, source=#monster, target=#aquatic"
                        ]
                    }
                    monster-player-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether monsters can deal damage to players."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=#monster, target=minecraft:player",
                            "flag=projectile-impact-entity, source=#monster, target=minecraft:player"
                        ]
                    }
                    monster-spawn {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether monsters, such as creepers and skeletons, can spawn."
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=#monster"
                        ]
                    }
                    piston-item-spawn {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether pistons can spawn items."
                        enabled=true
                        permissions=[
                            "flag=item-spawn, source=minecraft:piston",
                            "flag=item-spawn, source=minecraft:sticky_piston"
                        ]
                    }
                    piston-use {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether pistons can be used."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:piston",
                            "flag=block-place, source=minecraft:piston",
                            "flag=block-break, source=minecraft:sticky_piston",
                            "flag=block-place, source=minecraft:sticky_piston"
                        ]
                    }
                    player-block-break {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can break blocks."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:player"
                        ]
                    }
                    player-block-interact {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can interact with blocks.\n&bNote&f: This does not include inventory blocks such as chests."
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, source=minecraft:player"
                        ]
                    }
                    player-block-place {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can place blocks."
                        enabled=true
                        permissions=[
                            "flag=block-place, source=minecraft:player"
                        ]
                    }
                    player-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can be damaged."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:player",
                            "flag=projectile-impact-entity, target=minecraft:player"
                        ]
                    }
                    player-enderpearl-interact {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can use an enderpearl."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, source=minecraft:player, target=minecraft:ender_pearl"
                        ]
                    }
                    player-endportal-use {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use end portal."
                        enabled=true
                        permissions=[
                            "flag=entity-teleport-from, source=minecraft:end_portal, target=minecraft:player"
                        ]
                    }
                    player-enter {
                        contexts=[
                            "gd_claim=claim"
                        ]
                        default-value=true
                        description="Controls whether a player can enter this claim."
                        enabled=true
                        permissions=[
                            "flag=enter-claim, source=minecraft:player"
                        ]
                    }
                    player-entity-interact {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can interact with entities.\n&bNote&f: This does not include chest access with entities such as horses."
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, source=minecraft:player"
                        ]
                    }
                    player-exit {
                        contexts=[
                            "gd_claim=claim"
                        ]
                        default-value=true
                        description="Controls whether a player can exit this claim."
                        enabled=true
                        permissions=[
                            "flag=exit-claim, source=minecraft:player"
                        ]
                    }
                    player-item-drop {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can drop items."
                        enabled=true
                        permissions=[
                            "flag=item-drop, source=minecraft:player"
                        ]
                    }
                    player-item-pickup {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can pickup items."
                        enabled=true
                        permissions=[
                            "flag=item-pickup, source=minecraft:player"
                        ]
                    }
                    player-itemframe-interact {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can interact with item frames."
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=minecraft:item_frame, source=minecraft:player"
                        ]
                    }
                    player-itemhanging-place {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can place hanging items such as itemframes."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=#hanging, source=minecraft:player"
                        ]
                    }
                    player-netherportal-use {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use nether portal."
                        enabled=true
                        permissions=[
                            "flag=entity-teleport-from, source=minecraft:nether_portal, target=minecraft:player"
                        ]
                    }
                    player-teleport-from {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can teleport from this claim."
                        enabled=true
                        permissions=[
                            "flag=entity-teleport-from, target=minecraft:player"
                        ]
                    }
                    player-teleport-to {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can teleport to this claim."
                        enabled=true
                        permissions=[
                            "flag=entity-teleport-to, target=minecraft:player"
                        ]
                    }
                    player-villager-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether players can deal damage to villagers."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:villager, source=minecraft:player",
                            "flag=projectile-impact-entity, target=minecraft:villager, source=minecraft:player"
                        ]
                    }
                    silverfish-block-infest {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether silverfish can infest blocks such as cobblestone."
                        enabled=true
                        permissions=[
                            "flag=block-modify, source=minecraft:silverfish"
                        ]
                    }
                    tnt-block-explosion {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether tnt can explode blocks."
                        enabled=true
                        permissions=[
                            "flag=explosion-block, source=minecraft:tnt"
                        ]
                    }
                    tnt-entity-explosion {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether tnt can explode entities."
                        enabled=true
                        permissions=[
                            "flag=explosion-entity, source=minecraft:tnt"
                        ]
                    }
                    turtle-egg-hatch {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether turtle eggs can hatch."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:turtle_egg, target=minecraft:turtle_egg"
                        ]
                    }
                    villager-farm {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether villages can farm crops."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:villager, target=#crops",
                            "flag=block-place, source=minecraft:villager, target=#crops"
                        ]
                    }
                    wither-block-break {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether withers can break blocks."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:wither"
                        ]
                    }
                    wither-entity-damage {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether withers can damage entities."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, source=minecraft:wither"
                        ]
                    }
                }
                # Whether flag definition group is enabled.
                enabled=true
                # The hover text to be displayed when hovering over group name in GUI.
                hover=""
                # The title text to be used for TAB display.
                title=""
            }
            pixelmon {
                # Set to true if this flag group is for admin use only.
                # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
                # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
                admin-group=false
                definitions {
                    collide-pixelmon-grass {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players are forced into battle in Pixelmon grass"
                        enabled=true
                        permissions=[
                            "flag=collide-block, target=pixelmon:pixelmon_grass, source=minecraft:player"
                        ]
                    }
                    interact-with-chattingnpc {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with NPC's that Chat"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:chattingnpc, source=minecraft:player"
                        ]
                    }
                    interact-with-endtable {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=false
                        description="Controls whether players can use the End Table"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:end_table",
                            "flag=interact-inventory, source=minecraft:player, target=pixelmon:end_table"
                        ]
                    }
                    interact-with-fridge {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=false
                        description="Controls whether players can use the Fridge"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:fridge, source=minecraft:player",
                            "flag=interact-inventory, target=pixelmon:fridge, source=minecraft:player"
                        ]
                    }
                    interact-with-healer {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use the Healer"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:healer, source=minecraft:player"
                        ]
                    }
                    interact-with-move-relearner {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Move Relearners"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:relearner, source=minecraft:player"
                        ]
                    }
                    interact-with-move-tutor {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Move Tutors"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:tutor, source=minecraft:player"
                        ]
                    }
                    interact-with-nurses {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Nurses"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:nursejoy, source=minecraft:player"
                        ]
                    }
                    interact-with-old-fisherman {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Old Fisherman"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:oldfisherman, source=minecraft:player"
                        ]
                    }
                    interact-with-shopkeepers {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Shopkeepers"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:shopkeeper, source=minecraft:player"
                        ]
                    }
                    interact-with-traders {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can interact with Traders"
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=pixelmon:trader, source=minecraft:player"
                        ]
                    }
                    occupied-pokeball-usage {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether occupied pokeballs can be thrown or not"
                        enabled=true
                        permissions=[
                            "flag=projectile-impact-block, source=pixelmon:occupied_pokeball",
                            "flag=projectile-impact-entity, source=pixelmon:occupied_pokeball, target=pixelmon:any",
                            "flag=entity-spawn, source=pixelmon:occupied_pokeball, target=#pixelmon:animal"
                        ]
                    }
                    poke-spawn {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether Pokemon can spawn(NPC Pokemon will be invisible during battles if false)"
                        enabled=true
                        permissions=[
                            "flag=entity-spawn, target=#pixelmon:animal"
                        ]
                    }
                    throw-any-pokeball {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether empty pokeballs can be thrown or not"
                        enabled=true
                        permissions=[
                            "flag=projectile-impact-block, source=pixelmon:empty_pokeball",
                            "flag=projectile-impact-entity, source=pixelmon:empty_pokeball"
                        ]
                    }
                    use-cushion-chairs {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use cushion chairs"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:red_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:yellow_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:green_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:pink_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:blue_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:black_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:gray_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:cyan_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:white_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:brown_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:orange_cushion_chair, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:purple_cushion_chair, source=minecraft:player"
                        ]
                    }
                    use-fossil-cleaner {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use Fossil Cleaners"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:fossil_cleaner, source=minecraft:player"
                        ]
                    }
                    use-fossil-machines {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use Fossile Machines"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:fossil_machine, source=minecraft:player"
                        ]
                    }
                    use-pc {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use Pokemon PC's"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:pc, source=minecraft:player"
                        ]
                    }
                    use-trade-machines {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use Trading Machines"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:trade_machine, source=minecraft:player"
                        ]
                    }
                    use-vending-machines {
                        contexts=[
                            "gd_claim_default=global"
                        ]
                        default-value=true
                        description="Controls whether players can use Vending Machines"
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=pixelmon:pink_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:blue_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:green_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:orange_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:red_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:yellow_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, source=minecraft:player, target=pixelmon:brown_vending_machine",
                            "flag=interact-block-secondary, target=pixelmon:white_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:gray_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:black_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:cyan_vending_machine, source=minecraft:player",
                            "flag=interact-block-secondary, target=pixelmon:purple_vending_machine, source=minecraft:player"
                        ]
                    }
                }
                # Whether flag definition group is enabled.
                enabled=true
                # The hover text to be displayed when hovering over group name in GUI.
                hover=""
                # The title text to be used for TAB display.
                title=""
            }
            user {
                # Set to true if this flag group is for admin use only.
                # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
                # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
                admin-group=false
                definitions {
                    block-trampling {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether farmland and turtle eggs can be trampled."
                        enabled=true
                        permissions=[
                            "flag=collide-block, target=minecraft:turtle_egg, target=minecraft:farmland"
                        ]
                    }
                    chest-access {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether a player can access chest inventories."
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=minecraft:chest, source=minecraft:player",
                            "flag=interact-inventory, target=minecraft:chest, source=minecraft:player"
                        ]
                    }
                    crop-growth {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether crops can grow."
                        enabled=true
                        permissions=[
                            "flag=block-grow, target=#crops"
                        ]
                    }
                    damage-animals {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether animals can be damaged."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=#animal",
                            "flag=projectile-impact-entity, target=#animal"
                        ]
                    }
                    enderman-grief {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether enderman can grief."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:enderman",
                            "flag=block-place, source=minecraft:enderman"
                        ]
                    }
                    fire-spread {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether fire can spread."
                        enabled=true
                        permissions=[
                            "flag=block-spread, source=minecraft:fire",
                            "flag=block-spread, source=minecraft:flowing_lava"
                        ]
                    }
                    grass-growth {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether grass can grow."
                        enabled=true
                        permissions=[
                            "flag=block-grow, target=minecraft:grass"
                        ]
                    }
                    ice-form {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether ice can form."
                        enabled=true
                        permissions=[
                            "flag=block-modify, target=minecraft:ice"
                        ]
                    }
                    ice-melt {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether ice can melt."
                        enabled=true
                        permissions=[
                            "flag=block-modify, target=minecraft:water, source=minecraft:ice"
                        ]
                    }
                    lava-flow {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether lava can flow."
                        enabled=true
                        permissions=[
                            "flag=liquid-flow, source=minecraft:flowing_lava, target=minecraft:air"
                        ]
                    }
                    leaf-decay {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether leaves can decay."
                        enabled=true
                        permissions=[
                            "flag=leaf-decay"
                        ]
                    }
                    lighter {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether a player can use flint and steel."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=minecraft:flint_and_steel, source=minecraft:player"
                        ]
                    }
                    mushroom-growth {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether mushrooms can grow."
                        enabled=true
                        permissions=[
                            "flag=block-grow, target=#mushroom"
                        ]
                    }
                    mycelium-spread {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether mycelium can spread."
                        enabled=true
                        permissions=[
                            "flag=block-spread, target=minecraft:mycelium"
                        ]
                    }
                    pvp {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether PvP combat is allowed."
                        enabled=true
                        permissions=[
                            "flag=entity-damage, target=minecraft:player, source=minecraft:player",
                            "flag=projectile-impact-entity, target=minecraft:player, source=minecraft:player"
                        ]
                    }
                    ride {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether vehicles(including animals) can be mounted."
                        enabled=true
                        permissions=[
                            "flag=entity-riding, target=#vehicle, source=minecraft:player",
                            "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                        ]
                    }
                    sign-use {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        enabled=true
                        permissions=[
                            "flag=interact-block-primary, target=#signs, source=minecraft:player",
                            "flag=interact-block-secondary, target=#signs, source=minecraft:player"
                        ]
                    }
                    sleep {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can sleep in beds."
                        enabled=true
                        permissions=[
                            "flag=interact-block-secondary, target=minecraft:bed, source=minecraft:player",
                            "flag=interact-item-secondary, target=minecraft:bed, source=minecraft:player"
                        ]
                    }
                    snow-fall {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether snow can fall."
                        enabled=true
                        permissions=[
                            "flag=block-place, source=minecraft:air, target=minecraft:snow_layer"
                        ]
                    }
                    snow-melt {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether snow can melt."
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:snow_layer"
                        ]
                    }
                    snowman-trail {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether snowmen can create snow beneath them."
                        enabled=true
                        permissions=[
                            "flag=block-place, source=minecraft:snowman, target=minecraft:snow"
                        ]
                    }
                    soil-dry {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether soil will dry."
                        enabled=true
                        permissions=[
                            "flag=block-modify, source=minecraft:farmland, state=moisture:0"
                        ]
                    }
                    vehicle-use {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether vehicles(boats, minecarts, etc.) can be placed, ridden and broken."
                        enabled=true
                        permissions=[
                            "flag=interact-item-secondary, target=#vehicle, source=minecraft:player",
                            "flag=entity-damage, target=#vehicle, source=minecraft:player",
                            "flag=entity-riding, target=#vehicle, source=minecraft:player",
                            "flag=interact-entity-secondary, target=#vehicle, source=minecraft:player"
                        ]
                    }
                    villager-trade {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether players can trade with villagers."
                        enabled=true
                        permissions=[
                            "flag=interact-entity-secondary, target=minecraft:villager, source=minecraft:player"
                        ]
                    }
                    vine-growth {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether vines(and kelp) can grow."
                        enabled=true
                        permissions=[
                            "flag=block-grow, target=minecraft:vine"
                        ]
                    }
                    water-flow {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether water can flow."
                        enabled=true
                        permissions=[
                            "flag=liquid-flow, target=minecraft:air, source=minecraft:flowing_water"
                        ]
                    }
                }
                # Whether flag definition group is enabled.
                enabled=true
                # The hover text to be displayed when hovering over group name in GUI.
                hover=""
                # The title text to be used for TAB display.
                title=""
            }
        }
    }
    default-flags {
        # The default flag settings used by claims. The group name represents the claim type.
        # Ex: The group admin will ONLY affect admin claims.
        # Supported groups are : user, admin, basic, subdivision, town, and wilderness.
        # Note: User represents all claim types EXCEPT wilderness.
        # Note: Specific types, such as wilderness, have higher priority than user.
        # Note: Defaults do not force flags onto user claims. A newly created claim will have no flags set and use these default settings until a claim owner sets flags.
        default-claim-flags {
            user {
                block-break=false
                block-grow=true
                block-modify=false
                block-place=false
                block-spread=true
                collide-block=false
                collide-entity=false
                command-execute=true
                command-execute-pvp=true
                enter-claim=true
                entity-chunk-spawn=true
                entity-damage=true
                entity-riding=true
                entity-spawn=true
                entity-teleport-from=true
                entity-teleport-to=true
                exit-claim=true
                explosion-block=false
                explosion-entity=false
                interact-block-primary=false
                interact-block-secondary=false
                interact-entity-primary=false
                interact-entity-secondary=true
                interact-inventory=false
                interact-inventory-click=true
                interact-item-primary=true
                interact-item-secondary=true
                inventory-item-move=true
                item-drop=true
                item-pickup=true
                item-spawn=true
                item-use=true
                leaf-decay=true
                liquid-flow=false
                portal-use=true
                projectile-impact-block=false
                projectile-impact-entity=true
            }
            wilderness {
                block-break=true
                block-grow=true
                block-modify=true
                block-place=true
                block-spread=true
                collide-block=true
                collide-entity=true
                command-execute=true
                command-execute-pvp=true
                enter-claim=true
                entity-chunk-spawn=true
                entity-damage=true
                entity-riding=true
                entity-spawn=true
                entity-teleport-from=true
                entity-teleport-to=true
                exit-claim=true
                explosion-block=true
                explosion-entity=true
                interact-block-primary=true
                interact-block-secondary=true
                interact-entity-primary=true
                interact-entity-secondary=true
                interact-inventory=true
                interact-inventory-click=true
                interact-item-primary=true
                interact-item-secondary=true
                inventory-item-move=true
                item-drop=true
                item-pickup=true
                item-spawn=true
                item-use=true
                leaf-decay=true
                liquid-flow=true
                portal-use=true
                projectile-impact-block=true
                projectile-impact-entity=true
            }
        }
    }
    # Controls which flags are enabled.
    # Note: Disabling a flag will cause GD to bypass all functionality for it.
    # Note: If you want full protection, it is recommended to keep everything enabled.
    flag-control {
        block-break=true
        block-grow=true
        block-modify=true
        block-place=true
        block-spread=true
        collide-block=true
        collide-entity=true
        command-execute=true
        command-execute-pvp=true
        enter-claim=true
        entity-chunk-spawn=false
        entity-damage=true
        entity-riding=true
        entity-spawn=true
        entity-teleport-from=true
        entity-teleport-to=true
        exit-claim=true
        explosion-block=true
        explosion-entity=true
        interact-block-primary=true
        interact-block-secondary=true
        interact-entity-primary=true
        interact-entity-secondary=true
        interact-inventory=true
        interact-inventory-click=true
        interact-item-primary=true
        interact-item-secondary=true
        inventory-item-move=true
        item-drop=true
        item-pickup=true
        item-spawn=true
        item-use=true
        leaf-decay=true
        liquid-flow=true
        portal-use=false
        projectile-impact-block=true
        projectile-impact-entity=true
    }
}
```