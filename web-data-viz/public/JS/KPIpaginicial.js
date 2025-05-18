var dados = []

function mostrarKPI() {
    div_capalivro.innerHTML = ``
    div_qtdleitores.innerHTML = ``
    div_mediavaliacoes.innerHTML = ``

    fetch("/livros/mostrarKPI", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                resposta.json().then(function (KPI) {
                    dados = KPI[0]
                    div_capalivro.innerHTML = `<img src="${dados.urlCapa}" alt="" width="200px" height="280px">`
                    div_qtdleitores.innerHTML = `<h3>${dados.qtdLeitores}</h3>`
                    div_mediavaliacoes.innerHTML = `<h3>${dados.media}</h3>`


                });


            } else {
                throw "Houve um erro ao tentar buscar os livros dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });





}