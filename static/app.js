const socket = io()

const message = document.querySelector('.message-form')
const messageInput = document.querySelector('.message-input')

message.addEventListener('submit', e => {
    e.preventDefault()
    socket.emit('message', messageInput.value)
    messageInput.value = ''
})



socket.on('message', message => {
    console.log(message)
})

