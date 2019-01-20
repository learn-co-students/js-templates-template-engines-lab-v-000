function createPost(){
  //creates template functions
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //gets blog values

  var postTitle = document.getElementById('postTitle').value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById('postBody').value;

  //append
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({'title':postTitle, 'body':post, 'poster':postAuthor})
  var commentsSection = commentsTemplate()
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}


function postComment(){

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  var commentBody = document.getElementById('commentText').value;
  var commentAuthor = document.getElementById('commenter').value;

  var commentsSection = document.getElementById('comments')
  commentsSection.innerHTML += commentTemplate({'comment': commentBody, 'commenter': commentAuthor})

 }
