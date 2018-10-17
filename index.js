function createPost(){
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let content = document.getElementById('content').value

  let commentTemplate = _.template(document.getElementById('comments-template').innerHTML)
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  let postTemplate = _.template(document.getElementById('post-template').innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({title: title, author: author, content: content})
  let commentSection = commentTemplate()
  let postElement = document.getElementById('post')

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML = commentSection;

}

function postComment(){
  let commenter = document.getElementById('commenter').value
  let commentText = document.getElementById('commentText').value

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)
  let commentDiv = document.getElementById('comments')
  let templateHTML = commentTemplate({commenter: commenter, commentText: commentText})

  commentDiv.innerHTML += templateHTML
}
