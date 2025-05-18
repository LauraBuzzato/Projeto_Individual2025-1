function verificarLimite() {
    const textarea = document.getElementById("ipt_avaliacao")
    const contador = document.getElementById("contador")
    const max = textarea.maxLength
    const restante = max - textarea.value.length

    contador.textContent = `${restante} caracteres restantes`

    if (restante == 0) {
        textarea.classList.add("shake")
    } else {
        textarea.classList.remove("shake")
    }

    if (restante <= 50) {
        contador.classList.add('alerta')
        textarea.classList.add('alerta')
    } else {
        contador.classList.remove('alerta')
        textarea.classList.remove('alerta')
    }
}

var livros = {}

fetch("/livros/buscarLivros", {
    method: "POST"
})
    .then(res => res.json())
    .then(dados => {
        dados.forEach(livro => {
            livros[livro.id] = livro
            const opt = new Option(livro.nome, livro.id)
            $('#nomelivro').append(opt)
        })
        $('#nomelivro').trigger('change.select2')
    })
    .catch(erro => console.error("Erro ao carregar livros:", erro))


function adicionar() {
    var notaVar = document.querySelector('input[name="estrela"]:checked').value;
    var livroSelecionadoVar = nomelivro.value
    var textoAvaliacaoVar = ipt_avaliacao.value
    var idUsuarioVar = sessionStorage.ID_USUARIO

    if (
        livroSelecionadoVar == "" ||
        idUsuarioVar == ""
    ) {
        alert("Todos os campos devem ser preenchidos!");
        return false;
    }

    fetch("/avaliacoes/verificarsefoilido", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idlivroServer: livroSelecionadoVar,
            idUsuarioServer: idUsuarioVar
        }),
    })
        .then(resposta1 => {
            if (!resposta1.ok) {
                throw new Error("Erro ao verificar leitura")
            }
            return resposta1.json()
        })
        .then(resultado => {
            if (resultado.length === 0) {
                alert("Você ainda não marcou esse livro como lido na sua biblioteca! Faça isso antes de avaliar!")
                return
            }

            return fetch("/avaliacoes/adicionar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    notaServer: notaVar,
                    idlivroServer: livroSelecionadoVar,
                    textoAvaliacaoServer: textoAvaliacaoVar,
                    idUsuarioServer: idUsuarioVar
                })
            })
        })
        .then(resposta2 => {
            if (resposta2.ok) {
                alert("Avaliação enviada com sucesso!")
            } else {
                alert("Erro ao enviar avaliação.")
                console.error("Erro ao adicionar avaliação")
            }
        })
        .catch(erro => {
            console.error("Erro geral:", erro.message)
        })
}