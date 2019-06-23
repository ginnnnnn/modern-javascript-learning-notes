const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipeElement = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
    <li data-id='${id}'>
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html
};



//firebase get function
db.collection('recipes').get().then(snapshot => {
    //when we have the data,it return an array and use data() get get the data 
    // console.log(snapshot.docs[0].data()); 
    snapshot.docs.forEach(doc => {
        const recipe = doc.data();
        const id = doc.id
        addRecipeElement(recipe, id)
    })

}).catch(err => console.log(err));

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