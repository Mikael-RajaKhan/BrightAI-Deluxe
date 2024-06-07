document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        generateResponse(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(userInput) {
    let response = '';
    if (userInput.toLowerCase().includes('hello')) {
        response = 'Hello! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('how are you')) {
        response = 'I am just a bot, but I am functioning as expected!';
    } else {
        response = 'I am sorry, I do not understand. Can you please rephrase?';
    }
    addMessage(response, 'bot');
}
