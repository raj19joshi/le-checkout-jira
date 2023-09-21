function injectScript(file_path, tag) {
    const node = document.getElementsByTagName(tag)[0],
        script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}

/*function injectStyle(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('src', file_path);
  node.appendChild(style);
}*/

function injectStyleRel(file_path, tag) {
  const node = document.getElementsByTagName(tag)[0],
      style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('type', 'text/css');
  style.setAttribute('href', file_path);
  node.appendChild(style);
}

injectStyleRel(chrome.runtime.getURL('/content.css'), 'head');
injectScript(chrome.runtime.getURL('/content.js'), 'body');

// run a script that has access to information on the current tab
// Source: https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/
//chrome.scripting.executeScript({file: 'content.js'});
/*
chrome.tabs.insertCSS(null, {
  file: "content.css"
});*/
