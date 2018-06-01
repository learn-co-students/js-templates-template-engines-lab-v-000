function postComment() {
  var commenter = document.getElementById("commenterName").value
  var comment = document.getElementById("commentText").value
  var commentTemplate = document.getElementById("commentTemplate").innerHTML
  var templateFn = _.template(commentTemplate)
  var commentsDivs = document.getElementById("comments")
  var templateHTML = templateFn({'comment': comment, 'commenter': commenter})
  commentsDivs.innerHTML += templateHTML
}

function createPost() {
  //debugger
  var post = document.getElementById("content").value
  var postTemplate = document.getElementById("postTemplate").innerHTML
  var postFn = _.template(postTemplate)
  var postDiv = document.getElementById("posts")
  var postHTML = postFn({'post': post})
  postDiv.innerHTML += postHTML
}
