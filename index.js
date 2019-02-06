function createPost() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let author = document.getElementById("author").value;

  let compilePage = _.template(document.getElementById("page-template").innerHTML);
  let main = document.getElementById("main");
  main.innerHTML += compilePage();

  let compilePost = _.template(document.getElementById("post-template").innerHTML);
  let page = document.getElementById("page");
  page.innerHTML += compilePost({ title: title, body: body, author: author });

  let compileComments = _.template(document.getElementById("comments-template").innerHTML);
  let post = document.getElementById("post");
  post.innerHTML += compileComments();

  document.getElementById("title").value = '';
  document.getElementById("body").value = '';
  document.getElementById("author").value = '';
};

function postComment() {
  let comment = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenter").value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let compileCommentFn = _.template(commentTemplate);
  let commentHTML = compileCommentFn({ comment: comment, commenter: commenter });
  let commentsOnPost = document.getElementById("comments");
  commentsOnPost.innerHTML += commentHTML;
  document.getElementById("commentText").value = '';
  document.getElementById("commenter").value = '';
};
