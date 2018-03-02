function createPost(){
  var title = document.getElementById('postTitle').value
  var body = document.getElementById('postBody').value
  var poster = document.getElementById('postAuthor').value

  var pageTemplate = _.template(document.getElementById('page-template').innerHTML)
  var postTemplate = _.template(document.getElementById('post-template').innerHTML)
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML)

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate

  var postContent = postTemplate({'title': title, 'body': body, 'poster': poster})
  var commentsSection = commentsTemplate()
  var post = document.getElementById('post')

  post.innerHTML = postContent
  post.getElementsByTagName('footer')[0].innerHTML = commentsSection
}

function postComment(){

  var commentsTemplate = document.getElementById('comments-template').innerHTML
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML)

  var commenter = document.getElementById('commenter').value
  var comment = document.getElementById('commentText').value

  commentsTemplate.innerHTML += commentTemplate({'comment': comment, 'commenter': commenter})


}
