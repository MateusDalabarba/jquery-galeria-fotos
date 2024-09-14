$(document).ready(function(){
    // Exibe o formulário ao clicar no botão do header
    $('header button').click(function(){
        $('form').slideDown();
    });

    // Esconde o formulário ao clicar no botão cancelar
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    // Ao submeter o formulário, adiciona uma nova imagem à lista
    $('form').on('submit', function(e){
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        console.log(enderecoDaNovaImagem); // Log do endereço da imagem

        // Cria um novo item de lista
        const novoItem = $('<li style="display:none"></li>');

        // Adiciona a imagem ao novo item
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        // Adiciona a div com o link para a imagem em tamanho real
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem);

        // Adiciona o novo item à lista de imagens
        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn(1000);

        // Limpa o campo de endereço da imagem
        $('#endereco-imagem-nova').val('');
    });
});

