// Функция создания разметки поста
// (получает на вход объект поста и возвращает строку HTML-разметки)
function createPostMarkup(post) {
    const template = `
    <div class="post">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
    </div>
    `;
    return template;
}

// Функция добавления разметки в контейнер
function addMarkupToContainer(markup, container) {
    container.innerHTML += markup;
}

// Функция, которая делает GET запрос и добавляет посты на страницу
// function getPosts() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then((posts) => {
//             const postsContainer = document.querySelector(".posts-container");
//             posts.forEach((post) => {
//                 const postMarkup = createPostMarkup(post);
//                 addMarkupToContainer(postMarkup, postsContainer);
//             });
//         })
//         .catch((error) =>
//             console.error(
//                 "%c%s",
//                 "padding: 0 .5rem; background: #d14758; font: 1.125rem Arial; color: white;",
//                 error
//             )
//         );
// }

// Вариант с использованием async/await и try...catch
async function getPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        const postsContainer = document.querySelector(".posts-container");
        posts.forEach((post) => {
            const postMarkup = createPostMarkup(post);
            addMarkupToContainer(postMarkup, postsContainer);
        });
    } catch (error) {
        console.error(
            "%c%s",
            "padding: 0 .5rem; background: #d14758; font: 1.125rem Arial; color: white;",
            error
        );
    }
}

getPosts();
