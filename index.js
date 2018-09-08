function createPost() {
  const author = document.getElementById('authorName').value;
  const content = document.getElementById('postContent').value;
  const title = document.getElementById('postTitle').value;
  const postTemplate = document.getElementById('post-template').innerHTML;
  const postFn = _.template(postTemplate);
  const pageTemplate = document.getElementById('page-template').innerHTML;
  const postHTML = postFn({'author': author, 'content': content, 'title': title});
  const pageFn = _.template(pageTemplate);

}

function postComment() {
  const commentTemplate = document.getElementById('comment-template').innerHTML;
  const name = document.getElementById('commenterName');
  const text = document.getElementById('commentText');
  const commentFn = _.template(commentTemplate);
  const commentHTML = commentFn({'name': name, 'text': text});
}
