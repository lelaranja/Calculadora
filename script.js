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
    this.clear();
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
}
