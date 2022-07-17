## Task 1. Calculator

![screenshot](calculator.png)

Калькулятор - один из лучших проектов для первого знакомства с JavaScript. Такой проект включает в себя достаточно сложные моменты создания пользовательского интерфейса и использования JavaScript для работы с ним, и при этом достаточно прост в выполнении и доступен разработчикам с любым уровнем навыков. Если вы хотите изучить JavaScript или улучшить свои навыки работы с ним, этот проект поможет достичь поставленной цели.

**Обратите внимание!** Запрещается использование функции eval().

## Исходные проекты

### 1. Калькулятор на JavaScript

- Видео: https://youtu.be/VHGaBc9OcXU (1:21:28)
- Код: https://github.com/irinainina/ready-projects/tree/calculator-ru (94 lines js-code)
- Demo: https://irinainina.github.io/ready-projects/calculator-ru/

Чтобы склонировать проект выполните команду:

`git clone https://github.com/irinainina/ready-projects/ -b calculator-ru`

### 2. Второй пример я сам накидал, видео не будет, зато в коде есть коментарии:

- Код: https://github.com/bulletxenus/TasksForStudents/tree/calculatro/calculator 
- Demo: https://bulletxenus.github.io/TasksForStudents/calculator/

Чтобы склонировать проект выполните команду: 
`git clone https://github.com/bulletxenus/TasksForStudents.git -b calculatro`

Стоит отметить, что в двух примерах реализованы базовые калькуляторы, но в требованиях будет задание расширить их функционал. Что придется сделать самостоятельно.=)

## Критерии оценки

**Максимальный балл за задание +40**

- Базовая функциональность +10
  - калькулятор выполняет математические операции: сложение, вычитание, умножение, деление. Обязательно наличие десятичной точки, действия с многозначными числами, возможность выполнить несколько действий подряд, очистить результат. По сути калькулятор воспроизводит функциональность исходного проекта. Эта часть задания особых проблем доставить не должна. 
- Дополнительные математические операции +10
  - добавь к четырём перечисленным в предыдущем пункте математическим операциям ещё две: извлечение квадратного корня и возведение в степень.
- Действия с отрицательными числами +10
  - калькулятор может выполнять действия как с положительными, так и с отрицательными числами. Например, можно поделить -9 на -3. При вводе отрицательного числа перед ним отображается знак "минус". Если реализована операция извлечения квадратного корня, подумайте, как будете обрабатывать попытку найти квадратный корень из отрицательного числа.
- Действия с дробями +10
  - JavaScript не умеет правильно считать дроби. Научи калькулятор это делать. Например, при сложении 0.1 и 0.2 он должен возвращать 0.3.

#### Примеры вычислений для проверки работоспособности калькулятора и его соответствия критериям
Примеры ориентировочные, числа могут быть другими. Каждое правильно выполненное вычисление оцениваем в 2 балла  
Знак => в примерах означает клик на кнопку калькулятора "равно". Если вычисления выполняются на лету и результат выводится без клика по кнопке "равно", это не является ошибкой.

- **Базовая функциональность**
 1. `1 + 2 => 3`
 2. `23 + 69.5 => 92.5` 
 3. `74 * 3 - 5 => 217`
 4. `2 + 3 => 5 продолжаем ввод 4 => 4` - после равно следующая цифра перезаписывает результат
 5. есть кнопка, позволяющая очистить результат
- **Дополнительные математические операции**
 1. `25 √  => 5` или ` √ 25  => 5` - любой вариант правильный
 2. `9 √ + 1  => 4` или ` √ 9 + 1  => 4` - любой вариант правильный
 3. `2 ^ 2 => 4`
 4. `15 ^ 3 => 3375`
 5. `10.1 ^ 3 => 1030.301`
- **Действия с отрицательными числами**
 1. `-9 / -3  => 3`
 2. `2 + -2 => 0`
 3. `2 / -2 => -1`
 4. `-9 ^ 3   => -729`
 5. `-9 √  => уведомление об ошибке` или ` √ - 9 => уведомление об ошибке` - любой вариант правильный
- **Действия с дробями**
 1. `0.1 + 0.2  => 0.3`
 2. `0.4 - 0.1 => 0.3`
 3. `0.0004 + 0.0004 => 0.0008`
 4. `-0.1 * 0.2 => -0.02`
 5. `-0.15 + -0.15  => -0.3` - а не - 0.30

Удачи! Я в тебя верю!

