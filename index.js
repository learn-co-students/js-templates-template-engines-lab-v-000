
function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postText = document.getElementById("postText").value;
  var postAuthor = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);

  var pageDiv = document.getElementByClassName("main");

  var templateHTML = templateFn({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText });

  pageDiv.innerHTML += templateHTML;
}
