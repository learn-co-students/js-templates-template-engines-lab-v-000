const createPost = function() {
  var postName = document.getElementById("post-name").value
  var postContent = document.getElementById("post-content").value
  var poster = document.getElementById("poster").value

  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML)

  var postHTML = postTemplate({'title': postName, 'body': postContent, 'poster': poster})

  var postElement = document.getElementById("post")
  postElement.innerHTML += postHTML
  document.getElementByTagName("main")[0].innerHTML += pageTemplate({'post': postElement, 'sidebar': ''})
}

const postComment = function() {

}
