const list = document.querySelector('ul');
const form = document.querySelector('form');
const btn = document.querySelector('.unsub')

const addRecipeElement = (recipe, id) => {
    let time = recipe.created_at.toDate();//firebase method to format date for using
    let html = `
    <li data-id='${id}'>
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html
};

const removeRecipeElement = (id) => {
    const li = list.querySelector(`li[data-id=${id}]`)
    li.remove();
};

//get documents and realtime listener
const unSub = db.collection('recipes').onSnapshot(snapshot => {
    //onSnapshot() ,anytime when firestore collections changes firestore will take a snapshot
    //and the snapshot represent a state in that time
    // console.log(snapshot.docChanges());
    //it will return a array for what changes with the type added or removed..
    snapshot.docChanges().forEach(change => {
        //first get the database
        const doc = change.doc;
        if (change.type === "added") {
            addRecipeElement(doc.data(), doc.id)
        } else if (change.type === "removed") {
            removeRecipeElement(doc.id)
        }
    })
});
//this onSnapshot() method will invoke realtime listening to the database change
//and!!! return a function for unsubscribe the realtime listening




//add document
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.recipe.value;
    const now = new Date();
    form.reset();
    const recipe = {
        title: title,
        created_at: firebase.firestore.Timestamp.fromDate(now),
        chef: 'luffy'
    };
    //firebase.firestore.Timestamp.fromDate(now) pass now to firebase to create a 
    //firestore Timestamp object by using the method fromDate();
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added')
    }).catch(err => console.log(err));
    //add() is firestore method for adding document to firebase database
});

list.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted')
        }).catch(err => console.log(err));
        //.doc(id) by passing id to taget a single document we need
        //for delete data from firestore using delete() method
    }
})

btn.addEventListener('click', () => {
    unSub();
    console.log('stop listening')
})