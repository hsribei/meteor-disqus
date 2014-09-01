# meteor-disqus

To install:

    meteor add obvio171:disqus

To use:

Set `Meteor.settings.public.disqus.shortname` with your disqus shortname. ([Here's how to do it.](http://docs.meteor.com/#meteor_settings))

Then, whenever you want a disqus thread on a template, add `{{>disqus}}` and you're done.

## Why?

Disqus is a major PITA to make work with Meteor. It took me a long time to sift through StackOverflow questions, blog posts, and mailing list threads, comb through outdated advice (`rendered` isn't what it used to be, and `{{#constant}}` doesn't even exist anymore) and, through much trial and error, make this thing work.

Now here it is to you, the gift of time.

Enjoy.

(And star the repo if you like it plz ;))

## Warning

This is the first, "works for me", version. Use at your own risk, but please do try it.

If you find anything broken/confusing, please create an issue for it and I'll be more than glad to help you out.

## License

MIT
