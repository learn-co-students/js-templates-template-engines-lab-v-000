function createPost() {
  let postTitle = document.getElementById("postTitle").value
  let postBody = document.getElementById("postBody").value
  let postAuthor = document.getElementById("postAuthor").value

  let commentsTemplate = document.getElementById("comments-template").innerHTML
  let postTemplate = document.getElementById("post-template").innerHTML
  let pageTemplate = document.getElementById("page-template").innerHTML

  let templateFn = _.template(postTemplate);
  let templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});

  let pageFn = _.template(pageTemplate)
  let commentFn = _.template(commentsTemplate)

  document.getElementsByTagName('main')[0].innerHTML += pageFn()
  let post = document.getElementById('post')
  post.innerHTML = templateHTML
  post.getElementsByTagName("footer")[0].innerHTML += commentFn;
}

function postComment() {
  let commentTemplate = document.getElementById("comment-template").innerHTML

  let commentAuthor = document.getElementById("commentAuthor").value
  let commentBody = document.getElementById("commentBody").value

  let templateFn = _.template(commentTemplate);
  let templateHTML = templateFn({ 'commentAuthor': commentAuthor, 'commentBody': commentBody});

  let commentsTemplate = document.getElementById("comments");
  commentsTemplate.innerHTML += templateHTML
}
