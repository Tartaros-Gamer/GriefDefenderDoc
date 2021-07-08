---
title: PVP
---

GriefDefender has the ability to control PvP globally, per user/group, or per claim.  

Here are a few examples on how to configure PvP  
Note: These examples assume a clean installation with no modified settings.

### Disable PvP on server
To disable PvP on server, open `server.properties` and set `pvp` to false (On Sponge, set PVP to false in the Sponge config).

### Disable PvP globally except specific claims

1. Run command `/cf entity-damage player false context[source=player, default=global]`  

2. Go to claim where you want PvP turned on.

3. While standing in claim, run command `/cf entity-damage player true context[source=player, override=claim]`  

4. Remove the `pvp` flag definition from users in `flags.conf` located in GD config folder.


### Disable PvP for a specific player

1. Run command `/cfp <player> entity-damage player false context[source=player, override=global]` 

### Disable PvP for a specific group of users

1. Run command `/cfg <group> entity-damage player false context[source=player, override=global]` 

### Allow PvP globally except specific claims

If you want to allow users to enable/disable PvP then have them do the following
1. Run command `/cf` to launch flag GUI.
2. Make sure `PRESET` `USER` tab is selected.
3. Toggle `pvp` to `false`.

### Allow users to configure PvP as they wish

1. Run command `/cf` to launch flag GUI.
2. Make sure `PRESET` `USER` tab is selected.
3. Toggle `pvp` to `false` or `true`.


