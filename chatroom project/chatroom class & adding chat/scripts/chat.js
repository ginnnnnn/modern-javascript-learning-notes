//adding new chat documents
//etting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
    }
    async addChat(message) {
        //format a chat object
        const now = new Date();
        const chat = {
            username: this.username,
            room: this.room,
            message: message,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save in the database, return a response , we actually dont need any response
        //from server but we use the response to chain ui update method 
        const response = await this.chats.add(chat);
        return response;
        //return this is also ok for chaining
    };
    //this is not async call , this is a one-time method , we dont wait for the response
    //we moniter the state change for this front end
    getChats(callback) {
        const unSub = this.chats
            .where('room', '==', this.room)
            //listen to certern property changes in here ,just the property is 
            //the centern room changes .use '==' in firestore not ===
            .orderBy("created_at")
            //create index in firestore for ordering by timestamp ,it wont work at the first time
            //by using the error link to create the index
            .onSnapshot(snapshot => {
                // console.log(snapshot)
                snapshot.docChanges().forEach(change => {
                    // console.log(change);
                    if (change.type === "added") {
                        //update UI
                        const doc = change.doc;
                        callback(doc.data());
                    };

                })
            })
        return unSub;
    }
}

//for testing
const chatroom = new Chatroom("gaming", 'luffy');
// chatroom.addChat('nami!!!').then(console.log('chats added')).catch(err => console.log(err));

chatroom.getChats((data) => {
    //update ui
    console.log(data)
});