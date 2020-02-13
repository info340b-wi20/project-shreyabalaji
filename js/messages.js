'use strict'

let state = {
    chosen: [],
    messageIndex: 0,
    chats: []
}



//Jon's chat demo
function renderChats(chats) {
    let chatArea = document.querySelector("#chat");
    chats.forEach(function (chat) {
        chatArea.appendChild(renderOneChat(chat));
    });
}

function renderOneChat(chatObj) {
    // create outer li
    let li = document.createElement("li");
    li.classList.add("chat", "list-group-item");
    // create div w/ img
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("chat-pic");
    img.src = chatObj.picture;
    img.alt = chatObj.name;
    imgDiv.appendChild(img);
    li.appendChild(imgDiv);
    // create chat content
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat-content");
    let h4 = document.createElement("h4");
    h4.innerHTML = chatObj.name + (chatObj.unread ? "<span class='unread'/>" : "");
    chatDiv.appendChild(h4);
    let chatMessage = document.createElement("div");
    chatMessage.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.lastMessage;
    chatDiv.appendChild(chatMessage);
    li.appendChild(chatDiv);
    return li;
}

function fetchChats() {
    fetch("js/messages.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            state.chats = data.chats;
            renderChats(state.chats[state.messageIndex]); //what is profileIndex????
        });
}