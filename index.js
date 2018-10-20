function createPost() {
  // create blog post variables from the post-form values
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postBody = document.getElementById("postBody").value;

  // create templates for the page, post and comments
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // add the template for the page to main section.
  // this adds the div for the sidebar and blog post.
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  // variable containing the post-template for the actual blog post.
  let post = postTemplate({"title": postTitle, "author": postAuthor, "body": postBody});
  // variable containing the comments-template for the comments section
  let comments = commentsTemplate();
  // variable containing the page element "post" (from page-template)
  let fullPost = document.getElementById("post");

  // adds the blog post to the interHTML
  fullPost.innerHTML = post;
  // adds the comments to the footer
  fullPost.getElementsByTagName("footer")[0].innerHTML = comments;
}

function postComment() {
  // create comment variables from the comments-template
  let commenterName = document.getElementById("commenterName").value;
  let commentBody = document.getElementById("commentBody").value;

  // create a template for the actual comment
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  // variable containing the div for the comment
  // from the comments-template added to the page by createPost()
  let commentsBox = document.getElementById("comments");

  // adds the comment create by using commentTemplate & comment variables
  commentsBox.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentBody });
}
