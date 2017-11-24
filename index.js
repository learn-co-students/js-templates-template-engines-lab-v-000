function createPost() {
  var title = document.getElementById("title").value
  var body = document.getElementById("body").value
  var author = document.getElementById("author").value
  var sidebar = document.getElementById("sidebar-input").value

  var pageTemplate = document.getElementById("page-template").innerHTML; 
  var pageTemplateFn = _.template(pageTemplate);
  
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postFunction = _.template(postTemplate);

  var post = postFunction({'title': title, 'body': body, 'author': author })
  
  var pageHTML = pageTemplateFn({ 'post': post, 'sidebar': sidebar });
  //  = document.getElementById("post");
  
  document.getElementById("output").innerHTML += pageHTML;
 }

 function postComment() {
  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
 }
