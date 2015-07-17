(function() {
  'use strict';

  var content = document.getElementById('content'),
      txt = document.getElementsByClassName('txt')[0];

  function getContent(pageToFetch) {
    fetch(pageToFetch)
      .then(function(response) {
        return response.text();
      }).then(function (text) {
        highlightUpdatedContent();
        content.setAttribute('markdown', text);
      });
  }

  function highlightUpdatedContent() {
    txt.classList.add('changed');
    setTimeout(function() {
      txt.classList.remove('changed');
    }, 800);
  }

  page('/', function() {
    getContent('content/next-event.md');
  });

  page('/about', function() {
    getContent('content/about.md');
  });

  page('/past', function() {
    getContent('content/past-events.md');
  });

  page({hashbang: true});
})();
