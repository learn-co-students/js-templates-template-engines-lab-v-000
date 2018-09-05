createPost = () => {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const author = document.getElementById("author").value

  var postTemplate = document.getElementById('post')

  var templateFn = _.template(postTemplate)

  var html = templateFn({'body': body})

  postTemplate.innerHTML += html;
}

postComment = () => {

}
