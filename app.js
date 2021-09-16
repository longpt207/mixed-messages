// hien thi message
function showMessage() {
    const message = createMessage()
    console.log(message)
}
function randomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
// tao message random
function createMessage() {
    //random welcome
    let ramdomWelcome = randomElement(messageStore.welcome)
    //get user name
    let uname = username
    // random subject
    let ramdomSubject = randomElement(messageStore.subject)
    // random adjective
    let ramdomAdjective = randomElement(messageStore.adjective)
    // create message

    return `${ramdomWelcome} ${uname}. ${ramdomSubject} is ${ramdomAdjective}`
}
// kho chua message

const messageStore = {
    welcome: ['Hi','Hello','Bonjour'],
    subject:['Today', 'Your dog', 'Your cat' ],
    adjective:['nice', 'not good', 'mad']
}

const username = "Long"

showMessage()