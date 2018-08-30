---
layout: post
title: Automatically deploy to Surge when pushing to Git
tags: deployment git
author: Rob

---
**After each git push to your repository, automatically publish the project to Surge.**

* Step 1 - In the root of your project, create a `package.json` file by running `npm init` in your terminal.

(enter a few general details or press enter to skip and choose default values where possible)

* Step 2 - Save modules as development dependencies by running `npm install --save-dev surge git-scripts`.
* Step 2.5 - Optionally, check to see if both `surge` and `git-scripts` are present in your `package.json` file.

It should look similar to this:

    "devDependencies": {
      "surge": "latest",
      "git-scripts": "0.2.1"
    }

* Step 3 - Thanks to the Git Scripts package that you've added, you can now add Git Hooks in your `package.json` file
  like I did below, after the `devDependencies` section:

    devDependencies": {
      "surge": "latest",
      "git-scripts": "0.2.1"
    },
    "git": {
      "scripts": {
        "pre-push": "surge --project ./ --domain example-githooks.surge.sh"
      }

**Done.**

Now, whenever you push your project to Git by entering `git push origin master`, the project is also deployed to Surge,
on the domain you've entered in the `Git Scripts` section. Edit that to match your Surge subdomain or custom domain: `example-githooks.surge.sh`.

Note: You can edit `surge --project ./ --domain example-githooks.surge.sh` to `surge --project ./_site --domain example-githooks.surge.sh`
for instance, if you'd like to only push the `_site` folder (good idea for Jekyll projects).

**Edit: using forestry.io to push this comment from /admin**.