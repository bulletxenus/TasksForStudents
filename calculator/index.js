// область дисплея(справа) с отображением математического оператора
const operatorView = document.querySelector('.display_operator');

// область дисплея(слева) с отображением чисел и результата
const numberView = document.querySelector('.display_calculating');

// все кнопки-цифры в массиве
const number = document.querySelectorAll('.number');

// все кнопки-операции в массиве
const operators = document.querySelectorAll('.operator')

// кнопка равно
const equal = document.querySelector('.equal');

// кнопка десятичной точки
const point = document.querySelector('.point');

// 2 кнопки: очистить все(AC) и удаления символа(DEL) в массиве
const clear = document.querySelectorAll('.clear');

// кнопка смены знака числа
const opposite = document.querySelector('.opposite');

// переменная хранящая в себе текущий математичекий оператор
let currentOperator = '';

// переменная хранящая в себе в виде строки текущее или последнее введенное число
let currentlyViewedNumber = '';

// переменная хранящая в себе предыдущее введенное число
let previousNumber = '';

// переменная хранящая в себе результат математических операций
let result = '0'

// Функция, вызываемая для обновления данных на дисплее калькулятора.
// Обновляет содержимое div-тегов, хранящийся в переменных numberView и operatorView.
const updateDisplay = () => {
    numberView.value = `${currentlyViewedNumber}`
    numberView.placeholder = result
    operatorView.textContent = currentOperator
}

/*
   Функция для сбрасывания состояния калькулятор в зависимости от нажатой кнопки:
   - если нажата кнопка АС или последний нажатый оператор был =, то сбрасываются переменные currentOperator, previousNumber,
     result и currentViewedNumber;
   - если нажата кнопка DEL, то у переменной currentViewedNumber удаляется последний символ.

   В конце функции вызывается updateDisplay, чтобы обновить данные на дисплее в соответствии
   со сброшенными переменными.
*/
const reset = (e) => {
    const resetAll = () => {
        currentOperator = "";
        previousNumber = ""
        result = 0
        return "";
    }

    currentlyViewedNumber =
        (e?.target.textContent === 'AC' || currentOperator === "=") ? resetAll() : currentlyViewedNumber.slice(0, currentlyViewedNumber.length - 1)
    updateDisplay()
}

/*
    Функция для добавления десятичной точки числовой строке.
    Т.к. в числах разрешена только одна точка, то функция проверяет, есть ли в текущей числовой строке точка
    и если нету, то добавляет ее, если есть, то ничего не делает.

    В конце вызывается updateDisplay для обновления данных на дисплее.
*/
const addPoint = () => {
    if ( !currentlyViewedNumber.includes('.') ) {
        const prefix = currentlyViewedNumber === "" ? '0.' : '.'
        currentlyViewedNumber += prefix
    }
    updateDisplay()
}

/*
    Функция для добавления числа в числовую строку(конкатенации) при вводе цифр.
    Так же учитывает случай, когда было нажато равно и после вводятся новые цифры.
    Проблема была в том, что после нажатия равно и ввода новых цифр, к результату
    математической операции прибавляются новые цифры.
    1 + 2 = 3 -> вводим число 5 и на дисплее отображается 35.
    currentOperator === '=' && reset() - просто проверяет было ли равно последней операцией
    сбрасывает все состояние калькулятора для того, чтоб можно было вводить новые числа.

    В конце функции вызывается updateDisplay для обновления данных на дисплее.
 */
const addNumber = (e) => {
    if (currentOperator === '=') {
        reset()
    }

    currentlyViewedNumber += e.target.textContent
    updateDisplay()
}

/*
    Фунция позволяющая изменять знак текущего числа на противоположный.

    В конце функции вызывается updateDisplay для обновления данных на дисплее.
 */
const makeNumberOpposite = () => {
    currentlyViewedNumber = `${+currentlyViewedNumber * (-1)}`
    updateDisplay()
}


