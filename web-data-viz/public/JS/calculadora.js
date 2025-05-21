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

function calcular() {
    var livroSelecionado = ipt_livro.value
    var tempo = Number(ipt_tempo.value)
    var tipotempo = ipt_tipotempo.value
    var selecionados = document.querySelectorAll('input[name="diasemana"]:checked')

    var listaDias = []

    selecionados.forEach(function (dia) {
        listaDias.push(dia.value)
    });

    if (livroSelecionado == '' || tempo == '' || tipotempo == '' || listaDias.length == 0) {
        alert("Preencha todos os campos!")
        return
    }

    if (tipotempo == 'hora') {
        tempo *= 60
    }

    var totalPaginas = Number(livros[livroSelecionado].qtdPagina)
    var qtdDias = parseInt(totalPaginas / tempo)

    while ((listaDias.length - 1) != qtdDias) {

        selecionados.forEach(function (dia) {
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
    while (totalPaginas > 0) {
        if (totalPaginas >= tempo) {
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

function ver() {
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

            var estrela = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffa8" stroke="#f0e68c" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    avaliacoes = dados
                    if (avaliacoes.length >= 1) {
                        for (i = 0; i < avaliacoes.length; i++) {
                            nota = Number(avaliacoes[i].nota)
                            estrelas = `${estrela}`.repeat(nota)
                            div_avaliacao.innerHTML += `<div class="container_avaliacao"><img src="${avaliacoes[i].urlCapa}" alt="" width="100px" height="150px"> <div class="containertextos"><h3 class="nomePessoa"><u>${avaliacoes[i].nome}</u></h3><div class="tamanhoestrela">${estrelas}</div><h2>${avaliacoes[i].avaliacao}</h2></div></div>`
                        }
                        document.getElementById('containeravaliacoes').classList.remove('hidden')
                        document.getElementById('teste').classList.add('hidden')
                    }
                    else {
                        alert('Este livro ainda não foi avaliado!')
                    }



                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}