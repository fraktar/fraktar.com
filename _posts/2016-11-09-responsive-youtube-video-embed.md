---
layout: post
title: Embed responsive YouTube videos 
tags: code
---

You can use CSS to make an embedded YouTube video responsive.

**Step 1 - Open your style.css file and include the following rules:**

```
.embed-container { 
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden; 
  max-width: 100%;
} 
.embed-container iframe, 
.embed-container object, 
.embed-container embed { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}
```

**Step 2 - Wrap your iframe into a div with the class .embed-container**

```
<div class='embed-container'>
<iframe src='https://www.youtube.com/embed/-EjdMvYPSVU' frameborder='0' allowfullscreen>
</iframe>
</div>
```

See a working responsive video example in our <a href="/surge">Surge post</a>.