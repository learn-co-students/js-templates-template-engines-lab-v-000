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

  let submit = document.getElementById("submit")
  submit.addEventListener("click", function (event) {
    event.preventDefault()
  }, false)
  
  divs.innerHTML += templateHTML;


}

function postComment() {
  let commentScript = document.getElementById("comments-template").innerHTML;
  let commentTemplate = _.template(commentScript)
}
