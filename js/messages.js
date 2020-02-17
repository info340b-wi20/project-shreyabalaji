'use strict'

let state = {
    chosen: [],
    messageIndex: 0,
    chats: [],
    messageList: null,
    currentChat: null
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
        state.messageList = state.chats[index].messages;
        console.log(state.chats[index]);
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

    // this part is ex[perienmemtal 
    //let chatMessageNext = document.createElement("div");
    //chatMessageNext.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.prevMsg;
    //chatDiv.appendChild(chatMessageNext);
    //li.appendChild(chatDiv);
    
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
    //newMessage();
    return li;
}

// function renderMessages(messages) {
//     // get access to message area
//     let messageArea = document.querySelector('.form-control');
//     messageArea.innerHTML = "";
//     state.currentChat.messages.forEach(function(message) {
//         messageArea.appendChild(renderMessage(message));
//     });
// }

// function newMessage() {
//     state.currentChat = state.chats[index];
//     currentChat.addEventListener("submit", function() {
//         renderMessages(state.currentChat);
//     })  
// }

function fetchChats() {
    fetch("js/messages.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            state.chats = data.chats;
            renderChats(state.chats); //??
        });
}
fetchChats();



console.log(state.chats);