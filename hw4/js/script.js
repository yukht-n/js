(function () {
    "use strict";

//    1. Задача (Рекурсия)
// Дано натуральное число n. Выведите все числа от 1 до n.

// 2. Задача (Рекурсия)
// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

// 3. Задача (Рекурсия)
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы (ну и циклы, разумеется).

// 4. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной,
// в обратном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.

// 5. Задача (Рекурсия)
// Дано натуральное число N. Выведите все его цифры по одной,
// в обычном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.

//    12. Задача (функции работы с массивами)
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// 13. Задача (функции работы с массивами)
// Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// 14. Задача (функции работы с массивами)
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// 15. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// 16. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
    const arr = [1, 2, 3, 4, 5];
    let newArr = arr.splice(3,2);
    console.log(newArr);

// 17. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// 18. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// 19. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

// 20. Задача (функции работы с массивами)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// 21. Задача (функции работы с массивами)
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

})();