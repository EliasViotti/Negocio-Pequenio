document.addEventListener("DOMContentLoaded", function () {
  // Cargar comentarios guardados al iniciar
  loadComments();

  // Manejar el envío del formulario
  document
    .getElementById("commentForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const userName = document.getElementById("userName").value.trim();
      const commentText = document.getElementById("commentText").value.trim();
      const rating = document.querySelector('input[name="rating"]:checked')
        ? document.querySelector('input[name="rating"]:checked').value
        : 0;

      if (!commentText) {
        alert("Por favor escribe un comentario");
        return;
      }

      if (rating === 0) {
        alert("Por favor selecciona una valoración");
        return;
      }

      const comment = {
        id: Date.now(),
        name: userName || "Anónimo",
        text: commentText,
        rating: rating,
        date: new Date().toLocaleString(),
      };

      saveComment(comment);
      addCommentToDOM(comment);

      // Limpiar el formulario
      this.reset();
    });
});

function saveComment(comment) {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  const commentsList = document.getElementById("commentsList");

  commentsList.innerHTML = "";

  if (comments.length === 0) {
    commentsList.innerHTML =
      "<p>No hay comentarios aún. ¡Sé el primero en comentar!</p>";
    return;
  }

  comments.forEach((comment) => {
    addCommentToDOM(comment);
  });
}

function addCommentToDOM(comment) {
  const commentsList = document.getElementById("commentsList");

  if (commentsList.innerHTML.includes("No hay comentarios aún")) {
    commentsList.innerHTML = "";
  }

  const commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = `
        <div class="comment-header">
            <span class="comment-name ${
              comment.name === "Anónimo" ? "anonymous" : ""
            }">${comment.name}</span>
            <span class="comment-rating">${"★".repeat(
              comment.rating
            )}${"☆".repeat(5 - comment.rating)}</span>
        </div>
        <div class="comment-date">${comment.date}</div>
        <p class="comment-text">${comment.text}</p>
    `;

  commentsList.prepend(commentElement);
}
