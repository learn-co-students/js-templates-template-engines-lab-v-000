function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let mainDiv = document.querySelector("main");

  //execute template function with JSON object for the interpolated values
  let postTemplateHTML = postTemplate({ title: title, body: body, author: author });
  let commentsTemplateHTML = commentsTemplate();
  let pageTemplateHTML = pageTemplate({ post: postTemplateHTML });

  mainDiv.innerHTML +=(pageTemplate + commentsTemplateHTML);

}
