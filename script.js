function addContact() {
    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Verifica se os campos não estão vazios
    if (name && phone) {
        // Obtém a tabela
        const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];

        // Cria uma nova linha
        const newRow = table.insertRow();

        // Insere as células e os valores na nova linha
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpa os campos do formulário
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}