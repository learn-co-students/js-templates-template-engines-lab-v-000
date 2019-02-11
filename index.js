function createPost(){

  // create template Functions
  let postTemplate = document.getElementById("post-template").innerHTML;

  let pageTemplate = document.getElementById("page-template").innerHTMl;

  let commentsTemplate = document.getElementById("comments-template").innerHTML;
  // get values
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let author =document.getElementById("author").value;

  //create template
  let templateFn = ._template(postTemplate);

  let postDiv = document.getElementById('main');

  let templateHTML = templateFn({ title: postTitle, body: postBody, author: postAuthor});

  postDiv.innerHTML += templateHTML;

}




function postComment() {
  //create template function for post comment
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  /// get values for post
  let commenter = document.getElementById('commmenter').value;
  let comment = document.getElementById('commentText').value;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += templateHTML;
}