/*
    Функция срабатывающая при нажатии на один из математических операторов.

    Имеет проверку на наличие в переменной currentOperator оператора, что повзволяет
    получать промежуточный результат в цепочках мат. операций без нажания на =.

    Например: 1 + 2 - 3 * 4

    Вводим число 1, далее нажимаем на оператор +, срабатывает функция addOperator,
    коротая проверяет есть ли в переменной currentOperation какой-то из операторов.
    Т.к. до этого была введена только цифра, то переменная currentOperator будет равна "".
    Значит условие if не сработает, а сработает блок else, который запишет ранее введеное число
    в переменную previousNumber, освобождая место для ввода второй цифры(второго операнда) в переменной currentViewedNumber.

    Вводим новое число (2 в данном конкретном случае). После нажимаем оператор -, вызывая функцию addOperator.
    Внутри функции срабатывает проверка на currentOperator, т.к. в этой переменной лежит значение
    предыдущего оператор (+ в данном конкретном случае). Т.к. сработала проверка, то выполнится код в блоке if:
    Вызовется функция calculate, которая посчитает промежуточный результат операции 1 + 2 и запишет число 3 в переменные result
    и previousNumber. Наличие промежуточноего результата в previousNumber необходимо, чтоб каждый новый оператор применялся
    к результату работы предыдущего оператора.
    После вычисления промежуточного результата происходит присвоение последнего оператора -(минус) переменной
    currentOperator и сброс переменной currentlyViewedNumber, для ввода новой цифры.

    Вводим число 3 для вышенаписанного примера, нажимаем знак *. Опять срабатывает условие в if, т.к. теперь в
    перменной currentOperator находится оператор -. Внутри условия происходит вычисление предыдущей операции
    путем вычитания промежуточного результата в переменной previousNumber и последнего введенного числа 3. Результат 3 - 3 => 0
    будет записан опять в переменную previousNumber. Вновь в переменную currentOperator заносится значение последнего нажатого
    оператора (* в данном примере) и очищается переменная currentViewedNumber и мы можем вводить новую цифру и т.д.

    Если этот момент не понятен, созвонимся, словами будет проще объяснить.

    В конце функции вызывается updateDisplay для обновления данных на дисплее.
 */
const addOperator = (e) => {
    if (currentOperator) {
        // условие для корректного расчета при нажатии комбинации 9 * 9 ÷ ×
        // без этого условия был баг при котором происходило деление/умножение на 0,
        // когда в переменной currentViewedNumber было "".
        result = calculate(currentOperator)
        previousNumber = result
    } else {
        previousNumber = currentlyViewedNumber
    }

    currentOperator = e.target.textContent
    currentlyViewedNumber = ""
    updateDisplay()
}

/*
    Функция срабатывающая при нажатии на =, позволяет вычислить результат математической операции.

    В конце функции вызывается updateDisplay для обновления данных на дисплее.
 */
const calculateResult = () => {
    currentlyViewedNumber = calculate(currentOperator || '=')
    result = currentlyViewedNumber
    currentOperator = '='
    updateDisplay()
}

/*
    Функция которая выполняет математические операции в зависимости от передаваемого
    в функцию знака оператора. Преобразует строки previousNumber и currentlyViewedNumber
    к числам, применяет к ним математическую операцию и преобразует возвращаемый результат
    обратно в строку.
 */
function calculate(operator) {
    switch (operator) {
        case "+": {
            return `${+previousNumber + +currentlyViewedNumber}`
        }
        case "-": {
            return `${+previousNumber - +currentlyViewedNumber}`
        }
        case '÷': {
            /*
               Оператор || покрывает случай когда currentlyViewedNumber
               содержит "" (например при комбинации (9 * 9 / *)
               Тогда деление происходило на 0, хотя операция не должна считать
               Подставляя единицу('1') мы позволяем произвести операцию деления, но
               без именения результата.
            */
            return `${+previousNumber / +(currentlyViewedNumber || '1')}`
        }
        case '×': {
            return `${+previousNumber * +(currentlyViewedNumber || '1')}`
        }
        case '=': {
            return `${+currentlyViewedNumber}`
        }
        default: return '0'
    }
}

// Добавление листенеров для каждой кнопки с цифрой
number.forEach((el) => {
    el.addEventListener('click', addNumber)
})

// Добавление листенеров для кнопки AC и DEL
clear.forEach((el) => {
    el.addEventListener('click', reset)
})

// Добавление листенера для кнопки десятичной точки
point.addEventListener('click', addPoint)

// Добавление листенера для кнопки смены знака числа ±
opposite.addEventListener('click', makeNumberOpposite)

// Добавление листенеров для кнопок с мат. операторами
operators.forEach((el) => {
    el.addEventListener('click', addOperator)
})

// Добавление листенера для кнопки =
equal.addEventListener('click', calculateResult)


