var NomedoAluno = "Julio"
var nota1 = 10
var nota2 = 10
var nota3 = 10
var nota4 = 10
var media = (nota1 + nota2 + nota3 + nota4/4);;

console.log ("Olá," + NomedoAluno); 

if (media >= 7 ) {
    console.log ("Você foi aprovado")
}
else if (media == 6) {
    console.log  ("Você está de recuperação");
}
else {
    console.log("Lamento, você foi reprovado")
}