
console.log("Background running");

chrome.action.onClicked.addListener(btnClick);

function btnClick(tab) {
    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}