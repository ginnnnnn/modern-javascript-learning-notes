//Chat UI
class ChatUI {
    constructor(list) {
        this.list = list
    }

    render(data) {
        const html = `
        <l1 class='list-group-item'>
            <span class='username'>${data.username}</span>
            <span class='message'>${data.message}</span>
            <div class='time'>${data.created_at.toDate()}</div>
        </li>
        `
        this.list.innerHTML += html;
    }
}