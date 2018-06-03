function createPost() {
  var post = document.getElementById("content").value
  var pageTemplate = document.getElementById("page-template").innerHTML
  var pageFn = _.template(pageTemplate)
  document.querySelector("main").innerHTML += pageFn()
  var postTemplate = document.getElementById("post-template").innerHTML
  var postFn = _.template(postTemplate)
  var postDiv = document.getElementById("post")
  var postHTML = postFn({'post': post})
  postDiv.innerHTML += postHTML
  var commentTemplate = document.getElementById("comments-template").innerHTML
  var commentFn = _.template(commentTemplate)
  document.querySelector("footer").innerHTML += commentFn()
}

function postComment() {
  var commenter = document.getElementById("commenterName").value
  var comment = document.getElementById("commentText").value
  var commentTemplate = document.getElementById("comment-template").innerHTML
  var templateFn = _.template(commentTemplate)
  var commentsDivs = document.getElementById("comments")
  var templateHTML = templateFn({'comment': comment, 'commenter': commenter})
  commentsDivs.innerHTML += templateHTML
}
