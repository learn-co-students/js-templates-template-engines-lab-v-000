function createPost(){
  const postTitle  = document.getElementById("postTitle").value;
  const postBody  = document.getElementById("postBody").value;
  const postAuthor = document.getElementById("postAuthor").value;

  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  // const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  const postHTML = postTemplate({'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor})


  document.getElementById('posts').innerHTML += pageTemplate()

  debugger
  document.getElementById('post').innerHTML += postHTML + commentsTemplate()



}

function postComment(){

  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  const commentBody = document.getElementById("commentBody").value;
  const commentAuthor = document.getElementById("commentAuthor").value;

  const commentHTML = commentTemplate({'commentBody': commentBody, 'commentAuthor': commentAuthor})

  document.getElementById('comments').innerHTML += commentHTML;

}
