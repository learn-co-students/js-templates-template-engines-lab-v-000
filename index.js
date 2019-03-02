function createPost() {
  let title = document.querySelector('#title').value;
  let post = document.querySelector('#post').value;
  let author = document.querySelector('#author').value;

  let pageTemplate = document.querySelector('#page-template').innerHTML;
  let postTemplate = document.querySelector('#post-template').innerHTML;

  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);

  let main = document.querySelector('main');

  let pageTemplateHTML = pageTemplateFn({ post: post });
  let postTemplateHTML = postTemplateFn({ author: author, title: title });
  let commentsTemplateHTML = document.querySelector('#comments-template').innerHTML;

  main.innerHTML += pageTemplateHTML;
  main.innerHTML += postTemplateHTML;
  main.innerHTML += commentsTemplateHTML;
}

function postComment() {

  let comment = document.querySelector('#commentText').value;
  let commenter = document.querySelector('#commenterName').value;

  let commentTemplate = document.querySelector('#comment-template').innerHTML;

  let commentTemplateFn = _.template(commentTemplate);

  let commentTemplateHTML = commentTemplateFn({ comment: comment, commenter: commenter });

  let main = document.querySelector('main')

  main.innerHTML += commentTemplateHTML;
}
