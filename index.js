function createPost() {
  // blog values
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let author = document.getElementById('author').value;

  // templates
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('post-template').innerHTML;
  let commentsTemplate = document.getElementById('comments-template').innerHTML;

  // create page
  let main = document.getElementsByTagName('main')[0];
  let pageTemplateFn = _.template(pageTemplate);
  let pageTemplateHTML = pageTemplateFn();
  main.innerHTML += pageTemplateHTML;

  // create post and comment functions
  let postTemplateFn = _.template(postTemplate);
  let commentsTemplateFn = _.template(commentsTemplate);

  let postHTML = postTemplateFn({title: title, body: body, author: author});
  let commentsHTML = commentsTemplateFn();
  let post = document.getElementById('post');

  post.innerHTML = postHTML;
  post.getElementsByTagName('footer')[0].innerHTML = commentsHTML;
}

function postComment() {
  let name = document.getElementById('name').value;
  let text = document.getElementById('text').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let commentFn = _.template(commentTemplate);

  let comments = document.getElementById('comments');
  let commentHTML = commentFn({name: name, text: text});

  comments.innerHTML += commentHTML;
}
