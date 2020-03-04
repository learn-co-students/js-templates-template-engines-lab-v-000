function createPage () {
  let pageTemplate = document.getElementById('page-template').innerHTML

  let pageTemplateFn = _.template(pageTemplate)

  let templateHTML = pageTemplateFn()

  document.querySelector('main').innerHTML += templateHTML;

  createComments()
}

function createComments() {
  let commentsTemplate = document.getElementById('comments-template').innerHTML
  let commentsTemplateFn = _.template(commentsTemplate)
  let commentsTemplementHTML = commentsTemplateFn()
  document.querySelector('main').innerHTML += commentsTemplementHTML
}

function createPost() {
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;
  let postTemplate = document.getElementById('post-template').innerHTML

  let postTemplateFn = _.template(postTemplate)

  let postTemplateHTML = postTemplateFn({'postTitle':postTitle, 'postBody':postBody, 'postAuthor':postAuthor})
  createPage()
  let main = document.querySelector('main')
  //main.removeChild(main.childNodes[1])
  let postsDiv = document.getElementById("post")
  postsDiv.innerHTML += postTemplateHTML
}

function postComment() {
  //event.preventDefault();
  let commentAuthor = document.getElementById('commentAuthor').value;
  let commentBody = document.getElementById('commentBody').value;
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let commentTemplateFn = _.template(commentTemplate);

  let commentTemplateHTML = commentTemplateFn({'commentBody':commentBody, 'commentAuthor':commentAuthor} )
  let commentsDiv = document.getElementById("comments")
  commentsDiv.innerHTML += commentTemplateHTML
}
