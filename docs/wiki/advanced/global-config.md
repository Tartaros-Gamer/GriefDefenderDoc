---
title: Global Config
---

GriefDefender's default config offers extended customization for your server. Below is a breakdown of all default variables for your convenience. 

> :warning: Some options can cause irreparable changes to your data. Please ensure that you have read the sub-text found next to the variables in your generated `global.conf` file. **All migration variables should ALWAYS be used AFTER a backup of your data is made.** :warning:

---

## Plugin Dependency
Do note, cost variables (such as Towns' `creation-cost`) **require** an Economy plugin. Similarly, MCClans is only needed if you plan on using it's integration across plugins. It is **not**, however, required to use GriefDefender's Town claims.

## Default Claim Flags
All default flags can be customized per claim type. Currently, GriefDefender supports default flags for Admin, Basic, Town and Wilderness. Please check your `global.conf` for a list of each default claim-flag setup.

## User Claim Flags
The `global.conf` is also the place where you can list the flags users with `griefdefender.user.claim.flag` will be able to edit. Note, the permission will be checked under the form of `griefdefender.user.flag.[flag]`. If you wish to add a new flag to the list, simply follow the format and add it in a new line, and then restart your server (or `/gdreload`).

For example, adding block-break to the list will translate into `griefdefender.user.flag.block-break` being checked as true, therefore allowing the player to edit his claim's block-break flag with `/cf`, `/cfg`, and `/cfp`. 

## Modular Configuration
GriefDefender allows for modular enabling. As per default configuration files however, all modules are enabled. Disabling a module will render all flags unusable. Only do it if you do not plan on using GriefDefender's management of said flag. You can choose to disable the following: 
* Block-Changes: block-break, block-grow, block-modify, block-place, block-pre, block-spread
* Collisions: collide-block, collide-entity
* Commands: command-execute
* Movements: enter-claim, exit-claim
* Entity: entity-damage, entity-riding, entity-spawn, entity-teleport-from, entity-teleport-to
* Explosions: explosion-block, explosion-entity
* Interacts: interact-block-primary, interact-block-secondary, interact-entity-primary, interact-entity-secondary, interact-inventory, interact-inventory-click, interact-item-primary, interact-item-secondary
* Item: item-drop, item-pickup, item-spawn, item-use
* Liquids: liquid-flow
* Portals: portal-use
* Projectiles: projectile-impact-block, projectile-impact-entity

# Ban
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| blocks | A map of banned block id's and messages | [ ] |
| entities | A map of banned entity id's and messages | [ ] |
| items | A map of banned item id's and messages | [ ] |

Used to store a list of global banned blocks, entities, and items. Use the `/claimban` command to set.

# Blacklist
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| flag-id-blacklist | A list of id's ignored by flags. | [ ] |
| global-source | A global list of source id's that are ignored by events. <br />Note: This only affects events where the id specified is the source. | [ ] |
| global-target | A global list of target id's that are ignored by events. <br />Note: This only affects events where the id specified is the target. | [ ] |
| entity-damage-source-blacklist | A global list of entity damage sources that are ignored in events by default. | [ ] |

The blacklist controls events from interacting with items, blocks, or entities on either a per-flag or global basis.

It supports wildcards `?` and `*` where `?` represents a single character and `*` represents zero or more characters.
For more info you can go to [Apache's wildcard matcher.](https://commons.apache.org/proper/commons-io/javadocs/api-2.5/org/apache/commons/io/FilenameUtils.html#wildcardMatch(java.lang.String,%20java.lang.String))

To add an item into the blacklist simply add the ID between a set of quotation marks.

An example of how to block items from being checked by GD is as shown

`block-break=["modID:itemID"]`

# Claims
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-chest-claim-block-radius | Radius used (in blocks) for auto-created claim when a chest is placed. Set to -1 to disable chest claim creation. | 4 |
| auto-nature-restore | Whether survival claims will be automatically restored to nature when auto-deleted. | FALSE |
| auto-schematic-restore | Whether survival claims will be automatically restored to its claim creation schematic on abandon/expiration. <br />Note: Enabling this feature will cause ALL newly created claims to automatically create a special schematic that will be used to restore claim on abandon/expiration.<br />Note: Enabling this feature will disable ability to resize claims.<br />Note: It is HIGHLY recommended to disable building in the wilderness before using this feature to avoid players exploiting.<br />Note: It is also recommended to ONLY use this feature in newly created worlds where there is no existing player data.<br />Note: This does NOT affect deletions. If admins want to restore back to original schematic, they can select '__restore__' by using /claimschematic command.| FALSE |
| border-block-radius | Set claim border of specified radius (in blocks), centered on claim. If set to 1, adds an additional 1 block protected radius around claim. <br />Note: It is not recommended to set this value too high as performance can degrade due to deeper claim searches. | 0 |
| claims-enabled | Whether claiming is enabled or not. (0 = Disabled, 1 = Enabled). | 1 |
| claim-list-max | Controls the max displayed claims when using the '/claimlist' command. | 200 |
| expiration-cleanup-interval | The interval in minutes for cleaning up expired claims. Set to 0 to disable. | 63 |
| explosion-block-surface-blacklist | A list of source id's that cannot cause explosion damage to blocks above sea level. | [ ] |
| explosion-entity-surface-blacklist | A list of id's that cannot cause explosion damage to entities above sea level. | [ ] |
| explosion-surface-block-level | The 'Y' block level that is considered the surface for explosions. | 0 |
| investigation-tool | The item used to investigate claims with a right-click. <br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | "minecraft:stick" |
| modification-tool | The item used to create/resize claims with a right click.<br />Note: Set to empty quotes if you want to assign no item and use '/claim' mode exclusively. | "minecraft:golden_shovel" |
| piston-protection-in-claims | Whether piston protection should be enabled within claims. Note: This does not affect pistons crossing into another claim, that is always protected. This only determines whether or not GD should process pistons if it doesn't cross into another claim. | false |
| player-trapped-cooldown | The cooldown time, in seconds, when using the '/trapped' command. | 300 |
| protect-tamed-entities | Whether tamed entities should be protected in claims. | true |
| reserved-claim-names | A list of reserved claim names for use only by administrators. | [ ] |
| restrict-world-max-height | Whether to restrict claiming to world max height. | true |

# Context
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| player-equipment | Whether player equipment contexts should be applied during permission checks. | true |
| potion-effects | Whether potion effect contexts should be applied during permission checks. | true |
| enchantments | Whether potion effect contexts should be applied during permission checks. | false |

# Economy
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| bank-system | Whether to enable the bank system for claims. Set to true to enable. | FALSE |
| bank-transaction-log-limit | The amount of transactions to keep for history. | 60 |
| economy-mode | Uses economy instead of player claim blocks for claim creation. If true, disables the claim block system in favor of economy. <br />Note: Using this mode disables the '/buyblocks' command as claim creation will pull funds directly from a player's economy balance. <br />Note: If players have existing claimblocks from past configurations, an admin must use the '/ecomigrateblocks' command to convert remainder to currency. | FALSE |
| rent-delinquent-task-apply-hour | The specific hour in day to attempt to get owed claim rent balances from delinquent renters. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| rent-max-time-limit | Controls the maximum time limit(hours or days) that a claim owner can have their rental max set to. <br />Note: This only affects claim rentals that have a max specified. If no max is specified by the claim owner, a renter may rent as long as they want. | false |
| rent-restore-day-warning | Controls which day a player should start to receive warnings about their rented claim nearing expiration. <br />Ex. If set to '5', this will begin to send players messaging on login and at the rent apply hour when 5 days are remaining before expiration. <br />Note: This only applies if the owner has 'rent-restore' option enabled and the rent owner sets a max. | 5 |
| rent-schematic-restore-admin | Controls whether rented admin claims will use a schematic for restoration. <br />Note: If set, the claim will create a schematic on rental start and restore it back when finished. <br />Note: This ONLY applies to rentals with a max date set. | false |
| rent-sign | Whether rent signs are enabled. | FALSE |
| rent-system | Controls whether the rent system is enabled. | FALSE |
| rent-task-interval | The interval in minutes for checking claim rent payments that are due. Set to '0' to disable | 1 |
| rent-transaction-log-limit | The amount of transactions to keep for history. | 60 |
| sell-sign | Whether sell signs are enabled. | false |
| sign-update-interval | The interval in minutes for updating sign data. Set to '0' to disable | 1 |
| tax-apply-hour | The specific hour in day to apply tax to all claims. <br />Note: This uses military time and accepts values between 0-23. | 0 |
| tax-system | Whether to enable the tax system for claims. Set to true to enable. | FALSE |
| tax-transaction-log-limit | The amount of transactions to keep for history. | 60 |

# Message
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| locale | Set the locale to use for GP messages. Available languages: de_DE, en_US, es_ES, fr_FR, pl_PL, ru_RU, zh_HK. The data is stored under assets in jar. <br />Note: The language code must be lowercase and the country code must be uppercase. | "en_US" |
| enter-exit-show-gd-prefix | Whether GD prefix should be shown in enter/exit claim messages. | true |
| enter-exit-chat-type | The default chat type to use when sending enter/claim messages to a player. (0 = Chat, 1 = ActionBar, 2 = Title) | 0 |

# Migrators
## Bukkit
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| classic | Set to true to enable the classic migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format.<br />Note: It is recommended to backup data before using. | FALSE | 
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |

## Sponge
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| griefprevention-bukkit | Set to true to enable the griefprevention bukkit migrator. <br />Note: Migrates GP bukkit classic claim data and GPFlags data, if available, to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| griefprevention-sponge | Set to true to enable the griefprevention sponge migrator. <br />Note: Migrates GP sponge claim data to current format. <br />Note: It is recommended to backup data before using. | FALSE |
| red-protect | Set to true to enable RedProtect data migrator. <br />Note: All RedProtect data will be converted into basic claim data. | FALSE |
| worldguard | Set to true to enable WorldGuard data migrator. <br />Note: Only cuboid regions are supported. <br />Note: It is recommended to backup data before using. | FALSE |


# Player Data
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| claim-block-system | Determines which claim block system to use for claims. <br />Note: If set to VOLUME, claim blocks will use the chunk count system to balance 3d claiming. <br />Note: If set to AREA, the standard 2d block count system will be used. | AREA |

# PvP
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| combat-logout | Whether players should be killed if they logout while in pvp combat. | false |
| combat-timeout | How long combat is considered to continue after the most recent damage. | 15 |
| enabled | Whether pvp protection is enabled for players. <br />Note: Turnings this off disables all PvP functionality in GriefDefender. | true |

# Thread
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| executor-threads | The number of threads to use for GP's executor. | -1 |

# Town
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| auto-nature-restore | Whether survival towns will be automatically restored to nature when auto-deleted. | FALSE |
| clan-require-town | Requires a town to be owned for MCClans. <br />Note: This is for Sponge only. | TRUE |
| cleanup-task-interval | The interval in minutes for restoring blocks in an expired town. | 5 |
| creation-cost | The required amount of funds to create a town. <br />Note: This requires an Economy plugin. | 0.0 |

# Visual
| Variable | Description | Default Value |
| --------- | ----------- | ----------- |
| hide-borders-when-using-wecui | Whether to hide the glowstone/gold block borders when using WECUI. | FALSE |
| hide-wecui-drag-visuals-2d | Whether drag visuals should be shown while creating a claim in 2D mode. | TRUE |
| claim-create-block | The visual block used during claim creation. | minecraft:diamond_block |
| admin-accent-block | The visual accent block used for admin claims. | minecraft:pumpkin |
| admin-corner-block | The visual corner block used for admin claims. | minecraft:glowstone |
| admin-filler-block | The visual filler block used for admin claims. | minecraft:pumpkin |
| basic-accent-block | The visual accent block used for basic claims. | minecraft:gold_block |
| basic-corner-block | The visual corner block used for basic claims. | minecraft:glowstone |
| basic-filler-block | The visual filler block used for basic claims. | minecraft:gold_block |
| error-accent-block | The visual accent block used to visualize an error in a claim. | minecraft:netherrack |
| error-corner-block | The visual corner block used to visualize an error in a claim. | minecraft:redstone_ore |
| error-filler-block | The visual filler block used to visualize an error in a claim. | minecraft:diamond_block |
| subdivision-accent-block | The visual accent block used for subdivision claims. | minecraft:white_wool or minecraft:wool for legacy versions |