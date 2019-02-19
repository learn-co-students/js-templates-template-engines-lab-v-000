// function createPost(){
//   var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
//   // var postTemplate = _.template(document.getElementById("post-template").innerHTML);
//   var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
//
//   var author = document.getElementById('author').value;
//   var title = document.getElementById('title').value;
//   var body = document.getElementById('body').value;
//
//   var bodyTemplate = _.template(document.getElementById('post-template').innerHTML);
//
//
//   var postDiv = document.getElementById('post');
//
//   //execute template function with JSON object for the interpolated values
//   var templateHTML = bodyTemplate({ title: title, body: body, author: author });
//
//   //append rather than replace!
//   postDiv.innerHTML = templateHTML;
//   document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
//   var commentsSection = commentsTemplate();
//   var postElement = document.getElementById("post");
//   postDiv.getElementsByTagName("footer")[0].innerHTML = commentsSection;
// }

function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var bodyTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var title= document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var body = document.getElementById("body").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var templateHTML = bodyTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = templateHTML;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment(){
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('comment').value;

  var commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  var templateHTML = commentTemplate({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!

  commentsDiv.innerHTML += templateHTML;

}
