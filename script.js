/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (isNaN(numberOfFilms) || numberOfFilms == "" || numberOfFilms == null) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt("Один из последних просмотренных фильмов?"),
//   b = prompt("На сколько оцените его?", ""),
//   c = prompt("Один из последних просмотренных фильмов?"),
//   d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     console.log("Done!");
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log("Try again");
//     i--;
//   }
// }

function rememberMyFilms() {
  let i = 0;
  while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?"),
      b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      console.log("Done!");
      personalMovieDB.movies[a] = b;
    } else {
      console.log("Try again");
      i--;
    }
    i++;
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

/*
// NewYear tree

const lines = 5;
let result = "";
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
*/

/*
Задача
Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20

Решение

function getMathResult(num1, num2) {
    let str = '';
    if(typeof num2 !== 'string' && num2 !== 0 && num2 > 0) {
        
        for (i = 1; i <= num2; i++) {
            if (i < num2) {
                str += num1 * i + '---';
            } else {
                str += num1*i;
            }
        } 
        } else {
            str = num1;
    }
    return str;
}

getMathResult (2, 3);

*/

/*
1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

*/

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ""
    );
  }
}

writeYourGenres();
