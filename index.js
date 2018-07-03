function createPost() {
  var title = document.getElementById("postTitle").value;
  var content = document.getElementById("postContent").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var postFn = _.template(postTemplate);

  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageFn = _.template(pageTemplate);

  var post = postFn({'title': title, 'content': content, 'author': author});
  var page = pageFn({'post': post});

  var main = document.querySelector('main');
  main.innerHTML += page;

  var comments = document.getElementById('comments-template').innerHTML;
  main.innerHTML += comments
}

function postComment() {
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentFn = _.template(commentTemplate);

  var commentsDiv = document.querySelector("main");
  var templateHTML = commentFn({ 'commentText': commentText, 'commenterName': commenterName });

  commentsDiv.innerHTML += templateHTML;
}
