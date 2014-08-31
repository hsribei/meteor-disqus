Template.disqus.rendered = function () {
  if (Session.get('isDisqusLoaded') !== true) {
    DISQUS_LOADER();
    Session.set('isDisqusLoaded', true);
  }
  if (typeof(DISQUS) !== "undefined") {
    DISQUS.reset({
      reload: true,
      config: function () {
      }
    });
  }
};
