class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}
const p = new Pessoa('kemoel', 26, 'programador')
console.log(p.nome, p.idade, p.profissao)