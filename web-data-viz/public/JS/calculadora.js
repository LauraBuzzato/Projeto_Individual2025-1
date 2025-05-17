var livros = {}

fetch("/livros/buscarLivros", {
    method: "POST"
})
.then(res => res.json())
.then(dados => {
    dados.forEach(livro => {
        livros[livro.nome] = livro
        const opt = new Option(livro.nome, livro.nome)
        $('#ipt_livro').append(opt)
    });
    $('#ipt_livro').trigger('change.select2')
})
.catch(erro => console.error("Erro ao carregar livros:", erro))

function calcular(){
    var livroSelecionado = ipt_livro.value
    var tempo = Number(ipt_tempo.value)
    var tipotempo = ipt_tipotempo.value
    var selecionados = document.querySelectorAll('input[name="diasemana"]:checked')
    
    var listaDias = []
    
    selecionados.forEach(function(dia) {
        listaDias.push(dia.value)
    });

    if (livroSelecionado == '' || tempo == '' || tipotempo == '' || listaDias.length == 0) {
        alert("Preencha todos os campos!")
        return
    }

    if(tipotempo == 'hora'){
        tempo *= 60
    }

    var totalPaginas = Number(livros[livroSelecionado].qtdPagina)
    var qtdDias = parseInt(totalPaginas / tempo)

    while ((listaDias.length - 1) != qtdDias) {
        
        selecionados.forEach(function(dia) {
            listaDias.push(dia.value)
        });
        if ((listaDias.length - 1) >= qtdDias) {
            break
        }
    }

    for (var i = (listaDias.length - 1); (listaDias.length - 1) > qtdDias; i--) {
        listaDias.splice(i, 1)
    }

    const qtdPorDia = [];
    while(totalPaginas > 0){
        if(totalPaginas >= tempo){
            totalPaginas -= tempo
            qtdPorDia.push(tempo)
        } else {
            qtdPorDia.push(totalPaginas)
            totalPaginas = 0
        }
    }

    meuGrafico.data.labels = listaDias
    meuGrafico.data.datasets[0].data = qtdPorDia
    meuGrafico.update()

    document.getElementById('teste').classList.remove('hidden')
}
