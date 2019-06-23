//dom query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
// const newNameForm = document.querySelector('.new-name');

//add chat submit listener
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = newChatForm.message.value.trim();
    if (!msg) {
        return newChatForm.reset();
    }
    //hook up to chatroom obj,it's to put it here cus it wont excute before
    //chatroom obj created
    chatroom.addChat(msg).then(() => {
        //reset form field 
        newChatForm.reset();
    }).catch(err => console.log(err))

});




//class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom("gaming", 'luffy');
//get chats and render
chatroom.getChats((data) => {
    //update ui
    chatUI.render(data)
});
// chatroom.addChat('now!!')
