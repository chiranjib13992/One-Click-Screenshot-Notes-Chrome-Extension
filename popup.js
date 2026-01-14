document.getElementById("captureBtn").onclick = () => {
  chrome.runtime.sendMessage({ action: "CAPTURE_SCREENSHOT" }, (res) => {
    document.getElementById("preview").src = res.image;
  });
};

document.getElementById("saveBtn").onclick = () => {
  const note = document.getElementById("note").value;
  chrome.storage.local.set({ note }, () => {
    alert("Saved!");
  });
};
