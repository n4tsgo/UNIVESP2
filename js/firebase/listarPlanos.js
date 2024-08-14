/**
 * obtemDados.
 * Obtem dados da collection a partir do Firebase.
 * @param {string} db - Nome da collection no Firebase
 * @param {integer} id - Id do registro no Firebase
 * @return {object} - Os dados do registro serão vinculados aos inputs do formulário.
 */

async function carregaPlanos(db) {
    const planoSelect = document.getElementById('plano');
    planoSelect.innerHTML = ''; // Limpa as opções atuais
  
    await firebase.database().ref(db).on('value', (snapshot) => {
      snapshot.forEach(item => {
        const plano = item.val();
        const option = document.createElement('option');
        option.value = plano.nome; // Usa o ID do plano como valor
        option.textContent = plano.nome; // Supondo que há um campo 'nome' no documento
        planoSelect.appendChild(option);
      });
    });
  }

document.addEventListener('DOMContentLoaded', () => {
carregaPlanos('planos'); // Substitua 'planos' pelo nome da sua coleção no Firebase
});