---
title: Flag Definitions Gui
---

## Overview

The flag definition system provides both users and admins the ability to manage their claim flags with ease.
GriefDefender delivers a bundle of flag definitions by default to provide the best compatibility across servers.
All flag definition data can be found in the following location
### Sponge
`./config/GriefDefender/flags.conf`
### Bukkit
`./plugins/GriefDefender/flags.conf`



## Admin

Admins are given full control to add/remove/customize flag definitions.

To add a flag definition to an existing group, open the `flags.conf` file and search for `custom-flags` section.
Within this section, you will see 2 delivered groups 'admin' and 'user'.  

### Add new flag definition

If you want to add a flag to the 'admin' section, do the following
1. Clone an existing flag definition. We will use `ambient-spawn` for this example.

```
ambient-spawn {
    contexts=[
        "gd_claim_default=global"
    ]
    default-value=true
    description="Controls whether ambients, such as bats, can spawn."
    enabled=true
    permissions=[
        "flag=entity-spawn, target=#ambient"
    ]
}
```

Lets break this example down

#### Name  

`ambient-spawn` - This is the name of your definition that will be displayed to users when they open it up in the flag GUI. It can be whatever you like.

#### Contexts  

```
contexts=[
        "gd_claim_default=global"
    ]
```
These are the definition contexts that will be used with all permissions defined within `permissions=[...]`.  
It currently only supports context keys `gd_claim_default`, `gd_claim_override`, or `gd_claim`.  
The `gd_claim=claim` context is a special context which avoid setting a default startup value.  
See https://github.com/bloodmc/GriefDefender/wiki/Contexts to learn how contexts work.  

#### Default value  

`default-value=true` - This is the default-value GD will use when applying the definition during startup.  
GD will only apply this value during startup as a transient permission if the contexts include either `gd_claim_default` or `gd_claim_override`.  
If the definition does not contain one of these contexts then the default value is ignored.

#### Description  

`description="Controls whether ambients, such as bats, can spawn."` - This is the description used when a user hovers over the name in GUI.


#### Enabled  

`enabled=true` - This controls whether the definition is enabled in GD or disabled. If set to `false`, the definition will be ignored.


#### Permissions  

```
permissions=[
    "flag=entity-spawn, target=#ambient"
]
```
These are the flag permissions to assign this definition. Permissions can hold one or more flag entries. To add an additional line, add a `,` at end of previous then insert a new line.  
Each line requires a `flag=<flag_name>` entry followed by either source or target  context.  
If you want to apply a permission to all possible targets then don't include `target` as GD will automatically apply to all targets.  
If you want to apply a permission to all possible sources then don't include `source` as GD will automatically apply to all sources.  

All supported contexts for permissions are as follows
```
source
target
used_item
item_name
server
state
world
```

The accepted context value must be a valid identifier. To locate the proper value in game, do the following

1. Run command `/gddebug record claim` - This will start a debug session in the claim you are in.
2. Perform an action you want to manage via flag definition.
3. Run command `/gddebug paste` - This will display a web link to view debug results.
4. Open link, and you will see a list of actions GD checked for the claim. You will a `source` and `target` column which will contain the values you need.

To locate a value for `used_item` or any other context, locate the Context column and you will see a list of all support contexts for the specific line action.

Another way to find an id you are looking for is to check a community run wiki for it

See https://minecraft-ids.grahamedgecombe.com/

### Add flag definition that affects claim owners  

To add a new flag definition to the `USER` group that also affects owners, clone an existing flag definition. We will use `fire-spread` as it is setup to set a global default as well as affect all users in claim.  

```
fire-spread {
    contexts=[
        "gd_claim_override=claim",
        "gd_claim_default=global"
    ]
    default-value=false
    description="Controls whether fire can spread."
    enabled=true
    permissions=[
        "flag=block-spread, source=minecraft:fire"
    ]
}
```

```
contexts=[
    "gd_claim_override=claim",
    "gd_claim_default=global"
]
```

As you can see above, there are 2 contexts in this definition.  
The first context `gd_claim_override=claim` will instruct GD to apply to all users in a claim including claim owners, once toggled by a user. In this case it will need to be toggled to true and then false by a user to get a FALSE override in their claim as this context is only applied when toggled by a user.  
The second context `gd_claim_default=global` will instruct GD to apply this definition at startup as a default to all claim types.  

If you only want to add a definition for users in a claim and not have a global default then remove `gd_claim_default=global` and just include `gd_claim_override=claim`


### Flags Config  

For more information on what you can do with the flags config, see below

