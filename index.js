// function createPost(){
//
// // template functions
//
//   let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
//   let postTemplate = _.template(document.getElementById("post-template").innerHTML);
//   let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
//
//    let title = document.getElementById("postTitle").value;
//    let body = document.getElementById("postBody").value;
//    let author = document.getElementById("postAuthor").value;
//
//   document.getElementsByTagName('main')[0].innerHTML += pageTemplate();
//
//   let blogSection = postTemplate({'title': title, 'body': body, 'author': author});
//   let postDiv = document.getElementById('post');
//
//   postDiv.innerHTML = blogSection;
//
//    postDiv.getElementsByTagName("footer")[0].innerHTML = commentsTemplate();
// }
//
// function postComment(){
//
//   let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
//   let comment = document.getElementById("postComment").value;
//   let commenter = document.getElementById("postCommenter").value;
//
//   let commentsDiv = document.getElementById('comments');
//
//   commentsDiv.innerHTML += commentTemplate({'comment': comment, 'commenter': commenter});
//
//
// }

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
