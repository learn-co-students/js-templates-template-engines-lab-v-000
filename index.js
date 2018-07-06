function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var postTemplateHTML = postTemplateFn({'title': title, 'body': body, 'author': author});
}
