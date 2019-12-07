document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('status').textContent = "Extension loaded";
  var button = document.getElementById('jump-button');
  button.addEventListener('click', function() {
    var page = $('#page-input').val();
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        data: page
      }, function(response) {});
    });
  });
});
