// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var r = /\\u([\d\w]{4})/gi;
const convertString = function (str) {
  try {
    str = str.replace(r, function (match, grp) {
      return String.fromCharCode(parseInt(grp, 16));
    });
    //console.log(str); // http%3A%2F%2Fexample.com
    console.log(unescape('http%3A%2F%2Fexample.com'));
    str = unescape(str);
    console.log(str); // http://example.com
  } catch {
    console.log('convertString_eeror');
  }
};
const decodeMethod = function (string) {
  try {
    return decodeURIComponent(
      JSON.parse('"' + string.replace(/\"/g, '\\"') + '"')
    );
  } catch {
    console.log('decodeMethod_errror');
  }
};

var PasteValue =
  'It is five years since the last edition of this \u001ctour de force\u001d textbook of clinical pharmacology, originally written in the 1940s by Goodman and Gilman. The advances in pharmacology since that time are matched by the sheer size and weight of this volume, and necessarily so.';
console.log(PasteValue);
decodeMethod(PasteValue);
convertString(PasteValue)