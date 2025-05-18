var quantidade = []

function mostrarquantidadelivros() {
    var idUsuarioVar = sessionStorage.ID_USUARIO
    div_qtdlidos.innerHTML = ``

    fetch("/livros/mostrarquantidadelivros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                resposta.json().then(function (KPI) {
                    quantidade = KPI[0]
                    div_qtdlidos.innerHTML = `<h3>${quantidade.total}</h3>`


                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });





}