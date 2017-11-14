---
layout: post
title: 3 Jekyll Run Configurations on Cloud9
label: build
---

**Here are 3 ways to set up the Cloud9 IDE with a Jekyll run configuration. That way you can save time serving/building your project by clicking `Run`
instead of writing the long `jekyll serve --port $PORT --host $IP --baseurl ''` command in the terminal each time, or damaging
your up key looking for the previous time you've entered jekyll serve.**

No need to do all the methods below. If at least one works, good for you!

## **Method #1**

* A - Click on `Run` > `Run Configurations` > `New Run Configuration` (top menu in Cloud9 IDE).

A `[New] - Idle` tab should open up next to your existing terminal and other windows.

* B - In the `Run Config Name` field enter any name. ie. *Jekyll Serve #1*

![New C9 Run Config](/public/images/c9-run-1.png "New C9 Run Config")

* C - In the `Command` field enter `jekyll serve --port $PORT --host $IP --baseurl ""`

* D - Don't push `Run` before clicking on the `CWD` button and selecting your root Jekyll project path.

Now you will find this configuration in the menu `Run` > `Run Configurations` > `Jekyll Serve #1`.

## **Method #2**

All steps similar to the first method, with the exception of this command:

* C - In the `Command` field enter `jekyll serve -H $IP -P $PORT --baseurl ""`

## **Method #3**

* A - Create a new file called `_c9_config.yml` in the root of your Jekyll project folder.

* B - Open it and add this to it:

```
url: "https://[workspace]-[username].c9users.io"
baseurl: ""
```

Don't forget to edit `[workspace]` and `[username]` to match your C9 username and current workspace that holds your Jekyll project.

Save the file.

* C - Create a new run configuration (follow step A in any of the previous methods).

* D - Enter this command in the `Command` field `jekyll serve --host $IP --port $PORT --config _config.yml,_c9_config.yml`.

* E - Follow *Step B* from Method #1 and name your config something like `Jekyll Serve #3`.

* F - Similarly to *Step D* from Method #1, click on `CWD` and set your current working directory.

Assuming you've refrained from pushing the green `Run` button next to each run configuration that you've created,
go ahead and push them all (one by one as you can't have multiple serve instances running at the same time).

The one that works you could make it the default option so when you click on the green `Run Project` 
button at the top of the C9 IDE, that run command will run, serving your project asap.

Click on `Run` > `Run Configurations` > `Manage...`

![Default C9 Run Config](/public/images/c9-run-2.png "Default C9 Run Config")

Click on the one that works > `Set As Default`.

That's it. 

Of course, you could also create other run configurations, like for
`jekyll build`.

**Known Issue**

Build breaks when you enter single quotes, instead of double quotes on the `--baseurl ''` vs `--baseurl""`."