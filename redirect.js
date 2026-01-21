// Redirect for GitHub Pages with HashRouter
if (!window.location.hash && window.location.pathname.endsWith('/dzero/')) {
  window.location.replace(window.location.href.replace(/\/$/, '') + '#/');
}
