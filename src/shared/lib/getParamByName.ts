export function getParamByName(name: string, url = window.location.href, startChar = '?') {
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[${startChar}&]` + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
