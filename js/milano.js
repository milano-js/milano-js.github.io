(function() {
  'use strict';

  var nav = document.getElementById('logo-col'),
      content = document.getElementById('content'),
      txt = document.getElementsByClassName('txt')[0];

  nav.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target && e.target.nodeName == 'A') {
      getContent(e.target.getAttribute('href'));
    } else if (e.target && e.target.nodeName == 'IMG') {
      getContent(e.target.parentNode.getAttribute('href'));
    }
    //content.scrollIntoView();
    highlightUpdatedContent();
  });

  function getContent(pageToFetch) {
    fetch(pageToFetch)
      .then(function(response) {
        return response.text();
      }).then(function (text) {
        content.setAttribute('text', text);
      });
  }

  function highlightUpdatedContent() {
    txt.classList.add('changed');
    setTimeout(function() {
      txt.classList.remove('changed');
    }, 800);
  }

  getContent('content/next-meetup.md');

})();
