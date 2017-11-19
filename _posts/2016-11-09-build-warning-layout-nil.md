---
layout: post
title: Build Warning - Layout 'nil' does not exist
tags: error
author: Rob
---

If you're using <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> you might get this error message:

```
Build Warning: Layout 'nil' requested in atom.xml does not exist.
```

**Solution/fix**

It's pretty easy, just use `layout: null` instead of 'layout: nil' in your atom.xml front matter.

