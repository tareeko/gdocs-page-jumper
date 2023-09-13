chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let editor = document.querySelector('.kix-appview-editor');
  let scroller = document.querySelector('.jfk-tooltip-contentId');
  let docLength = document.querySelector(
    '.kix-rotatingtilemanager'
  ).scrollHeight;

  let currentScroll = editor.scrollTop;
  editor.scrollTop = docLength;
  setTimeout(() => {
    editor.scrollTop = currentScroll;
  }, 25);

  let totalPages = 1;

  setTimeout(() => {
    totalPages = scroller.textContent.split(' ')[2];
    let pageFactor = docLength / totalPages;

    var data = request.data;

    if (totalPages > 1) {
      editor.scrollTop = (data - 1) * pageFactor;
      sendResponse({
        data: data,
        success: true,
      });
    } else {
      sendResponse({
        status: status,
      });
    }
  }, 50);
});
