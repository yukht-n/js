(function () {
    "use strict";
    // Задание 1
    // Первым принимает значение, которым заполнять массив,
    // а вторым - сколько элементов должно быть в массиве.
    // Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

    //     Задание 2
    // Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
    // Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

    //     Задание 3
    // Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
    // Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

    //     Задание 4
    // Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
    // что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

    //     Задание 5
    // Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
    // четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

    //     Задание 6
    // Дан массив с целыми числами. Создайте из него новый массив,
    // где останутся лежать только четные из этих чисел.
    // Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

    //     Задание 7
    // Сделайте функцию getDivisors, которая параметром принимает число и
    // возвращает массив его делителей (чисел, на которое делится данное число).

    // Задание 8
    // Сформировать 3 матрицы изображенные на картинке

    // Задание 9
    // Создайте функцию, которая получает два параметра – число и степень числа.
    // Используя Math.Pow внутри функции, возведите число в степень и выведите с помощью console.log.

    //     Задание 10
    // Функция принимает параметр - возраст пользователя.
    // Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

    // Задание 11
    // Модифицируйте предыдущий пример – учтите вариант,
    // если пользователь не передал параметр в функцию. В таком случае выведите сообщение – “Введите возраст”.
    // Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

    // Задание 12
    // Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
    // Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.

    //     Задание 13
    // Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
    // если меньше 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
    // Реализуйте решение с несколькими return.
    function foo(numb) {
        if (numb > 10)
            return numb ** 2;
        else if (numb < 7)
            return 'число меньше 7';
        else if ((numb === 8) || (numb === 9))
            return numb - 1;
        else
            return numb;
    }

    console.log(foo(6));
    console.log(foo(11));
    console.log(foo(9));
    console.log(foo(7));

    // Задание 14
    // Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
    // Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
    // делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

    //     Задание 15
    // Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

    //     Задание 15
    // Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
    // Функция первым параметром должна принимать текст элемента, а вторым - массив,
    // в котором делается поиск. Функция должна возвращать true или false. Показать решение.

    //     Задание 16
    // Дана строка, например, '123456'. Сделайте из нее '214365'.

    //     Задание 17
    // Напиши функцию создания генератора sequence(start, step).
    // Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше,
    // и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг,
    // задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному.
    // Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

    //     Задание 18
    // Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x) раз и
    // возвращает массив с результатами вызовов.

    //     Задание 19
    // Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
    // и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
    // Обрати внимание: функция не должна изменять переданный ей массив:

    //     Задание 20
    // Напиши функцию fmap(a, gen), которая принимает на вход 2 функции,
    // a и gen, где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает новую функцию-генератор,
    // которая при каждом вызове берет следующее значение из gen и пропускает его через функцию a. Пример:
    // А, еще, сделайте тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове
    // Эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
    //     Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов,
    //     то стоит погуглить про псевдопеременную arguments (псевдопеременная значит,
    //     что она выглядит как переменная, но формально ей не является).
    //     Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов,
    //     можно погуглить Function.prototype.call и Function.prototype.apply.
    //     В JS функции - это объекты, и у них есть полезные методы и свойства.

    //     Задание 21
    // Написать функцию filter, которая принимает функцию-предикат и массив.
    // Возвращает она массив значений, для которых предикат вернет true.
    //     Функция не должна изменять исходный массив


})();