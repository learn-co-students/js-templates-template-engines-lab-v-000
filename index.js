function createPost(){

  var postTitle = document.getElementById("postTitle").value
  var postContent = document.getElementById("postText").value
  var postAuthor = document.getElementById("postAuthor").value

  var postTemplateFn = _.template(document.getElementById("post-template").innerHTML)
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML)
  var commentTemplateFn = _.template(document.getElementById("comments-template").innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn()

  var templateHTML = postTemplateFn({"title" : postTitle, "content" : postContent, "author" : postAuthor})
  var postElement = document.getElementById("post")
  postElement.innerHTML = templateHTML

  postElement.getElementsByTagName("footer")[0].innerHTML = commentTemplateFn()
}

function postComment(){
  var commenter = document.getElementById("commenter").value
  var comment = document.getElementById("comment").value
  var commentTemplate = document.getElementById("comment-template").innerHTML

  var templateFn = _.template(commentTemplate)
  var commentsdiv = document.getElementById("comments")
  var templateHTML = templateFn({'comment' : comment, 'commenter' : commenter})

  commentsdiv.innerHTML += templateHTML
}
