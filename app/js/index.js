let news = [{
        'id': 1,
        'photo': 'img/1534765244.jpg',
        'title': 'Сравнение движков: Unreal Engine 4 против Unity 5',
        'text': 'Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!'
    },
    {
        'id': 2,
        'photo': 'img/1534137690.jpg',
        'title': '7 девушек айтишниц из фильмов и сериалов',
        'text': 'Много ли вы знаете фильмов и сериалов, где главные персонажы это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.'
    },
    {
        'id': 3,
        'photo': 'img/1532948245.jpg',
        'title': '11 полезных инструментов для веб-разработчика',
        'text': 'Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.'
    },
    {
        'id': 4,
        'photo': 'img/1534139040.jpg',
        'title': 'Что такое Deep Learning? Как работает глубокое обучение?',
        'text': 'Как работает глубокое обучение и что оно из себя представляет? В ходе статьи мы расскажем про Deep Learning и разберемся с его ключевыми понятиями.'
    },
    {
        'id': 5,
        'photo': 'img/1526324179.jpg',
        'title': 'Игра на чистом JavaScript за 20 минут',
        'text': 'На JS можно создавать сложные и простые игры любых жанров. Мы расскажем как создать 2D игру на JavaScript и HTML5 всего за 20 минут.'
    },
    {
        'id': 6,
        'photo': 'img/1626642383.jpg',
        'title': '7 полезных GitHub-проектов для всех программистов JavaScript',
        'text': 'Не зря эти семь репозиториев стали довольно популярными. Они могут сделать более эффективным и продвинутым каждого JS-разработчика. Так что не будем терять время и сразу приступим к рассмотрению!'
    },
    {
        'id': 7,
        'photo': 'img/1589540919.jpg',
        'title': 'Библиотека AR.js / Дополненная реальность в браузере',
        'text': 'Дополненная реальность - это целый тренд. В статье мы рассмотрим работу с библиотекой AR.js, которая позволяет буквально за несколько строк кода добавить дополненную реальность.'
    },
    {
        'id': 8,
        'photo': 'img/1612631102.jpg',
        'title': '7 досадных ошибок, которые я совершил как JS-разработчик',
        'text': 'Хотите максимально быстро получить высокооплачиваемую работу? С самого старта карьеры зарекомендовать себя перспективным специалистом? Тогда познакомьтесь с моим опытом и не делайте этих ошибок.'
    },
    {
        'id': 9,
        'photo': 'img/1580823017.jpg',
        'title': 'Deno заменит Node.js?',
        'text': 'Главная задача Deno – исправить недостатки Node.js. И, похоже, что новый проект уверенными шагами идёт к тому, чтобы сменить своего предшественника. Давайте узнаем о нем детальнее.'
    },
    {
        'id': 10,
        'photo': 'img/1567527861.jpg',
        'title': '12 крутых JavaScript игр размером не более 13 КБ',
        'text': 'Создать интересную игру размером до 13 КБ? Не проблема! По крайней мере так считают участники ежегодного конкурса JS13K. Представляем подборку 12 игр, весом менее 13КБ каждая.'
    },
    {
        'id': 11,
        'photo': 'img/1562916015.jpg',
        'title': 'Вот почему опасно использовать сторонний CSS и JS на своем сайте!',
        'text': 'Прибегая к ресурсам с других серверов, вы рискуете своим собственным сайтом. Проблема в том, что сторонний CSS и JS в умелых руках могут стать серьезной угрозой безопасности.'
    },
    {
        'id': 12,
        'photo': 'img/1621673679.jpg',
        'title': 'Самые дорогие IT бренды мира',
        'text': 'Кто занимает топовые позиции в каждом рейтинге самых прибыльных, известных, дорогих, успешных и т.п. компаний в мире? Верно: Apple, Google, Microsoft, Facebook и Amazon.'
    },
]
let i = 0
let j = 4

addPost()

function addPost() {
    let object = document.querySelector('#news__blocks')
    for (i; i < j; i++) {
        let post = document.createElement("div");
        post.innerHTML = `<div class='news__item item'>
            <div class='item__img'><img src="${news[i]['photo']}" alt=""></div>
            <div class='item__block'>
            <div class='item__title'>${news[i]['title']}</div>
            <div class="item__text">${news[i]['text']}
            </div>
            <button class='item__button button'>Читать далее</button>
            </div>
            </div>`;
        object.append(post)
    }
    if (j == news.length) {
        document.getElementById("add").remove()
    }
    j += 4
}

function search() {
    document.getElementById("search").style.display = "none"
    let object = document.body
    let post = document.createElement("div");
    post.innerHTML = `<div id="searchFScrin" class="searchFScrin">
    <div class="searchFScrin__content">
        <h3>Форма поиска</h3>
        <div><input id="srch" type="text" class="search" placeholder="Поиск" onfocus="onfocusInput()" onblur="onblurInput()"><span><i style="opacity: 0" id="clearInput" onclick="clearInput()" class="fas fa-times-circle"></i></span> </div>
        <button class="button" onclick="closeSearch()">Закрыть</button>
    </div>
</div>`;
    object.append(post)
}


function closeSearch() {
    document.getElementById("searchFScrin").remove()
    document.getElementById("search").style.display = "block"
}


function clearInput() {
    let input = document.querySelector("#srch")
    input.value = ""
}

function onfocusInput() {
    document.getElementById("clearInput").style.opacity = "1"
}

function onblurInput() {
    document.getElementById("clearInput").style.opacity = "0"
}