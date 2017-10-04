function createPost() {
  let title = document.getElementById("postTitle").value
  let author = document.getElementById("postAuthor").value
  let content = document.getElementById("postContent").value

  let postTemplate = _.template(document.getElementById("post-template").innerHTML)
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
 

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let blogSection = postTemplate({'title': title, 'author': author, 'content': content})
  let commentsSection = commentsTemplate()
  let postElement = document.getElementById('post')

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName('footer')[0].innerHTML += commentsSection
}

function postComment() {
  let commenter = document.getElementById('commenterName').value
  let comment = document.getElementById('commentText').value

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  let commentSection =commentTemplate({'comment': comment, 'commenter': commenter})
  let postElement = document.getElementById('post')

  postElement.getElementsByTagName('footer')[0].innerHTML += commentSection
  

}