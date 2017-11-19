---
layout: post
title: Redcarpet & Jekyll - Open external links in new tab by default
tags: markdown redcarpet jekyll
---

**Expected behaviour:**

External links `[Google](http://www.google.com)` should render as <br>
`<a href="http://www.google.com" target="_blank">Google</a>`.

Redcarpet doesn't natively support this so I used Javascript to do the job.

* #1 - Create a new `site.js` file in your root Jekyll directory or in your `js` (scripts) folder.
* #2 - Link that file in your primary layout (ie. `_layouts/default.html`) just before the ending `</html>` tag like so:
`<script type="text/javascript" src="path/to/site.js"></script>`
* #3 - Paste this code in your `site.js` file:

```
// Call this function first
(function () {
  handleLinks()
})()

function handleLinks () {
  // Don't open our own site's links in new tabs
  var host = location.hostname 
  // Grab and loop over all <a> elements
  var allLinks = document.querySelectorAll('a') 
  for (var i = 0; i < allLinks.length; ++i) {
    // if links are external and not empty
    if (allLinks[i].hostname !== host && allLinks[i].hostname !== '') {
      allLinks[i].target = '_blank'
    }
  }
}
```

To test it up, open up a markdown post and enter an external link like so `[Google](http://www.google.com)`. 
It should open up in a new tab automatically. Any internal `[Root](http://www.my-site.com)` links should open up in the same tab.

