function createPost(){
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  var postTemplate = _.template(document.getElementById("post-template").innerHTML)
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  var postTitle = document.getElementById('postTitle').value
  var postAuthor = document.getElementById('postAuthor').value
  var postBody = document.getElementById('postBody').value

  document.getElementById("post-form").innerHTML += pageTemplate()

  var blog = postTemplate({ 'title': postTitle, 'poster': postAuthor })
  var comments = commentsTemplate();
  var post = document.getElementById("post")

  post.innerHTML = blog;
  post.getElementsByTagName("footer")[0].innerHTML = comments
}

function postComment(){
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  var commentText = document.getElementById("commentText").value
  var commenterName = document.getElementById("commenter").value

  var comments = document.getElementById('comments')
  comments.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText })

}
