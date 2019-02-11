// function createPost(){
//
//   // get values
//   let postTitle = document.getElementById("postTitle").value;
//
//   let postBody = document.getElementById("postBody").value;
//
//   let postAuthor = document.getElementById("postAuthor").value;
//
//   // create template Functions
//
//   let pageTemplate = document.getElementById("page-template").innerHTML;
//
//   let postTemplate = document.getElementById("post-template").innerHTML;
//
//   let commentsTemplate = document.getElementById("comments-template").innerHTML;
//
//   let commmentTemplate = document.getElementbyId("comment-template").innerHTML;
//
//
//   //create template
//   let postTemplateFn = _.template(postTemplate);
//   let pageTemplateFn = _.template(pageTemplate);
//
//
//   let postDiv = document.getElementById("post-id");
//
//   let pageTemplateHTML = pageTemplateFn;
//   let templateHTML = postTemplateFn({ title: postTitle, body: postBody, author: postAuthor});
//
//   // append
//   postDiv.innerHTML += templateHTML;
// }

function createPost() {
  // templates
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

   // get values for templates
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

   document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

   var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

   postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}




function postComment() {

  /// get values for post
  let commenter = document.getElementById('commenter').value;

  let comment = document.getElementById('commentText').value;

  //create template function for post comment
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;
}
