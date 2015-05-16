(function() {
  'use strict';

  var nav = document.getElementById('logo-col'),
      content = document.getElementById('content'),
      pageToFetch = 'content/next-meetup.md';

  nav.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target && e.target.nodeName == 'A') {
      getContent(e.target.getAttribute('href'));
    } else if (e.target && e.target.nodeName == 'IMG') {
      getContent(e.target.parentNode.getAttribute('href'));
    }
  });

  function getContent(pageToFetch) {
    fetch(pageToFetch)
      .then(function(response) {
        return response.text();
      }).then(function (text) {
        content.setAttribute('text', text);
      });
  }

  getContent(pageToFetch);

})();
