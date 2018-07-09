function createPost(){
  var postTitle = document.getElementById("postTitle").value
  var postContent = document.getElementById("postText").value
  var postAuthor = document.getElementById("postAuthor").value

  var postTemplate = document.getElementById("post-template").innerHTML
  var pageTemplateFn = _.template(document.getElementById("page-template").innerHTML)

  var templateFn = _.template(postTemplate)

  var templateHTML = templateFn({"title" : postTitle, "content" : postText, "author" : postAuthor})
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
