function createPost() {
  let post = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  let main = document.getElementsByTagName('main')[0].innerHTML;
  main += pageTemplate()
  let post =  postTemplate({ 'post': post, 'author': author})
  let postElement  = document.getElementById("post")
  postElement.innerHTML = postTemplate({ 'post': post, 'author': author})
  pageDiv.getElementsByTagName('footer')[0].innerHTML = commentsTemplate()
  }

}

function postComment() {
  var commenter = document.getElementById("commenter").value;
  var commentText = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  //create template function
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ 'commentText': commentText, 'commenter': commenter });
  // same as append
  commentsDiv.innerHTML += templateHTML;
}
