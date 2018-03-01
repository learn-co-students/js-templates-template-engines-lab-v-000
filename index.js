function createPost () {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  let postTemplate = _.template(document.getElementById('post-template').innerHTML)
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  let postTitle = document.getElementById('postTitle').value
  let postAuthor = document.getElementById('postAuthor').value
  let postContent = document.getElementById('postContent').value

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate()

  let pagePostDiv = document.getElementById('post')
  pagePostDiv.innerHTML = postTemplate({'title': postTitle, 'author': postAuthor, 'content': postContent})
  pagePostDiv.getElementsByTagName('footer')[0].innerHTML = commentsTemplate()
}

function postComment () {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  let commentText = document.getElementById('commentText').value
  let commenterName = document.getElementById('commenterName').value

  let commentsDiv = document.getElementById('comments')
  commentsDiv.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText})
}
