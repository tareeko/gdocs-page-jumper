document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('jump-button');
  var pageInput = document.getElementById('page-input');
  document.getElementById('status').textContent = 'Extension loaded';

  button.addEventListener('click', function () {
    jumpToPage();
  });
  pageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      jumpToPage();
    }
  });

  function jumpToPage() {
    var page = pageInput.value;
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: page },
          function (response) {
            window.close();
          }
        );
      }
    );
  }
});
