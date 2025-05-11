
const livros = {
        livro1:{
            nome: 'O Pequeno Príncipe',
            qtdPagina: '144',
            genero: 'Fantasia'
        }
    }

function calcular(){
    var livro = ipt_livro.value
    var tempo = Number(ipt_tempo.value)
    var tipotempo = ipt_tipotempo.value

    listaDias = [];
    var selecionados = document.querySelectorAll('input[name="diasemana"]:checked')
    selecionados.forEach(function(dias) {
        listaDias.push(dias.value)
    })

    if (livro == '' || tempo == '' || tipotempo == '' || listaDias.length == 0) {
        alert("Preencha todos os campos!")
        return;
    }

    if(tipotempo == 'hora'){
        tempo *= 60
    }


    var totalPaginas =Number(livros[livro].qtdPagina)
    var qtdDias = parseInt(totalPaginas/tempo)
    
    while((listaDias.length-1)!=qtdDias){
        selecionados = document.querySelectorAll('input[name="diasemana"]:checked')
    selecionados.forEach(function(dias) {
        listaDias.push(dias.value)})
        if((listaDias.length-1)>=qtdDias){
            break
        }
    }
    
    const qtdPorDia = []

    while(totalPaginas>0){
        if(totalPaginas>=tempo){
            totalPaginas-=tempo
            qtdPorDia.push(tempo)
        }
        else{
            qtdPorDia.push(totalPaginas)
            totalPaginas-=totalPaginas
        }

        if(totalPaginas==0){
            break
        }
    }
    

    meuGrafico.data.labels = listaDias
    meuGrafico.data.datasets[0].data = qtdPorDia
    meuGrafico.update();

    document.getElementById('teste').classList.remove('hidden')
}
