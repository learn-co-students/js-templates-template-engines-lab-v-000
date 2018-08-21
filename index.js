function createPost(){
  let title = document.getElementById("post-title").value;
  let author = document.getElementById("post-author").value;
  let body = document.getElementById("post-body").value;

  let postTemplate = document.getElementById("post-template").innerHTML;
  let templateFn = _.template(postTemplate);
  let pageTemplate = document.getElementById("page-template").innerHTML;
  let pageFn = _.template(pageTemplate)
  document.getElementsByTagName("main")[0].innerHTML += pageFn()
  let postsDiv = document.getElementById("post")

  let commentsTemplate = document.getElementById("comments-template").innerHTML
  let commentsFn = _.template(commentsTemplate)

  let templateHTML = templateFn({'title': title, 'author': author, 'body': body})
  postsDiv.innerHTML += templateHTML += commentsFn()
}

function postComment(){
  let author = document.getElementById("comment-author").value;
  let body = document.getElementById("comment-body").value;

  console.log(author)
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let templateFn = _.template(commentTemplate);
  let templateHTML = templateFn({'author': author, 'body': body})
}
