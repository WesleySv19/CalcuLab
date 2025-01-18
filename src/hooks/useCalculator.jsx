import { useState } from "react"

export default function useCalculator() {
    const [displayValue, setDisplayValue] = useState('0') // Valor atual no input da calculadora
    const [firstOperand, setFirstOperand] = useState(null) // Primeiro número a ser calculado
    const [operator, setOperator] = useState(null) // Operardor de calculo
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false) // Aguardando o segundo número

    // Adicionar os dígitos

    const handleDigit = (digit) => {
        if (waitingForSecondOperand) {
            setDisplayValue(digit)
            setWaitingForSecondOperand(false)
        } else {

            setDisplayValue((prev) => prev === '0' ? digit : prev + digit)
        }
    }


    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(displayValue)

        if (operator && waitingForSecondOperand) {
            setOperator(nextOperator)
            
            return
        }

        if (firstOperand === null) {
            setFirstOperand(inputValue)

        } else if (operator) {
            const result = peformCalculation(operator, firstOperand, inputValue)
            setDisplayValue(String(result))
            setFirstOperand(result)
        }

        setWaitingForSecondOperand(true)
        setOperator(nextOperator)
    }


    const peformCalculation = (operator, firstOperand, secondOperand) => {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand

            case '-':
                return firstOperand - secondOperand

            case '*':
                return firstOperand * secondOperand

            case '/':
                return secondOperand !== 0 ? firstOperand / secondOperand : 'Não é possível dividir por zero'

            default:
                return secondOperand
        }
    }

    
    const handleDecimal = () => {
        if(!displayValue.includes('.')) {
            setDisplayValue((prev) => prev + '.')
        }
    }


    const handleEqual = () => {
        if(operator && firstOperand !== null) {
            const result = peformCalculation(
                operator, 
                firstOperand,
                parseFloat(displayValue)
            )

            setDisplayValue(String(result))
            setFirstOperand(null)
            setWaitingForSecondOperand(false)
        }
    }


    const clearDisplay = () => {
        setDisplayValue('0')
        setFirstOperand(null)
        setOperator(null)
        setWaitingForSecondOperand(false)
    }


    return { 
        displayValue, 
        handleDigit, 
        handleOperator, 
        handleDecimal, 
        handleEqual, 
        clearDisplay }
}