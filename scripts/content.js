chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var pageArray = document.querySelectorAll(".kix-page");
  var data = request.data;
  if (data <= (pageArray.length)) {
    document.querySelectorAll('.kix-page')[data - 1].scrollIntoView(true);
    sendResponse({
      data: data,
      success: true
    });
  } else {
    sendResponse({
      status: status
    });
  }
});
