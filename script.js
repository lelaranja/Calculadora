const numberButtons = document.querySelectorAll("[numeros]");
const operationButtons = document.querySelectorAll("[operadoresC]");
const equalsButton = document.querySelector("[igual]");
const deleteButton = document.querySelector("[btnDelete]");
const allClearButton = document.querySelector("[delAll]");
const previousOperandTextElement = document.querySelector("[preview]");
const currentOperandTextElement = document.querySelector("[atValue]");

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); //String começa vazia por padrão
  }

  // método para cálculo a partir dos operadores aritméticos
  calculate() {
    let result;

    const previousOperandFloat = parseFloat(this.previousOperand);
    const currentOperandFloat = parseFloat(this.currentOperand);

    switch (this.operation) {
      case "+":
        result = previousOperandFloat + currentOperandFloat;
        break;
      case "-":
        result = previousOperandFloat - currentOperandFloat;
        break;
      case "x":
        result = previousOperandFloat * currentOperandFloat;
        break;
      case "÷":
        result = previousOperandFloat / currentOperandFloat;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  chooseOperation(operation) {
    if (this.previousOperand != "") {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand; // modifica para conseguir receber o próximo número
    this.currentOperand = "";
  }

  //adicionando valor aos botões numéricos
  addNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return; //garantir que o número possua apenas 1 ponto

    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }

  //Limpar itens do display da calculadora
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //Atualizar texto do display da calculadora
  updateDisplay() {
    this.previousOperandTextElement.innerText = `${this.previousOperand} ${
      this.operation || ""
    }`;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculadora = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculadora.addNumber(numberButton.innerText);
    calculadora.updateDisplay();
  });
}

for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculadora.chooseOperation(operationButton.innerText);
    calculadora.updateDisplay();
  });
}

//Limpando e atualizando display da calculadora
allClearButton.addEventListener("click", () => {
  calculadora.clear();
  calculadora.updateDisplay();
});
