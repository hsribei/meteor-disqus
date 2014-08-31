Package.describe({
  name: 'obvio171:disqus',
  summary: "Disqus package. Add {{>disqus}} to template. Be happy.",
  version: "1.0.0",
  git: "https://github.com/obvio171/meteor-disqus.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.add_files('disqus_loader.js', 'client');
  api.add_files('disqus.html', 'client');
  api.add_files('disqus.js', 'client');
  api.use(['templating'], 'client');
});
