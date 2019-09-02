function createPost() {
  debugger
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  //create post to insert into page
  var postTemplate = document.getElementById("post-template").innerHTML;
  var postTemplateFn = _.template(postTemplate);
  var post = postTemplateFn({'title': title, 'body': body, 'author': author});

  //create sidebar/comments section to insert into page
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
  var commentsTemplateFn = _.template(commentsTemplate);
  var commentsSection = commentsTemplateFn();

  //create page layout for post
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var pageTemplateFn = _.template(pageTemplate);
  var pageHTML = pageTemplateFn({'post': post, 'comments': commentsSection});

  var mainElement = document.getElementById("main");
  mainElement.innerHTML = pageHTML;
}

function postComment() {
  var comment = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var commentTemplateFn = _.template(commentTemplate);
  var commentHTML = commentTemplateFn({'comment': comment, 'commenter': commenter});

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentHTML;
}
