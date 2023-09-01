// // popup.js
// document.getElementById("contentButton").addEventListener("click", function() {
//     // Send a message to the content script
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { action: "contentFunction" });
//     });
//   });

const onButton = document.querySelector("#unvisible");
const offButton = document.querySelector("#visible");

function visibleAction(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {chrome.tabs.sendMessage(tabs[0].id, { action: "visible" });});
}
function unVisibleAction(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {chrome.tabs.sendMessage(tabs[0].id, { action: "unvisible" });});
}

onButton.addEventListener('click', unVisibleAction);
offButton.addEventListener('click', visibleAction);