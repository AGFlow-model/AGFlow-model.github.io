(function () {
  var button = document.getElementById('copy-bibtex');
  var block = document.getElementById('bibtex');

  if (!button || !block || !navigator.clipboard) {
    return;
  }

  button.addEventListener('click', function () {
    navigator.clipboard.writeText(block.innerText).then(function () {
      var oldText = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(function () {
        button.textContent = oldText;
      }, 1400);
    }).catch(function () {
      button.textContent = 'Copy failed';
      window.setTimeout(function () {
        button.textContent = 'Copy';
      }, 1400);
    });
  });
})();
