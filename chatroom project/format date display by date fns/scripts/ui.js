//Chat UI
class ChatUI {
    constructor(list) {
        this.list = list
    }

    render(data) {
        // const time = dateFns.format(data.created_at.toDate(), "YYYY/MMMM/Do dddd hh:mm:ss a")
        const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), { addSuffix: true, includeSeconds: true })
        const html = `
        <l1 class='list-group-item'>
            <span class='username'>${data.username}:</span>
            <span class='message'>${data.message}</span>
            <div class='time'>${when}</div>
        </li>
        `
        this.list.innerHTML += html;
    }
}