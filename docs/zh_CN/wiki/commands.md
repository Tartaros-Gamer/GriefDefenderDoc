---

title: 命令

---

# Command Overview

参数表示法: \<required\> [optional]

### Claims

* [/gd abandon claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-claim)
* [/gd abandon all](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-all)
* [/gd abandon top](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-top)
* [/gd buy blocks [numberOfBlocks]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-buy-blocks)
* [/gd buy claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-buy-claim)
* [/gd claim contract \<amount\> [direction]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-contract)
* [/gd claim create \<radius\> [type]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-create)
* [/gd claim expand \<amount\> [direction]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-expand)
* [/gd claim farewell \<message\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-farewell)
* [/gd claim greeting \<message\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-greeting)
* [/gd claim info [id]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-info)
* [/gd claim inherit](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-inherit)
* [/gd claim investigate](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-investigate)
* [/gd claim list [\<player\> [world]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-list)
* [/gd claim name [name]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-name)
* [/gd claim rent create [\<rate\> [max_days]]|info|list|cancel](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-rent)
* [/gd claim setspawn](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-setspawn)
* [/gd claim spawn](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-spawn)
* [/gd claim transfer [player]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-transfer)
* [/gd claim we](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-we)
* [/gd cuboid](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-cuboid)
* [/gd giveblocks](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-giveblocks)
* [/gd mode basic](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-basic)
* [/gd mode subdivide](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-subdivide)
* [/gd mode town](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-town)
* [/gd player info \<player\> \<world\>|\<player\>|[\<world\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-info)
* [/gd player trapped](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-trapped)
* [/gd player unlockdrops](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-unlockdrops)
* [/gd sell blocks [numberOfBlocks]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-sell-blocks)
* [/gd sell claim \<price\>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-sell-claim-price)

### Flags

* [/gd flag debug](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-debug)
* [/gd flag claim [\<flag\> \<target\> \<value\> [context[key=value]]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-claim)
* [/gd flag group \<group\> [\<flag\> \<target\> \<value\> [context[key=value]]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-group)
* [/gd flag player \<player\> [\<flag\> \<target\> \<value\> [context[key=value]]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-player)
* [/gd flag reset](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-flag-reset)

### Options

* [/gd option [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-claim)
* [/gd option group \<group\> [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-group)
* [/gd option player \<player\> [\<option\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-option-player)

### Trust

注意: 使用 `public` 代表您信任所有用户。

* [/gd trust player \<player\>|public <accessor|container|builder|manager> ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-player)
* [/gd trust group \<group\>|public <accessor|container|builder|manager> ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-group)
* [/gd trustall player \<player\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trustall-player)
* [/gd trustall group \<group\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trustall-group)
* [/gd untrust player \<player\>|public ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrust-player)
* [/gd untrust group \<group\>|public ](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrust-group)
* [/gd untrustall player \<player\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrustall-player)
* [/gd untrustall group \<group\>|public](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-untrustall-group)
* [/gd trust list](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-trust-list)

### Admin

* [/gd abandon world [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-abandon-world)
* [/gd ban [hand | \<type\> \<target\> [\<message\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-ban)
* [/gd claim clear \<target\> [\<claim\> [\<world\>]]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-clear)
* [/gd claim ignore](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-ignore)
* [/gd claim restore](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-restore)
* [/gd claim schematic \<create|delete\> <name>](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-claim-schematic)
* [/gd delete claim](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-claim)
* [/gd delete all <player> [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-all)
* [/gd delete alladmin [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-delete-alladmin)
* [/gd mode admin](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-admin)
* [/gd mode nature](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-mode-nature)
* [/gd permission group \<group\> [\<permission\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-permission-group)
* [/gd permission player \<player\> [\<permission\> \<value\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-permission-player)
* [/gd player adjustbonusblocks \<player\> \<amount\> [world]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-adjustbonusblocks)
* [/gd player setaccruedblocks \<player\> \<amount\> [\<world\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-player-setaccruedblocks)
* [/gd debug \<on\>\<off\>\<record\>\<paste\> [\<player\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-debug)
* [/gd reload](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-reload)
* [/gd unban [hand | \<type\> \<target\>]](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-unban)

### 主命令

* [/gd](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd)

### Misc

* [/gd version](https://github.com/bloodmc/GriefDefender/wiki/Commands#gd-version)

# 命令详解

### 领地类

---

#### `/gd abandon claim`

放弃一个指定的领地。

---

#### `/gd abandon all`

放弃您所有的领地。

---

#### `/gd abandon top`

放弃您的母领地及其所有下属子领地。

---

#### `/gd buy blocks`

**Aliases**: `buyblocks`
**Arguments**: `<numberOfBlocks>`

用服务器货币购买更多的领地数。\n注意: 需要经济插件。

---

#### `/gd buy claim`

列出所有可供购买的领地。点击 [购买] 来购买。

---

#### `/gd claim contract`

**Aliases**: `claimcontract`, `contractclaim`<br />**Arguments**: `<amount> [direction]`<br />使领地范围从您所面对的方向向内缩小。

---

#### `/gd claim create`

**Aliases**: `claimcreate`<br />**Arguments**: `<radius> [type]`<br />在玩家周围创建一个领地。如果未指定类型，默认创建 基础 领地。

---

#### `/gd claim expand`

**Aliases**: `claimexpand`, `expandclaim`<br />**Arguments**: `<amount> [direction]`<br />使领地范围从您所面对的方向向外延展。

---

#### `/gd claim farewell`

**Arguments**: `<message>`<br />设定离开领地时候的告别讯息。

如果要取消, `/gd claim farewell clear`

---

#### `/gd claim greeting`

**Arguments**: `<message>`<br />设定进入领地时候的问候讯息。

如果要取消, `/gd claim greeting clear`

---

#### `/gd claim info`

**Aliases**: `claiminfo`
**Arguments**: `[id]`

显示您所处领地的所有可知的信息。

---

#### `/gd claim inherit`

**Aliases**: `inherit`

切换是否使该领地从母领地继承权限设置。

---

#### `/gd claim investigate`

**Aliases**: `claiminvestigate`
**Arguments**: `[area|hide|hideall]`

调查该目标或附件领地。

---

#### `/gd claim list`

**Aliases**: `claimlist`
**Arguments**: `[<player> [world]]`

显示一名玩家的领地。

---

#### `/gd claim name`

**Arguments**: `<name>`<br />设定领地的名称。

---

#### `/gd claim rent`

**Arguments**: `create [<rate> [<max_days>]]|info|list|cancel]`<br />用于 租用/列出 领地。<br />注意: 需要经济插件。

---

#### `/gd claim setspawn`

**Aliases**: `claimsetspawn`

为您所处的领地设置重生点。

---

#### `/gd claim spawn`

**Aliases**: `claimspawn`

传送至领地重生点(如有设置)。

---

#### `/gd claim transfer`

**Aliases**: `transferclaim`
**Arguments**: `<player>`

将您所处的领地转交给其他玩家。

---

#### `/gd claim we`

使用小木斧(worldedit)所选中地区设定为领地。<br />

---

#### `/gd cuboid`

**Aliases**: `cuboid`

切换 3D 立体领地模式。

---

#### `/gd giveblocks`

**Aliases**: `giveblocks`
**Arguments**: `<player> <amount>`

将领地玩家给另一名玩家。

---

#### `/gd mode basic`

**Aliases**: `modebasic`

切换领地工具至 基础领地 模式。

---

#### `/gd mode subdivide`

**Aliases**: `modesubdivide`

将领地工具切换为 子领地细分 模式,用作细分您的领地。

---

#### `/gd player info`

**Arguments**: `<player> <world>|<player>|[<world>]`

显示有关一个玩家的信息。

---

#### `/gd player trapped`

**Aliases**: `trapped`

如果玩家被卡住并且无法放置方块，这将传送玩家到一个安全的位置。

---

#### `/gd player unlockdrops`

**Aliases**: `unlockdrops`

允许其他玩家拾取死亡物品。

---

#### `/gd sell blocks`

**Aliases**: `sellblocks`
**Arguments**: `<numberOfBlocks>`

售出您的领地方块以获取货币。\n注意: 需要经济插件。

---

#### `/gd sell claim`

**Arguments**: `<price>`

将您的领地明码标价售出。要停止待售，将价格设置为 -1 或在 /claiminfo 中将待售设置为 否。

### Flags

---

#### `/gd flag debug`

**Aliases**: `cfd`

切换是否启用 领地标签 调试模式。

---

#### `/gd flag claim`

**Aliases**: `cf`
**Arguments**: `[<flag> <target> <value> context[key=value]]`

获取/设置 您目前所处领地的标签。

---

#### `/gd flag group`

**Aliases**: `cfg`
**Arguments**: `<group> <flag> <target> <value> context[key=value]]`

获取/设置 您目前所处领地的权限组标签。

---

#### `/gd flag player`

**Aliases**: `cfp`
**Arguments**: `<player> <flag> <target> <value> context[key=value]]`

为玩家添加标签权限。

---

#### `/gd flag reset`

**Aliases**: `cfr`

将领地标签重置为默认。

### Options

---

#### `/gd option claim `

**Aliases**: `co`
**Arguments**: `[<option> <value>]`

获取/设置 您目前所处领地的配置。

---

#### `/gd option group`

**Aliases**: `cog`
**Arguments**: `<group> [<option> <value>]`

获取/设置 您目前所处领地的一个组的配置。

---

#### `/gd option player`

**Aliases**: `cop`
**Arguments**: `<player> [<option> <value>]`

获取/设置 您目前所处领地的一个玩家的配置。

### Trust

注意: `public` 指的是全体用户

---

#### `/gd trust player`

*Accessor*: `Grants a player entry to your claim(s) and use of your bed`<br />*Container*: `Grants a player access to your claim's containers, crops, animals, bed, buttons, and levers`<br />*Builder*: `Grants a player edit access to your claim(s)`<br />*Manager*: `Grants a player access to all of the above including claim settings`<br />**Aliases**: `trust`<br />**Arguments**: `<player>|public <trusttype>`

Grants a player access to your claim(s).

---

#### `/gd trust group`

*Accessor*: `Grants a group entry to your claim(s) and use of your bed`
*Container*: `Grants a group access to your claim's containers, crops, animals, bed, buttons, and levers`
*Builder*: `Grants a group edit access to your claim(s)`
*Manager*: `Grants a group access to all of the above including claim settings`
**Aliases**: `trustgroup`
**Arguments**: `<group>|public <trusttype>`

Grants a group access to your claim(s)

---

#### `/gd trustall player`

*Accessor*: `Grants a player entry to ALL your claim(s) and use of your bed`
*Container*: `Grants a player access to ALL your claim's containers, crops, animals, bed, buttons, and levers`
*Builder*: `Grants a player edit access to ALL your claim(s)`
*Manager*: `Grants a player access to all of the above including claim settings`
**Aliases**: `trust`
**Arguments**: `<player>|public <trusttype>`

Grants a player access to ***ALL*** your claim(s).

---

#### `/gd trustall group`

*Accessor*: `Grants a group entry to ALL your claim(s) and use of your bed`
*Container*: `Grants a group access to ALL your claim's containers, crops, animals, bed, buttons, and levers`
*Builder*: `Grants a group edit access to ALL your claim(s)`
*Manager*: `Grants a group access to all of the above including claim settings`
**Aliases**: `trustallgroup`
**Arguments**: `<group>|public <trusttype>`

Grants a group access to ***ALL*** your claim(s).

---

#### `/gd untrust player`

**Aliases**: `untrust`
**Arguments**: `<player>|public`

Revokes a player's access to your claim.

---

#### `/gd untrust group`

**Aliases**: `untrustgroup`
**Arguments**: `<group>|public`

Revokes a group's access to your claim.

---

#### `/gd untrustall player`

**Aliases**: `untrustall`
**Arguments**: `<player>|public`

Revokes a player's access to ***ALL*** your claim(s).

---

#### `/untrustall group`

**Aliases**: `untrustallgroup`
**Arguments**: `<group>|public`

Revokes a group's access to ***ALL*** your claim(s).

---

#### `/gd trust list`

Lists permissions for the claim you're standing in

### Admin

---

#### `/gd abandon world`

**Aliases**: `abandonworld`
**Arguments**: `[world]`

Special admin command used to abandon ALL user claims in world.

---

#### `/gd ban`

**Aliases**: `claimban`
**Arguments**: `hand | <type> <target> [<message>]`
Note: Valid types are `entity`, `item`, `block`
Bans target or item in hand from all usage.

---

#### `/gd player adjustbonusblocks`

**Aliases**: `adjustbonusblocks`
**Arguments**: `<player> <amount> [world]`

Adds or subtracts bonus claim blocks for a player

---

#### `/gd player setaccruedblocks`

**Aliases**: `setaccruedblocks`
**Arguments**: `<player> <amount> [<world>]`

Updates a player's accrued claim block total.

---

#### `/gd mode admin`

**Aliases**: `modeadmin`

Switches the shovel tool to administrative claims mode

---

#### `/gd delete claim`

**Aliases**: `deleteclaim`

Deletes the claim you're standing in, even if it's not your claim

---

#### `/gd delete all`

**Aliases**: `deleteall`
**Arguments**: `<player> [world]`

Delete all of another player's claims

---

#### `/gd delete alladmin`

**Aliases**: `deletealladmin`
**Arguments**: `[world]`

Deletes all administrative claims

---

#### `/gd claim ignore`

**Aliases**: `ignoreclaims`

Toggles ignore claims mode

---

#### `/gd claim clear`

**Aliases**: `claimclear`
**Arguments**: `<target> [<claim> [<world>]]`
Allows clearing of entities within one or more claims.

---

#### `/gd permission group`

**Aliases**: `cpg`
**Arguments**: `<group> [<permission> <value>]`

Sets a permission on a group with a claim context

---

#### `/gd permission player`

**Aliases**: `cpp`
**Arguments**: `<player> [<permission> <value>]`

Sets a permission on a player with a claim context

---

#### `/gd mode nature`

**Aliases**: `rn`

Switches the shovel tool to restoration mode

---

#### `/gd debug`

**Aliases**: `gddebug`
**Arguments**: `<on>|<off>|<record>|<paste> [<player>]`

Toggles debug

---

#### `/gd reload`

Reloads Grief Prevention's configuration settings

---

#### `/gd schematic`

**Aliases**: `claimschematic`
**Arguments**: `<create|delete> <name>`

Manages claim schematics. Use '/claimschematic create <name>' to create a live backup of claim.

---

#### `/gd unban`

**Aliases**: `claimunban`
**Arguments**: `hand | <type> <target> [<message>]`
Note: Valid types are `entity`, `item`, `block`

Unbans target id allowing it to be used again.

### Misc

---

#### `/gd`

Lists detailed information on each command.

---

#### `/gd version`

Lists version information.