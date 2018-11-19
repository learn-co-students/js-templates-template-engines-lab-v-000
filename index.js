function createPost() {
  let postTitle = document.getElementById('titleName').value
  let postAuthor = document.getElementById('authorName').value
  let postText = document.getElementById('postText').value

  let pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  let postTemplate = _.template(document.getElementById('post-template').innerHTML)
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let blog = postTemplate({'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText});
  let comments = commentsTemplate();
  let post = document.getElementById('post');

  post.innerHTML += blog;
  post.getElementsByTagName('footer')[0].innerHTML = comments
}

function postComment() {
  let commenterName = document.getElementById('commenterName').value
  let commentText = document.getElementById('commentText').value

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  let comments = document.getElementById('comments')

  comments.innerHTML += commentTemplate({'commenterName': commenterName, 'commentText': commentText})
}
