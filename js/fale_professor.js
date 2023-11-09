 // Mensagens simuladas para os professores
 const professor1Messages = [
    { text: "Olá, alunos. Lembrem-se de que a prova foi adiada para a próxima sexta-feira.", time: "10:00" },
    { text: "Estou disponível para dúvidas sobre a matéria após a aula.", time: "11:00" }
];

const professor2Messages = [
    { text: "Bom dia, turma! Lembrem-se de ler o capítulo 5 para a próxima aula.", time: "9:00" },
    { text: "A prova será no final deste mês, então não deixem de revisar.", time: "9:30" }
];

const professor3Messages = [
    { text: "Bom dia, pessoal. Não se esqueçam da entrega do projeto até o final da semana.", time: "14:00" },
    { text: "Quem precisar de ajuda, estarei no laboratório à tarde.", time: "14:30" }
];

// Mensagem fictícia do aluno para cada professor
const alunoMessageToProfessor1 = "Olá, Prof. João. Preciso de mais informações sobre a matéria para a prova adiada.";
const alunoMessageToProfessor2 = "Prof. Ana, qual é o tema principal do capítulo 5?";
const alunoMessageToProfessor3 = "Olá, Prof. Maria. Não poderei entregar o projeto na data estipulada, posso ter um prazo adicional?";

let currentMessages = {};

function showConversation(professor) {
    // Selecionar a conversa do professor
    if (professor === 'professor1') {
        currentMessages = professor1Messages;
        document.getElementById('selectedConversation').innerText = 'Professor João';
    } else if (professor === 'professor2') {
        currentMessages = professor2Messages;
        document.getElementById('selectedConversation').innerText = 'Professor Ana';
    } else if (professor === 'professor3') {
        currentMessages = professor3Messages;
        document.getElementById('selectedConversation').innerText = 'Professor Maria';
    }
    
    // Exibir mensagens
    let messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    currentMessages.forEach(message => {
        messagesDiv.innerHTML += `<div><strong>Professor</strong>: ${message.text} <small>(${message.time})</small></div>`;
    });
}

function sendMessage() {
    // Simulação de envio de mensagem do aluno
    const input = document.getElementById('messageInput').value;
    if (input) {
        const timeNow = new Date().toLocaleTimeString();
        let messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<div><strong>Aluno</strong>: ${input} <small>(${timeNow})</small></div>`;
        document.getElementById('messageInput').value = '';
    }
}