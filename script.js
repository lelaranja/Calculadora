const botoesNumericos = document.querySelectorAll("#numeros");
const operadoresNumericos = document.querySelectorAll("#operadoresC");
const operadorIgual = document.querySelector("#igual");
const botaoDel = document.querySelector("#delete");
const delAll = document.querySelector("#delAll");
const prevResult = document.querySelector("#preview");
const valorAtual = document.querySelector("#atValue");

class Calculadora {
  constructor(prevResult, valorAtual) {
    this.prevResult = prevResult;
    this.valorAtual = valorAtual;
  }

  limpar() {
    this.prevResult = "";
    this.valorAtual = "";
    this.operadoresNumericos = undefined;
  }
  atualizaValor() {
    this.prevResult.innerText = this.prevResult;
    this.valorAtual.innerText = this.valorAtual;
  }
}

const calculadora = new Calculadora(prevResult, valorAtual);

delAll.addEventListener("click", () => {
  this.limpar();
  this.atualizaValor();
});
