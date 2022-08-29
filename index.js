let nameAluno 
let idadeAluno 
let consultarAluno
let mediaAluno1
let mediaAluno2
let mediaAluno3



do {
   nameAluno = prompt("Bem vindo ao sistema escolar, Digite aqui o nome do aluno")
   idadeAluno = prompt("Digite a idade dele")
   consultarAluno = prompt("Você deseja: \n1-Consultar se o aluno foi aprovado \n2-Se o aluno é maior de idade \n3-Sair")


    switch(consultarAluno) {
        case "1":

            mediaAluno1 = prompt("Digite aqui a média da primeira unidade")
            mediaAluno2 = prompt("Digite a aqui a média da segunda unidade")
            mediaAluno3 = prompt("Digite aqui a média da terceira unidade")

            mediaAluno1 = parseFloat(mediaAluno1)
            mediaAluno2 = parseFloat(mediaAluno2)
            mediaAluno3 = parseFloat(mediaAluno3)

            let resul = ((mediaAluno1 + mediaAluno2 + mediaAluno3) / 3)

            if(resul >= 7) {
                alert("PARABÉNS, O aluno " + nameAluno + " foi APROVADO com: " + resul)
            } else if (resul < 7) {
                alert("O aluno " + nameAluno + " foi REPROVADO com: " + resul)
            } else {
                alert("Digite novamente sua nota.")
            }
            break;

        case "2":
            if(idadeAluno >= 18) {
                alert("O aluno " + nameAluno + " já é maior de idade")
            } else if (idadeAluno < 18) {
                alert("O aluno " + nameAluno + " já é menor de idade")
            }
            break;
            
        case "3":
            alert("Saindo do sistema escolar")
            break;
    }
        

} while(consultarAluno != "3")