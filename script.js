/// Cadastro de Usuário
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")


/// Login
 if (idade < 13){
    alert("Não é possível se cadastrar")
} else if (idade >= 13) {
 let senha = prompt("Digite uma senha:")
 
alert("Cadastro feito com sucesso!")

/// Confirmação do Cadastro
let confNome = prompt("Digite seu nome novamente:")
let confSenha = prompt("Digite sua senha novamente:") 

if(confNome == nome && confSenha == senha) {
    alert(`Login realizado com sucesso! Bem-vindo, ${nome}`)
} else {
    alert(`Nome ou senha incorretos. Tente novamente.`)
}
}
