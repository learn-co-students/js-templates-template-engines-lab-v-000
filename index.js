function createPost() {
  var postTemplate = document.getElementById('post-template').innerHTML

  var postTemplateFn = _.template(postTemplate)

  var pageTemplate = document.getElementById('page-template').innerHTML

  var pageTemplateFn = _.template(pageTemplate)
}

function postComment() {
  var commentTemplate = document.getElementById('comment-template').innerHTML

  var commentTemplateFn = _.template(commentTemplate)

  // var commentsTemplate = document.getElementById('comments-template').innerHTML
  //
  // var commentsTemplateFn = _.template(commentsTemplate)
}
