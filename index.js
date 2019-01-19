function createPost() {

  // Get blog post's title, author, content
  const title = document.getElementById('post-title').value
  const author = document.getElementById('post-author').value
  const content = document.getElementById('post-content').value

  //retrieve lodash templates for page and post
  const pageTemplate = document.getElementById('page-template').innerHTML;
  const postTemplate = document.getElementById('post-template').innerHTML;

  const pageTemplateFn = _.template(pageTemplate);
  const postTemplateFn = _.template(postTemplate);

  //generate page template
  const pageHTML = pageTemplateFn();
  document.getElementById('container').innerHTML += pageHTML

  //insert blog post data into post container
  const blogDiv = document.getElementById('post');
  const postTemplateHTML = postTemplateFn({title: title, author: author, content: content});

  blogDiv.innerHTML = postTemplateHTML;

  //generate comment sidebar
  const commentSidebar = document.getElementById('sidebar')
  const commentsTemplate = document.getElementById('comments-template').innerHTML;

  let index = document.querySelectorAll('.comment').length
  const commentsTemplateFn = _.template(commentsTemplate);
  const commentsHTML = commentsTemplateFn({index: index});

  commentSidebar.innerHTML = commentsHTML;

}

function postComment() {
  //get comment author and content
  const commenter = document.getElementById('comment-author').value
  const comment = document.getElementById('comment-content').value

  //generate comment template
  const commentTemplate = document.getElementById('comment-template').innerHTML;
  const commentTemplateFn = _.template(commentTemplate);
  const commentHTML = commentTemplateFn({comment: comment, commenter: commenter})

  const commentsDiv = document.getElementById('comments');

  commentsDiv.innerHTML += commentHTML;

}
