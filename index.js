function createPost() {

  let postTemplate = _.template(document.getElementById('post-template').innerHTML)
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  let commentTemplate = _.template(document.getElementById('comments-template').innerHTML)

  let postTitle = document.getElementById('postTitle').value
  let postBody = document.getElementById('postBody').value
  let postAuthor = document.getElementById('postAuthor').value

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let postDiv = document.getElementById("post")

  let postHTML = postTemplate({postAuthor: postAuthor, postBody: postBody, postTitle: postTitle})

  postDiv.innerHTML += postHTML

  document.getElementsByTagName("footer")[0].innerHTML +=commentTemplate()


}

function postComment() {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  let commentDiv = document.getElementById("comments")
  let commentBody = document.getElementById('commentText').value
  let commenter = document.getElementById('commenter').value

  commentDiv.innerHTML += commentTemplate({commentBody:commentBody, commentAuthor: commenter})

}
