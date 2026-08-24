//Conectar com a API utilizando fetch

    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem').innerHTML = corpo.imagem1
         document.getElementById('nome').innerHTML = corpo.nome1
          document.getElementById('modelo').innerHTML = corpo.modelo1
           document.getElementById('preco').innerHTML = corpo.preco1
           
    })

    function comprarTenis() {
        alert('Obrigado por comprar em nossa loja')
    }

    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem2').innerHTML = corpo.imagem2
         document.getElementById('nome2').innerHTML = corpo.nome2
          document.getElementById('modelo2').innerHTML = corpo.modelo2
           document.getElementById('preco2').innerHTML = corpo.preco2
           
    })

    function comprarTenis2() {
        alert('Obrigado por comprar em nossa loja')
    }

    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        console.log(corpo)

        document.getElementById('imagem3').innerHTML = corpo.imagem3
         document.getElementById('nome3').innerHTML = corpo.nome3
          document.getElementById('modelo3').innerHTML = corpo.modelo3
           document.getElementById('preco3').innerHTML = corpo.preco3
            
    })

    function comprarTenis3() {
        alert("Obrigado por comprar em nossa loja")
    }