function createPost(){
  let title = document.getElementById('title').value;
  let postBody = document.getElementById('postBody').value;
  let author = document.getElementById('author').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let pageBody = document.getElementById('pageBody');

  pageBody.innerHTML += pageTemplateFn();

  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let postDiv = document.getElementById('post');

  postDiv.innerHTML += pageTemplateFn({title: title, postBody: postBody, author: author});

  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);

  postDiv.innerHTML += commentsTemplateFn();

}

function postComment (){
  let commenterName = document.getElementById('commenterName').value;
  let commentText = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let commentTemplateFn = _.template(commentTemplate);

  let commentTemplateHTML = commentTemplateFn({commentText: commentText, commenterName: commenterName})

  let commentsDiv = document.getElementById('comments');

  commentsDiv.innerHTML += commentTemplateHTML;

}
