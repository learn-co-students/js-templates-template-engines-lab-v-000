function createPost(){
  const postTitle  = document.getElementById("postTitle").value;
  const postAuthor = document.getElementById("postAuthor").value;
  const postText   = document.getElementById("postText").value;

  const postTemplate     = document.getElementById("post-template").innerHTML;
  const commentsTemplate = document.getElementById("comments-template").innerHTML;
  const pageTemplate     = document.getElementById("page-template").innerHTML;

  const postTemplateFn   = _.template(postTemplate);
  const postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText});

  const commentsTemplateFn   = _.template(commentsTemplate);
  const commentsTemplateHTML = commentsTemplateFn({'comment': ''});

  const pageTemplateFn   = _.template(pageTemplate);
  const pageTemplateHTML = pageTemplateFn({'post': postTemplateHTML, 'sidebar': ''});

  document.getElementById("blog-post").innerHTML = pageTemplateHTML;
  document.getElementById("blog-comment").innerHTML = commentsTemplateHTML;
}

function postComment(){
  const commentAuthor = document.getElementById("commentAuthor").value;
  const commentText   = document.getElementById("commentText").value;
  const prevComments  = document.getElementById("comments").innerHTML;

  const commentTemplate  = document.getElementById("comment-template").innerHTML;
  const commentsTemplate = document.getElementById("comments-template").innerHTML;

  const commentTemplateFn    = _.template(commentTemplate);
  const commentTemplateHTML  = prevComments + commentTemplateFn({'commentAuthor': commentAuthor, 'commentText': commentText});

  const commentsTemplateFn   = _.template(commentsTemplate);
  const commentsTemplateHTML = commentsTemplateFn({'comment': commentTemplateHTML});

  document.getElementById("blog-comment").innerHTML = commentsTemplateHTML;
}