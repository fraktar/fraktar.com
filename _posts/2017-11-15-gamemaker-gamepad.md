---
layout: post
title: Point gun object in the direction of gamepad's axis
tags: gamemaker-2 GML
---

Instead of having the gun follow the mouse cursor position like so:

```
image_angle = point_direction(x, y,mouse_x,mouse_y);
```

Maybe you want the gun to follow your analogue gamepad axis position.

I was running into an issue because of relating the gun object's position to the gamepad axis position. 

*Old code:*

```
move_towards_point(haxis,vaxis,10);
image_angle = point_direction(x, y,haxis,vaxis);
```

This is my gun object's step event code now, with the object and gamepad axis positions separated:

*New code:*

```
var haxis = gamepad_axis_value(0, gp_axislh);
var vaxis = gamepad_axis_value(0, gp_axislv);
move_towards_point(x + haxis,y + vaxis,10);

image_angle = point_direction(0, 0,haxis,vaxis);
```

**Used: Game Maker Language @ Gamemaker: Studio 2**