(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (!theme) theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'coal' : 'sky';
    document.documentElement.setAttribute('data-theme', theme);

    var supported = ['en','de','uk'];
    var lang = localStorage.getItem('lang') || (navigator.language || 'en').slice(0,2).toLowerCase();
    if (supported.indexOf(lang) === -1) lang = 'en';
    document.documentElement.setAttribute('lang', lang);
  } catch(e) {}
})();
