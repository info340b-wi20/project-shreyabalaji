'use strict'

let state = {
    chosen: [],
    messageIndex: 0,
    chats: [],
    messageList: null
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
    li.classList.add("chat", "list-group-item"); //what does list group item do??
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
        let img = document.querySelector('.match');
        img.src = chatObj.picture;
        img.classList.add('propicture');
        renderMessages();
        // try and make a back button
        
        // make a new function
        // make a new div that holds a new card with the text we need in it

        // function renderChat() {
        //     let li = document.createElement("li");
        //     li.classList.add("chat", "list-group-item"); //what does list group item do??
        //     // create div w/ img
        //     let imgDiv = document.createElement("div");
        //     let img = document.createElement("img");
        //     img.classList.add("chat-pic");
        //     img.src = chatObj.picture;
        //     img.alt = chatObj.name;
        //     img.classList.add('chat', 'img');
        //     imgDiv.appendChild(img);
        //     li.appendChild(imgDiv);
        //     // create chat content
        //     let chatDiv = document.createElement("div");
        //     chatDiv.classList.add("chat-content");
        //     let h4 = document.createElement("h4");
        //     h4.innerHTML = chatObj.name + (chatObj.unread ? "<span class='unread'/>" : "");
        //     chatDiv.classList.add('chat'); //Are we adding the class to the right div?
        //     chatDiv.appendChild(h4);
        //     let chatMessage = document.createElement("div");
        //     chatMessage.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.lastMessage; //or use last message in message array??
        //     chatDiv.appendChild(chatMessage);
        //     li.appendChild(chatDiv);
        //     return li;
        // }
        // hide chats
        // fill chat with the content from the chats list at that index
        // unhide chat
    })
    chatDiv.classList.add("chat-content");
    let h4 = document.createElement("h4");
    h4.innerHTML = chatObj.name + (chatObj.unread ? "<span class='unread'/>" : "");
    chatDiv.classList.add('chat'); //Are we adding the class to the right div?
    chatDiv.appendChild(h4);
    let chatMessage = document.createElement("div");
    chatMessage.innerHTML = (chatObj.from ? "<strong>You:</strong> " : "") + chatObj.lastMessage; //or use last message in message array??
    chatDiv.appendChild(chatMessage);
    li.appendChild(chatDiv);
    return li;
}

function renderMessages() {
    let chatsToRender = {};
    let chatList = document.querySelector("#chat-list");
    chatList.innerHTML = "";
    // for every chat -> you'll remake them
}

function renderMessage() {
    // build the div for messages
}

function addChat() {
    // let value from message input
    let chatObj = {
        content: "value"
    }
    selectedChats.push(chatObj);
    renderChats();
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