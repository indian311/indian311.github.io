(() => {
  const url = new URL(location.href);
  const choice = url.searchParams.get('lang');
  let saved;
  try {
    if (choice === 'ko' || choice === 'en') localStorage.setItem('malangsoft-language', choice);
    saved = localStorage.getItem('malangsoft-language');
  } catch (_) {
    // Browser language and explicit links still work when storage is disabled.
  }
  const preferred = navigator.languages?.[0] || navigator.language || 'en';
  const language = choice === 'ko' || choice === 'en' ? choice
    : saved === 'ko' || saved === 'en' ? saved
    : /^ko(?:-|$)/i.test(preferred) ? 'ko' : 'en';
  const path = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const target = (language === 'en' ? '/en' : '') + path;
  if (target !== url.pathname) {
    url.pathname = target;
    location.replace(url.href);
  }
})();
