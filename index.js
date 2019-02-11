function createPost(){

  // get values
  let postTitle = document.getElementById("postTitle").value;

  let postBody = document.getElementById("postBody").value;

  let postAuthor = document.getElementById("postAuthor").value;

  // create template Functions

  let pageTemplate = document.getElementById("page-template").innerHTML;

  let postTemplate = document.getElementById("post-template").innerHTML;

  let commentsTemplate = document.getElementById("comments-template").innerHTML;


  //create template
  let templateFn = _.template(postTemplate, pageTemplate);

  let mainDiv = document.getElementById('main');

  let templateHTML = templateFn({ title: postTitle, body: postBody, author: postAuthor});

  // append
  mainDiv.innerHTML += templateHTML;
}





function postComment() {

  /// get values for post
  let commenter = document.getElementById('commmenter').value;

  let comment = document.getElementById('commentText').value;

  //create template function for post comment
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;
}
