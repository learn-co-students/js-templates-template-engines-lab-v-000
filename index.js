function createPost() {
  let postTitle = document.getElementById('post-title').value
  let postAuthor = document.getElementById('post-author').value
  let postContent = document.getElementById('post-content').value

  const pageTemplateFn = _.template(document.getElementById('page-template').innerHTML)
  const postTemplateFn = _.template(document.getElementById('post-template').innerHTML)
  const commentsTemplateFn = _.template(document.getElementById('comments-template').innerHTML)


  const mainTag = document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn

  let blogSection = postTemplateFn({'title': postTitle, 'content': postContent, 'author': postAuthor})
  let commentsSection = commentsTemplateFn()
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection

}

function postComment () {

  const commentTemplateFn = _.template(document.getElementById('comment-template').innerHTML)

  let comment = document.getElementById('comment').value
  let commenter = document.getElementById('commenter').value

  let commentsSection = document.getElementById('comment')


  commentsSection.innerHTML += commentTemplateFn({'comment': comment, 'commenter': commenter})



}
