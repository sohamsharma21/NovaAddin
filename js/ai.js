document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.querySelector('#chat-input');
    const sendButton = document.querySelector('#send-button');
    const chatContainer = document.querySelector('.chat-container');
    const closeChatBtn = document.querySelector('#close-chat');

    sendButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

     closeChatBtn.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });


    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        appendMessage('user', message);
        chatInput.value = '';

        // Simulate AI response 
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            appendMessage('bot', aiResponse);
        }, 500); // Simulate a delay for response
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        messageDiv.textContent = message;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;  //Auto scroll to the newest message
    }

    function getAIResponse(message) {
        // This is a basic response logic and can be expanded
        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'Hello there!';
        }
        else if (lowerMessage.includes('job')) {
            return 'Looking for a job? You can view available jobs at our Jobs section';
        }
        else if (lowerMessage.includes('profile')) {
            return 'Want to see your profile? You can view it at our Profile section';
        }
        else if (lowerMessage.includes('search')) {
            return 'Need to search for a person or a job? You can do that at our Search section';
        }
        else if (lowerMessage.includes('help')) {
            return 'I can assist with general information. How can I help you today?';
        }
        else {
            return 'I am still learning, please try again later!';
        }
    }
});