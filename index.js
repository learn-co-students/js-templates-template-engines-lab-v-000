function createPost() {
  // Add Blog Page Template
  const blogPageTemplate = document.getElementById("page-template").innerHTML;
  const pageTemplateFn = _.template(blogPageTemplate);
  const postsSectionDiv = document.getElementById("posts-section");
  postsSectionDiv.innerHTML += pageTemplateFn;
  
  // Add Blog Post Template (to page template)
  const postTitle = document.getElementById("postTitle").value;
  const postAuthor = document.getElementById("postAuthor").value;
  const postBody = document.getElementById("postBody").value;
  const blogPostTemplate = document.getElementById("post-template").innerHTML;
  const postTemplateFn = _.template(blogPostTemplate);
  const postsDiv = document.getElementById("post");
  const postTemplateHTML = postTemplateFn({ 'title': postTitle, 'content': postBody, 'author': postAuthor });
  postsDiv.innerHTML += postTemplateHTML;
}

function postComment() {
    
  // Add Blog Comments Template
  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const commentsTemplateFn = _.template(commentsTemplate);
  const commentsSectionDiv = document.getElementById("comments-section");
  commentsSectionDiv.innerHTML += commentsTemplate;
  
  // Add Post Comment Template (to comments template)
  const commenterName = document.getElementById("commenterName").value;
  const commentText = document.getElementById("commentText").value;
  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const commentTemplateFn = _.template(commentTemplate)
  const commentsDiv = document.getElementById("comments");
  const commentTemplateHTML = commentTemplateFn({ 'commenter': commenterName, 'comment': commentText });
  commentsDiv.innerHTML += commentTemplateHTML;
}