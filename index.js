 function createPost() {
  // page elements
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // post elements
  let postTitle = document.getElementById("post-title").value;
  let postAuthor = document.getElementById("post-author").value;
  let postBody = document.getElementById("post-body").value;
  
  // page assembly
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  let postHTML = postTemplate({ 'postTitle': postTitle, 'postAuthor': postAuthor, 'postBody': postBody }); 
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML += postHTML;
  document.getElementsByTagName("footer")[0].innerHTML += commentsSection;
 }

 function postComment(){
  let commenter = document.getElementById("commenter-name").value;
  let comment = document.getElementById("comment-text").value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  let templateHTML = commentTemplate({'commenter':commenter, 'comment':comment})

  let commentsSection = document.getElementById('comments')
  let newComment = document.createElement('div');
  newComment.innerHTML = templateHTML;
  commentsSection.append(newComment);
 }