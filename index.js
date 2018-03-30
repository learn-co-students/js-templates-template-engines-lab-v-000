const pageTemplate = document.getElementById('page-template').innerHTML
const postTemplate = document.getElementById('post-template').innerHTML
const commentTemplate = document.getElementById('comment-template').innerHTML
const commentsTemplate = document.getElementById('comments-template').innerHTML
const page = document.getElementById('page')

function createPost() {
  let title = document.getElementById('postTitle').value
  let body = document.getElementById('postBody').value
  let author = document.getElementById('postAuthor').value

  let postHTML = _.template(postTemplate)({
    title: title,
    body: body,
    author: author
  })

  page.innerHTML = _.template(pageTemplate)({post: postHTML})
  page.innerHTML += _.template(commentsTemplate)
}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}
