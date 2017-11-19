---
layout: post
title: Uncss error - ignoring C.UTF-8
tags: error gulp grunt
author: Rob
---

You might get this error when using <a href="https://github.com/giakki/uncss" target="_blank">Uncss</a> (plain or with Gulp/Grunt):

```
Fontconfig warning: ignoring C.UTF-8: not a valid language tag
```

**Solution/fix**

Just type this command in the terminal and then run Uncss again (or gulp/grunt uncss):

```
LC_ALL=C
```

