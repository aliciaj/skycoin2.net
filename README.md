![skycoin.net logo](https://user-images.githubusercontent.com/26845312/32426914-084fdf62-c283-11e7-9d7e-9f35568138b4.png)

skycoin.net
===========

https://www.skycoin.net/

[![Build Status](https://travis-ci.org/skycoin/skycoin.net.svg?branch=master)](https://travis-ci.org/skycoin/skycoin.net)

This website uses [hugo](https://gohugo.io/) to generate a static website from markdown files.

Refer to hugo documentation for full detail.

Translation Bounty Program
==========================

If you are here for the translation bounty program and need help submitting a translation, follow this guide (pdf):

[Skycoin  Blog Github Translation Instructions](https://github.com/skycoin/blog/files/1469162/github-translation-manual.pdf)

Content: Create or Amend Posts
==============================

Look in the `site/content/` folder.  Posts are written in markdown.

Locally, the blog can be previewed with:

```sh
npm start
```

Make sure that your posts compile without error. Check the formatting.

Then, commit the changes and push to a new branch and submit a pull request against the `master` branch.

If there are no problems, then https://www.skycoin.net/ will automatically update in a few minutes.

Translations
============

https://gohugo.io/content-management/multilingual/

If the language is not currently supported by the blog,
add a language config statement to config.toml (see the file for an example).

The blog posts are in a subdirectory in `site/content/`.
To add a translation of an existing post, change the extension from `.md` to `.$LANG.md`.

For example, to add a German translation of `site/content/statement/Skycoin Distribution.md`,
name the file `site/content/statement/Skycoin Distribution.de.md`.

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