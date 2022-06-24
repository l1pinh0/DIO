function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Matheus",
    idade: 15,
};

const pessoa2 = {
    nome: "Fabio",
    idade: 30,
};

const animal = {
    nome: "Crystal",
    idade: 9,
    raca: "YorkShire",
};

console.log(calculaIdade.apply(animal, [2]))