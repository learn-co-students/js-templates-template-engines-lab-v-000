
function createPost(){
  // create template functions
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById('post-template').innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  // what is happening here???
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();


  var blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment(){
  // create comment template function
  var commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  // get the values entered into the forms
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  // append the values to the template and then append the compiled template to the page (DOM)
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({'commenter': commenterName, 'comment': commentText });
}
