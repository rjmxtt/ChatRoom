const socket = io()

const message = document.querySelector('.message-form')
const messageInput = document.querySelector('.message-input')

message.addEventListener('submit', e => {
    e.preventDefault()
    socket.emit('message', messageInput.value)
    messageInput.value = ''
})

const messageThread = document.querySelector('.message-thread')

const render = ({message, id}) => {
    const div = document.createElement('div')
    div.classList.add('message-text')
    div.innerText = message
    messageThread.appendChild(div)
}

socket.on('message', data => {
    render(data)
})

