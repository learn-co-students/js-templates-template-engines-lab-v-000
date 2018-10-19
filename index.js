function createPost() {
  let postTemplate = document.getElementById('post-template').innerHTML
  let pageTemplate = document.getElementById('page-template').innerHTML
  let postTemplateFn = _.template(postTemplate)
  let pageTemplateFn = _.template(pageTemplate)
}

function postComment() {
  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentTemplateFn = _.template(commentTemplate)
}
