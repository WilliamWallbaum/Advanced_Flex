/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
Shopify.theme.jsFAQ = {
  init: function() {

    const $faqHeading = $('.faq-accordion > dt > button');

    $('.faq-accordion > dd').attr('aria-hidden', true);

    $faqHeading.attr('aria-expanded', false);

    $faqHeading.off('click.activate').on('click.activate', function() { // Use event namespace to avoid multiple event bindings

      const faqTitle = $(this);
      const faqIcons = $(this).find('.icon');

      let state = $(this).attr('aria-expanded') === 'false' ? true : false;
      $(this).attr('aria-expanded', state);
      $(this).parent().next().slideToggle(function() {

        if (faqIcons.hasClass('icon--active')) {
          faqIcons.toggleClass('icon--active');
        }

      });
      $(this).parent().next().attr('aria-hidden', !state);
      return false;
    });

    $faqHeading.off('keydown').on('keydown', function(event) { // Use off() to remove previous event binding
      let keyCode = event.keyCode || e.which;
      if (keyCode === 13) {
        $(this).trigger('click.activate'); // Trigger the custom event 'click.activate'
      }
    });

  },
  unload: function() {
    const $faqHeading = $('.faq-accordion > dt > button');
    $faqHeading.off('click.activate'); // Use event namespace to unbind the specific click event
    $faqHeading.off('keydown');
  }
}
/******/ })()
