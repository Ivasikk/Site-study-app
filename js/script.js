/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Железный человек"
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      gener = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");

adv.forEach(item => {
    item.remove();
});

gener.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

// Метод харош но только если бд не расширеяется
// Если элементов больше то класс не сможет из вместить
// for (let i=0; i < movieList.length; i++){
//     movieList[i].textContent = `${[i+1]} ${movieDB.movies[i]}`;
// }

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
    </li>`;
});
