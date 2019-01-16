function createPost() {
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);
  let commentsTemplateHTML = commentsTemplateFn();
  document.body.innerHTML += commentsTemplateHTML;

  let title = document.getElementById('post-title').value;
  let body = document.getElementById('post-body').value;
  let author = document.getElementById('post-author').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;

  let postTemplate = document.getElementById('post-template').innerHTML;

  //create template function
  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);

  //let pageDiv = document.getElementById('page')
  let postDiv = document.getElementById('post');
  let pageDiv = document.getElementById('page');

  //execute template function with JSON object for the interpolated values
  let postTemplateHTML = postTemplateFn({ post_title: title, post_body: body, post_author: author });
  let pageTemplateHTML = pageTemplateFn({ post: postTemplateHTML });

  //append rather than replace!
  //pageDiv.innerHTML += pageTemplateHTML;
}

function postComment() {
  let commenter = document.getElementById('commenter-name').value;
  let comment = document.getElementById('comment-text').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let commentTemplateFn = _.template(commentTemplate);

  let commentDiv = document.getElementById('comment');

  let commentTemplateHTML= commentTemplateFn({ comment: comment, commenter: commenter });

  //commentDiv.innerHTML += commentTemplateHTML;
}
