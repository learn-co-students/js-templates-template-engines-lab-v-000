function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const author = document.getElementById("author").value;

  const postTemplate = document.getElementById("post-template").innerHTML;

  const templateFn = _.template(postTemplate);

  const postDiv = document.getElementsByClassName("post");

  const templateHTML = templateFn({'title': title, 'body': body, 'author':author});

  postDiv.innerHTML += templateHTML;
}

function postComment() {
  const comment = document.getElementById("comment").value;
  const commenter = document.getElementById("commenter").value;
}
