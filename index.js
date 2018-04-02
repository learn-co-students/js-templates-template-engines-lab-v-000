function createPost() {

  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentTemplate = _.template(document.getElementById("comments-template").innerHTML);

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let post = document.getElementById("post").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': title, 'post': post, 'author': author });
  let commentsSection = commentTemplate();
  let postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;

  // let templateFn = _.template(postTemplate);

  // let postsDiv = document.getElementById("posts");

  // let templateHTML = templateFn({ 'title': title, 'author': author, 'post': post });

  // postsDiv.innerHTML += templateHTML;
}

function postComment() {
  let commenter = document.getElementById("commenter").value;
  let comment = document.getElementById("comment").value;

  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  
  // let commentTemplate = document.getElementById("comments-template").innerHTML;

  // let templateFn = _.template(commentTemplate);

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenter, 'comment': comment});

  // let commentsDiv = document.getElementById("comments");

  // let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  // commentsDiv.innerHTML += templateHTML;
}