const postTitleInput = document.getElementById("titleInput");
const postBodyInput = document.getElementById("bodyInput");
const addPostBtn = document.querySelector(".addPostBtn");

// Функция для создания поста
function createPost() {
    // Получаем заголовок поста из input
    const postTitleText = postTitleInput.value.trim();
    // Получаем текст поста из textarea
    const postBodyText = postBodyInput.value.trim();

    // Проверяем заполненность полей
    if (!postTitleText || !postBodyText) {
        console.log("Fields are empty");
        return;
    }

    // Делаем POST-запрос
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: postTitleText,
            body: postBodyText,
            // userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((post) => {
            const template = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
            `;
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = template;
            document.querySelector(".posts-container").appendChild(postElement);
        })
        .catch((error) =>
            console.error(
                "%c%s",
                "padding: 0 .5rem; background: #d14758; font: 1.125rem Arial; color: white;",
                error
            )
        );

    // Очищаем поля ввода
    clearInputs();
}

// Функция очистки полей ввода
function clearInputs() {
    postTitleInput.value = "";
    postBodyInput.value = "";
}

// Обработчик клика на кнопку добавления поста
addPostBtn.addEventListener("click", createPost);
