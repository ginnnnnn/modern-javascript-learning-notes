//dom query
const chatList = document.querySelector('.chat-list')

//class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom("gaming", 'luffy');
//get chats and render
chatroom.getChats((data) => {
    //update ui
    chatUI.render(data)
});
// chatroom.addChat('now!!')
