![skycoin.net logo](https://user-images.githubusercontent.com/26845312/32426914-084fdf62-c283-11e7-9d7e-9f35568138b4.png)

skycoin.net
===========

https://staging3.skycoin.net/

[![Build Status](https://travis-ci.org/skycoin/skycoin2.net.svg?branch=master)](https://travis-ci.org/skycoin/skycoin2.net)

This website uses [hugo](https://gohugo.io/) to generate a static website from markdown files.

Refer to hugo documentation for full detail.

Content: Create or Amend Posts
==============================

Look in the `site/content/` folder.  Posts are written in markdown.

Locally, the blog can be previewed with:

```sh
hugo serve
```

Make sure that your posts compile without error. Check the formatting.

Then, commit the changes and push to a new branch and submit a pull request against the `master` branch.

If there are no problems, then https://staging3.skycoin.net/ will automatically update in a few minutes.

Development: Layout and Styling
===============================

Skycoin uses a modified Hugo theme with styling produced using post-css. Layout files are located in `site/layouts`, CSS is located at `src/css`, and JavaScript is in `src/js`. All should be getting bundled and compiled with the following commands.

Install the dependencies
```sh
	yarn
	# or
	npm install
```

Start your local development server
```sh
	npm start
	# or
	yarn start
```
