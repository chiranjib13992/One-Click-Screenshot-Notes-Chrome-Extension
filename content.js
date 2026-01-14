chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "GET_PAGE_INFO") {
    sendResponse({
      title: document.title,
      url: window.location.href
    });
  }
});
