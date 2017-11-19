---
layout: post
title: Customize start menu tiles in Windows 10
tags: windows powershell
---

After each restart, Windows just replaces the tiles and pins whatever it wants to the start menu. It just ignores your config.

**If you want a clean and classic menu with no tiles and no pins, the steps below might help.**

* 1 First of all, customize the start menu tiles exactly as you want them.

I removed all pinned apps and tiles by right-clicking on each > `Unpin from Start` 
and resized the menu to be as this as possible by draggin its right edge.

![Windows 10 - Clean Start Menu](/public/images/win10-notiles.png "Windows 10 - No tiles, no pins.")

* 2 Open up Windows Powershell

Click on the start menu and type in `powershell` > right-click on it and `Run as administrator`.

* 3 Create a new folder on any of your partitions

I created a folder named `Winconf` in `C:\Winconf`. Leave it empty.

* 4 Go back to your opened Powershell terminal and enter this command: 
`Export-StartLayout -Path C:\Winconf\LayoutModification.xml`

![Powershell Terminal](/public/images/powershell.png "Powershell terminal in Windows 10.")

*Note: replace `Winconf` with your own folder name.*

* 5 Hit `Win + E` to open up explorer, click on the top address bar and enter this path: 
`C:\Users\Default\AppData\Local\Microsoft\Windows\Shell`.

*Note: you can also manually navigate to that folder but make sure you can see hidden folders first.*

* 6 Copy the newly exported file from your folder `C:\Winconf\LayoutModification.xml` to that folder `C:\Users\Default\AppData\Local\Microsoft\Windows\Shell`.

* #7 Right click on the start menu and click on `Computer Management`. Navigate to `System Tools` - `Local Users and Groups` and double click on `Users` - Right click anywhere in the window - `New user...` - Enter a username - Uncheck all options - `Close`.

![Computer Management](/public/images/computer-management.png "Computer Management - New user.")

* #8 Click on start menu and sign-out from the current user - log on with the newly created user name.

Click on the start menu. It should look exactly as you set it previously. You can now delete the other user account if you want to.

