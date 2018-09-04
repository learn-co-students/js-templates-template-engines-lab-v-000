const createPost = function() {
  var postName = document.getElementById("post-name").value
  var postContent = document.getElementById("post-content").value
  var poster = document.getElementById("poster").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var pageTemplate = document.getElementById("page-template").innerHTML

  var postTemplateFn = _.template(postTemplate)
  var postHTML = postTemplateFn({'title': postName, 'body': postContent, 'poster': poster})
}

const postComment = function() {

}
