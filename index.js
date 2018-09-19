function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;

  const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  const commentsDiv = document.getElementById("comments");

  const templateHTML = commentTemplate({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  const post_title = document.getElementById("postTitle").value;
  const post_body = document.getElementById("postBody").value;
  const post_author = document.getElementById("postAuthor").value;

  const postTemplate = _.template(document.getElementById("post-template").innerHTML);
  const pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  const blogPostHTML = pageTemplate();
  const postSectionHTML = postTemplate({ 'post_title': post_title, 'post_body': post_body, 'post_author': post_author });
  const commentsSectionHTML = commentsTemplate();

  const blogPost = document.getElementsByTagName("main")[0];
  blogPost.innerHTML += blogPostHTML;

  const postSection = document.getElementById("post");
  postSection.innerHTML += postSectionHTML;

  postSection.innerHTML += commentsSectionHTML;
}
