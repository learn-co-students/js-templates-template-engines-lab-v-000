function createPage() {
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var templateFn = _.template(pageTemplate);
  var mainDiv = document.getElementById('main');
  var templateHTML = templateFn();
  mainDiv.innerHTML += templateHTML;
}

function createCommentsTemplate() {
  var pageTemplate = document.getElementById('comments-template').innerHTML;
  var templateFn = _.template(pageTemplate);
  var mainDiv = document.getElementById('main');
  var templateHTML = templateFn();
  mainDiv.innerHTML += templateHTML;
}

function createPost() {
  var title = document.getElementById('postTitle').value;
  var author = document.getElementById('postAuthor').value;
  var body = document.getElementById('postBody').value;

  // Set variable equal to HTML template in index.html
  var postTemplate = document.getElementById('post-template').innerHTML;

  // Create a template using the HTML template variable and store in 'templateFn'
  var templateFn = _.template(postTemplate);

  // Identify where to add new post to
  if (!document.getElementById('post')) {
    createPage();
    createCommentsTemplate();
  }
  var postsDiv = document.getElementById('post');

  // Execute template function to get HTML string
  var templateHTML = templateFn({'postTitle': title, 'postAuthor': author, 'postBody': body});

  // Add html string to index.html
  postsDiv.innerHTML += templateHTML;
}

function postComment() {
  var commenter = document.getElementById('commenterName').value;
  var comment = document.getElementById('commentText').value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById('comments');

  var templateHTML = templateFn({'commenter': commenter, 'comment': comment});

  commentsDiv.innerHTML += templateHTML;
}