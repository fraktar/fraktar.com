---
layout: post
title: Serve Jekyll On Cloud9 Command
tags: jekyll cloud9
author: Andy
---


Input this command in the Cloud9 terminal:


`jekyll serve --port $PORT --host $IP --baseurl ''`

You sould see something like this if everything went ok:

```
Configuration file: /home/ubuntu/workspace/Fraktar/_config.yml
            Source: /home/ubuntu/workspace/Fraktar
       Destination: /home/ubuntu/workspace/Fraktar/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 1.198 seconds.
 Auto-regeneration: enabled for '/home/ubuntu/workspace/Fraktar'
Configuration file: /home/ubuntu/workspace/Fraktar/_config.yml
    Server address: http://0.0.0.0:8080/
  Server running... press ctrl-c to stop.
  ```
In case you get this error:
  
```
 Dependency Error: Yikes! It looks like you don't have jekyll-paginate or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- jekyll-paginate' If you run into trouble, you can find helpful resources at http://jekyllrb.com/help/! 
jekyll 3.1.2 | Error:  jekyll-paginate
```
We should install the `jekyll-paginate` gem by entering the following command:
`gem install jekyll-paginate`

For other similar errors just install the required gem by using the syntax `gem install <gem-name>`. Subtitute `<gem-name>` with the actual gem's name specified in the error message.:)








  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  