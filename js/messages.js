'use strict'

let state = {
    chosen: [],
    messageIndex: 0,
    chats: []
}



//chat demo
function renderChats(chats) {
    let chatArea = document.querySelector("#chats"); //is this the right class? should we have it in a list?
    chats.forEach(function (chat, index) {
        chatArea.appendChild(renderOneChat(chat, index));
    });
}

function renderOneChat(chatObj, index) {
    // create outer li
    let li = document.createElement("li");
    li.classList.add("chat", "list-group-item");
    // create div w/ img
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.classList.add("chat-pic");
    img.src = chatObj.picture;
    img.alt = chatObj.name;
    img.classList.add('chat', 'img');
    imgDiv.appendChild(img);
    li.appendChild(imgDiv);
    // create chat content
    let chatDiv = document.createElement("div");
    chatDiv.addEventListener("click", function() {
        console.log(state.chats[index])
        let chat = document.querySelector('#chat');
        chat.classList.remove('hidden');
        chats.classList.add('hidden');
        let h1 = document.querySelector('#name');
        h1.textContent = chatObj.name; 
        let points = document.querySelector('.lead');
        points.innerHTML = "" + chatObj.points + "/100";
        let img = document.querySelector('.match');
        img.src = chatObj.picture;
        img.classList.add('blindfoldcup');
        renderMessages(state.chats[index].messages);
    })
    chatDiv.classList.add("chat-content");
    let h4 = document.createElement("h4");
    h4.innerHTML = chatObj.name + (chatObj.unread ? "<span class='unread'/>" : "");
    chatDiv.classList.add('chat'); 
    chatDiv.appendChild(h4);
    let chatMessage = document.createElement("div");
    chatMessage.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.lastMessage;
    chatDiv.appendChild(chatMessage);
    li.appendChild(chatDiv);
    return li;
}

function renderMessages(messages) {
    let ol = document.querySelector('ol');
    messages.forEach(element => {
        ol.appendChild(renderMessage(element));
    });
    let messageInput = document.querySelector('.messaging-input');
    messageInput.classList.remove('hidden');
}

function renderMessage(messageObj) {
    let li = document.createElement('li');
    li.classList.add("chat", "list-group-item");
    let messageDiv = document.createElement('div');
    let messageText = document.createElement('p');
    messageText.textContent = messageObj.content;
    messageDiv.appendChild(messageText);
    li.appendChild(messageDiv);
    if (messageObj.sender == "them") {
        messageDiv.classList.add('message-them');
    } else {
        messageDiv.classList.add('message-me');
    }
    return li;
}

function fetchChats() {
    fetch("js/messages.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            state.chats = data.chats;
            renderChats(state.chats); //???
        });
}
fetchChats();

//function newMessage {
    //add event listener to add a new message to chats[message]???
//}

console.log(state.chats);