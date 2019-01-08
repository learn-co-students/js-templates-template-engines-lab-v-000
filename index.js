function createPost() {
  let author = document.getElementById('postAuthor').value;
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let pageTemplate = document.getElementById('page-template').innerHTML;

  let postTemplateFn = _.template(postTemplate);
  let pageTemplateFn = _.template(pageTemplate);
}

function postComment() {
  // let commenter = document.getElementById('commenterName').value;
  // let comment = document.getElementById('commentText').value;


  // let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  // let commentsTemplateFn = _.template(commentsTemplate);
  let commentTemplateFn = _.template(commentTemplate);


  // let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  // let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!


}
