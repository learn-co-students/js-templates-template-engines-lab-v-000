function createPost() {

  let title = document.getElementById("title").value
  let body = document.getElementById("body").value
  let author = document.getElementById("author").value

  let postScript = document.getElementById("post-template").innerHTML;
  let postTemplate = _.template(postScript);

  let pageScript = document.getElementById("page-template").innerHTML;
  let pageTemplate = _.template(pageScript)

  let divs = document.getElementById("div-page-template")

  let templateHTML = postTemplate({ 'title': title, 'body': body, 'author': author });

  // let submit = document.getElementById("submit")
  // submit.addEventListener("click", function (event) {
  //   event.preventDefault()
  // })

  divs.innerHTML += templateHTML;
  postComment()
}

function postComment() {
  // let comment = document.getElementById("comment").value

  let commentsScript = document.getElementById("comments-template").innerHTML;
  let commentsTemplate = _.template(commentsScript)

  let commentScript = document.getElementById("comment-template").innerHTML;
  let commentTemplate = _.template(commentScript)

  // let templateHTML = commentTemplate({ 'comment': comment});

  let divs = document.getElementById("comments-in-div")
  divs.innerHTML += commentsTemplate()

}