<details>
  <summary>Custom Flag Config</summary>

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
                            "flag=interact-item-secondary, target=minecraft:chorus_fruit"
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
                        enabled=true
                        permissions=[
                            "flag=block-break, source=minecraft:falling_block"
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
                            "flag=entity-damage, source=minecraft:lava"
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
                            "flag=projectile-impact-entity, source=#monster, target=#animal"
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
                    pvp {
                        contexts=[
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
                            "flag=block-break, source=minecraft:turtle_egg, target=minecraft:air"
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
                            "flag=block-break, source=minecraft:villager, target=#crops"
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
            user {
                # Set to true if this flag group is for admin use only.
                # Note: If admin group, the permission is 'griefdefender.admin.custom.flag.<groupname>
                # Note: If user group (admin set false), the permission is 'griefdefender.user.custom.flag.<groupname>
                admin-group=false
                definitions {
                    block-trampling {
                        contexts=[
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
                        default-value=false
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
                            "flag=block-break, source=minecraft:enderman"
                        ]
                    }
                    fire-spread {
                        contexts=[
                            "gd_claim_override=claim",
                            "gd_claim_override=global"
                        ]
                        default-value=false
                        description="Controls whether fire can spread."
                        enabled=true
                        permissions=[
                            "flag=block-spread, source=minecraft:fire",
                            "flag=block-spread, source=minecraft:lava"
                        ]
                    }
                    grass-growth {
                        contexts=[
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
                            "gd_claim_default=user"
                        ]
                        default-value=false
                        description="Controls whether lava can flow."
                        enabled=true
                        permissions=[
                            "flag=liquid-flow, source=minecraft:lava, target=minecraft:air"
                        ]
                    }
                    leaf-decay {
                        contexts=[
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
                            "flag=interact-item-secondary, target=minecraft:flint_and_steel"
                        ]
                    }
                    mushroom-growth {
                        contexts=[
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
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether mycelium can spread."
                        enabled=true
                        permissions=[
                            "flag=block-spread, target=minecraft:mycelium"
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
                            "flag=block-place, target=minecraft:snow, source=minecraft:air"
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
                            "flag=block-break, source=minecraft:snow, target=minecraft:air"
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
                            "flag=block-place, source=minecraft:snow_golem, target=minecraft:snow"
                        ]
                    }
                    soil-dry {
                        contexts=[
                            "gd_claim_default=user"
                        ]
                        default-value=true
                        description="Controls whether soil will dry."
                        enabled=true
                        permissions=[
                            "flag=block-modify, state=moisture:0"
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
                            "flag=liquid-flow, source=minecraft:water, target=minecraft:air"
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
                block-modify=true
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

</details>

## GUI  

The flag GUI is designed to allow both users and admins to easily administer their claim flags.

The command to access the flags GUI is `/cf` or `/gd flag claim`

### Permissions  

The following permission controls access to each user flag `griefdefender.user.custom.flag.<group>.<flagname>`.
As an example, lets assume you want to deny user access to the `damage-animals` flag. You would enter the following in LuckPerms , `/lp group <groupname> set griefdefender.user.custom.flag.user.damage-animals false`

### Flag Values

As shown below, both admin/user flags start off as either `true` or `false` and will represent the current active value of claim you are in.  
As a claim owner, by default all flags, except `fire-spread`, will only affect non-trusted users.

### ADMIN
:warning: Admin flags will ONLY affect the claim you are in.  

![Admin GUI](https://i.imgur.com/i7eyb6U.png)


By default, admins have access to 2 modes `PRESET` and `ADVANCED`.
The `PRESET` mode is directly linked to the flag definitions config file. Each group is read into the GUI as a tab along with its definitions.
There are 2 delivered groups that GD ships with, `USER` and `ADMIN`. 
 
Both groups will apply flags to claim you are standing in. If you need flags set as a default, set it up in config as shown above.


Flag Definition                                  | Default Value | Description |
-------------------------------------------------|---------------|--------------|
```ambient-spawn``` |  true  | Controls whether ambients, such as bats, spawn.
```animal-block-modify``` |  true  | Controls whether animals can modify blocks such as rabbits eating carrots.
```animal-spawn``` |  true  | Controls whether animals, such as cows/pigs/horses/etc., spawn.
```aquatic-spawn``` |  true  | Controls whether aquatics that live in water, such as squids, spawn.
```armorstand-use``` |  false | Controls whether armorstands can be placed or broken.
```chorus-fruit-teleport``` | false | Controls whether a player can use chorus fruit to teleport.
```creeper-block-explosion``` | false | Controls whether a creeper can explode blocks.
```creeper-entity-explosion``` | false | Controls whether a creeper can explode entities.
```endcrystal-use```      | false  | Controls whether endcrystals can be placed or broken.
```entity-armorstand-damage``` | false | Controls whether entities can deal damage to armorstands.
```entity-itemframe-damage``` | false | Controls whether entities can deal damage to item frames.
```exp-drop``` | true | Controls whether experience orbs can drop.
```fall-entity-damage``` | true | Controls whether entities can take fall damage.
```fall-player-damage``` | true | Controls whether players can take fall damage.
```falling-block-break``` | true | Controls whether falling blocks can break.
```fire-block-damage``` | true | Controls whether fire can cause block damage.
```fire-entity-damage``` | true |  Controls whether fire can cause entity damage.
```lightning-damage```  | true | Controls whether lightning can cause harm.
```monster-animal-damage``` | false |  Controls whether monsters can deal damage to animals.
```monster-player-damage``` | true | Controls whether monsters can deal damage to players.
```monster-spawn```  | true | Controls whether monsters, such as creepers and skeletons, can spawn.
```piston-item-spawn``` | true | Controls whether mycelium can spread.
```piston-use``` | false | Controls whether pistons can be used.
```player-block-break``` | false | Controls whether players can break blocks.
```player-block-interact``` | false | Controls whether players can interact with blocks.<br />Note: This does not include inventory blocks such as chests.
```player-block-place``` | false | Controls whether players can place blocks.
```player-damage``` | true | Controls whether players can be damaged.
```player-enderpearl-interact``` | true | Controls whether players can use an enderpearl.
```player-endportal-use``` | true | Controls whether players can use end portal.
```player-enter``` | true | Controls whether a player can enter this claim.
```player-exit``` | true | Controls whether a player can exit this claim.
```player-item-drop``` | true | Controls whether players can drop items.
```player-item-pickup``` | true | Controls whether players can pickup items.
```player-itemframe-interact``` | false | Controls whether players can interact with item frames.
```player-itemhanging-place``` | false | Controls whether players can place hanging items such as itemframes.
```player-netherportal-use``` | true | Controls whether players can use nether portal.
```player-teleport-from``` | true | Controls whether players can teleport from this claim.
```player-teleport-to``` | true | Controls whether players can teleport to this claim.
```player-villager-damage``` | false | Controls whether players can deal damage to villagers.
```pvp``` | true | Controls whether PvP combat is allowed.
```ravager-block-break``` | true | Controls whether ravagers can break blocks during raids.
```silverfish-block-infest``` | false | Controls whether silverfish can infest blocks such as cobblestone.
```tnt-block-explosion``` | false | Controls whether tnt can explode blocks.
```tnt-entity-explosion``` | false | Controls whether tnt can explode entities.
```turtle-egg-hatch``` | true | Controls whether turtle eggs can hatch.
```villager-farm``` | true | Controls whether villages can farm crops.
```wither-block-break``` | false | Controls whether withers can break blocks.
```wither-entity-damage``` | true | Controls whether withers can damage entities.

Note: These definitions will ONLY affect owner if `gd_claim_override` context is used. Check the `flags.conf` for more information.

### USER
:warning: User flags will ONLY affect the claim you are in.  
:warning: If you want to modify `USER` flag definitions in a claim that you do not own, you must have ignoreclaims permissions and enter `/ignoreclaims` before executing `/cf` command.


As a user, if you enter the `/cf` command, you will see the following

![User GUI](https://i.imgur.com/kqzZCbQ.png)

Flag Definition                                  | Default Value | Description | 
-------------------------------------------------|---------------|--------------|
```block-trampling``` |  false  | Controls whether farmland and turtle eggs can be trampled.
```chest-access``` | false | Controls whether a player can access chest inventories.
```crop-growth``` | true | Controls whether crops can grow.
```damage-animals``` | false | Controls whether animals can be damaged.
```enderman-grief``` | false | Controls whether enderman can grief.
```fire-spread``` | false | Controls whether fire can spread.
```grass-growth``` | true | Controls whether grass can grow.
```ice-form``` | true | Controls whether ice can form.
```ice-melt``` | true | Controls whether ice can melt.
```lava-flow``` | false | Controls whether lava can flow.
```leaf-decay``` | true | Controls whether leaves can decay.
```lighter``` | false | Controls whether a player can use flint and steel.
```mushroom-growth``` | true | Controls whether mushrooms can grow.
```mycelium-spread``` | true | Controls whether mycelium can spread.
```ride``` | false | Controls whether vehicles(including animals), not owned by the player, can be mounted.
```sleep``` | true | Controls whether players can sleep in beds
```snow-fall``` | true | Controls whether snow can fall.
```snow-melt``` | true | Controls whether snow can melt.
```snowman-trail``` | true | Controls whether snowmen can create snow beneath them.
```soil-dry``` | true | Controls whether soil will dry.
```vehicle-use``` | false | Controls whether vehicles(boats, minecarts, etc.) can be placed, ridden and broken.
```villager-trade``` | true | Controls whether players can trade with villagers.
```vine-growth``` | true | Controls whether vines(and kelp) can grow.
```water-flow``` | false | Controls whether water can flow.

Note: These definitions will ONLY affect owner if `gd_claim_override` context is used. Check the `flags.conf` for more information.