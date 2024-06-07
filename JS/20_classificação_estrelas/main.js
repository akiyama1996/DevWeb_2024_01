// Classificação inicial
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1,
    };
    // Total de estrelas
    const starsTotal = 5;
    // Produto
    let product;
    // Elementos do formulário
    const productSelect = document.getElementById('product-select');
    const ratingControl = document.getElementById('rating-control');

    // Executa o método getRatings quando o DOM carregado no navegador
document.addEventListener('DOMContentLoaded', getRatings);
// Evento change para selecionar um produto
productSelect.addEventListener('change', (e) => {
product = e.target.value;
// Habilita do controle de classificação
ratingControl.disabled = false;
ratingControl.value = ratings[product];
});
// Evento blur, quando o elemento perde o foco
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;
    // Garante o valor máximo da classificação 5 estrelas
    if (rating > 5) {
    alert('Por favor, classififique entre 1 - 5');
    return;
    }
    // Alteração da classidficação
    ratings[product] = rating;
    getRatings();
    });