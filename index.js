// // Create a template with an id of page-template that will represent the page of a blog post, including a sidebar element and a post element 
// // that will hold our blog post.
// // Create a post-template that will represent the blog post itself. It should have a header for the post title and a footer for the post 
// // author, and be wrapped in an article element.
// // Create a comments-template that will be the container for the collection of comments on the blog post, as well as the comment form.
// // Create a comment-template that will hold an individual comment. Should have a footer for the commenter name.
// // Provide a form with an id of post-form to create a blog post with a title, body, and author. Submitting the form should build the page
// // template with the post inside. Make the form submit using a createPost() function.
// // Provide a form within the comments-template to post comments, including commenter name and comment text. These should use the template 
// // to insert individual comments into the comments section. You should be able to keep adding more comments. Make the form submit use a postComment() function.

function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
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
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}

















// // function addComment() {
// //   var bodyText = "This research is bold and important!";
// //   var commenter = "Definitely not a woodchuck looking to eat the wood";
 
// //   var commentBody = createCommentBody(bodyText);
// //   var commenterLabel = createCommenterLabel(commenter);
// //   postNewComment(commentBody, commenterLabel);
// // }
 
// // function createCommentBody(comment) {
// //   var bodyDiv = document.createElement("div");
// //   var bodyPara = document.createElement("p");
// //   bodyPara.innerHTML = comment;
// //   bodyDiv.appendChild(bodyPara);
// //   return bodyDiv;
// // }
 
// // function createCommenterLabel(commenter) {
// //   var commenterDiv = document.createElement("div");
// //   var commenterLabel = document.createElement("p");
// //   commenterLabel.innerHTML = "posted by:&nbsp;";
// //   var commenterName = document.createElement("span");
// //   commenterName.innerHTML = commenter;
// //   commenterLabel.appendChild(commenterName);
// //   commenterDiv.appendChild(commenterLabel);
// //   return commenterLabel;
// // }
 
// // function postNewComment(body, commenter) {
// //   var commentsDiv = document.getElementById("comments");
// //   var newCommentDiv = document.createElement("div");
// //   newCommentDiv.appendChild(body);
// //   newCommentDiv.appendChild(commenter);
// //   commentsDiv.appendChild(newCommentDiv);
// // }
