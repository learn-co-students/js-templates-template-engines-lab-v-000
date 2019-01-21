function createPost() {
  let pageTemplate=_.template(document.getElementById("page-template").innerHTML);
  let postTemplate=_.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate=_.template(document.getElementById("comments-template").innerHTML);

  let postTitle=document.getElementById("postTitle").value;
  let postBody=document.getElementById("postBody").value;
  let postAuthor=document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML+=pageTemplate();

  let blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });
  let commentsSection = commentsTemplate();

  let postElement = document.getElementById("post");
  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment(){
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let commenterName = document.getElementById('commenter').value;
  let commentText = document.getElementById('commentText').value;
  let commentsSection = document.getElementById('comments');
  commentsSection.innerHTML+=commentTemplate({ "comment": commenterName, "commenter": commentText });

}
