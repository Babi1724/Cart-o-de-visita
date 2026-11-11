// programação é ensinar o computado a como pensar
// algoritmo é uma sequencia de passos
// logica de programação é uma maneira de pensar para construir um algoritmo
// sintaxe é uma maneira correta de escrever
// js é interpretada e executada pelos navegadores, ou seja pode ser usada pelos navegadores sem precisar de instalação de terceiros
// é usado para web, desktop, mobile , tudo.
// variaveis é uma caixinha onde vai guardar o tipo de dados
// tipos de dados é a informação que pode ser , texto, numero, booleanos ou dados mais estruturados ( objeto)
// variavel pode ser declarada. ex: let boasVindas ( = atribuição de dados)
// existe dois tipo de variaveis, let e const. let é para aquelas variaveis que muda e const aquelas que não muda.[
// funções serve para agrupar codigos, ou seja m mini programa dentro do programa, ele vai servir para quando voce for precisar usar ele varias vezes e não precisar repetir a mesma linha de codigo, ai é só chamar pelo nome.
// objetos possui atributos que são propriedades, e também tem metodos que são funcionalidades.


function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src","./assets/Avatar - light.png")
    } else{
        img.setAttribute("src","./assets/avatar.png")
        
    }


}
