function createPost() {
  let title = document.getElementById("postTitle").value
  let body = document.getElementById("postBody").value
  let author = document.getElementById("postAuthor").value

  let postTemplate = document.getElementById("post-template").innerHTML
  let templateFn = _.template(postTemplate)

  // it's inside of another template...
  let postDiv = document.getElementById('post')

  // postDiv.innerHTML = templateFn({ 'title': title, 'body': body, 'author': author })
}

//issues with form grabbing a value?
function postComment() {
  var commenter = document.getElementById("commenterName").value;
  // var comment = document.getElementById("commentText").value;
  // var commentTemplate = document.getElementById("comment-template").innerHTML;
  //
  // var templateFn = _.template(commentTemplate);
  //
  // var commentsDiv = document.getElementById("comments");
  //
  // var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  // commentsDiv.innerHTML += templateHTML;
}
