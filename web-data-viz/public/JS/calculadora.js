var livros = {}

fetch("/livros/buscarLivros", {
    method: "POST"
})
.then(res => res.json())
.then(dados => {
    dados.forEach(livro => {
        livros[livro.id] = livro
        const opt = new Option(livro.nome, livro.id)
        $('#ipt_livro').append(opt)
    })
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
    document.getElementById('containeravaliacoes').classList.add('hidden')
}

var avaliacoes = []

function ver(){
    var livroSelecionado = ipt_livro.value

    div_avaliacao.innerHTML = ``

    fetch("/avaliacoes/ver", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idLivroServer: livroSelecionado
        }),
    })

    .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    avaliacoes = dados
                    
                    for(i=0;i< avaliacoes.length; i++){
                        nota = Number(avaliacoes[i].nota)
                        estrelas ='⭐'.repeat(nota)
                        div_avaliacao.innerHTML += `<div class="container_avaliacao"><img src="${avaliacoes[i].urlCapa}" alt="" width="100px" height="150px"> <div class="containertextos"><span class="tamanhoestrela"><h2>${estrelas}</h2></span><h2>${avaliacoes[i].avaliacao}</h2></div></div>`
                    }
                    document.getElementById('containeravaliacoes').classList.remove('hidden')
                    document.getElementById('teste').classList.add('hidden')


                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}