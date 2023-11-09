const secretariaMessages = [
    { text: "Olá, em que posso ajudar?", time: "10:00" },
    { text: "Claro, podemos providenciar isso para você.", time: "11:00" },
    { text: "Está feito! Se precisar de mais alguma coisa, estou à disposição.", time: "11:15" }
];

const alunoMessages = [];

function showConversation() {
    let messagesDiv = document.getElementById('alunoMessages');
    messagesDiv.innerHTML = '';
    secretariaMessages.forEach(message => {
        messagesDiv.innerHTML += `<div><strong>Secretaria</strong>: ${message.text} (${message.time})</div>`;
    });
    alunoMessages.forEach(message => {
        messagesDiv.innerHTML += `<div><strong>Aluno</strong>: ${message.text} (${message.time})</div>`;
    });
}

function sendToSecretary() {
    const input = document.getElementById('alunoMessageInput').value;
    if (input) {
        const timeNow = new Date().toLocaleTimeString();
        alunoMessages.push({ text: input, time: timeNow });
        showConversation();
        document.getElementById('alunoMessageInput').value = '';
    }
}

showConversation();
