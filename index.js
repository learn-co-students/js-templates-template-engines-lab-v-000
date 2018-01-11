function createPost() {
  var pageTemplate = _.template(document.getElementById('page-template'))
  var postTemplate = _.template(document.getElementById('post-template'))
  var commentsTemplate = _.template(document.getElementById('comments-template'))
  debugger;
  document.getElementsByTagName('main')[0] += pageTemplate()
}
