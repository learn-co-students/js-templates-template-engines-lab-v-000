function createPost() {
  // get form data from user input
  let title = document.getElementById('postTitle').value;
  let author = document.getElementById('postAuthor').value;
  let post = document.getElementById('postContent').value;

  // create template functions
  let pageTemplate = _.template(
    document.getElementById('page-template').innerHTML
  );
  let postTemplate = _.template(
    document.getElementById('post-template').innerHTML
  );
  let commentsTemplate = _.template(
    document.getElementById('comments-template').innerHTML
  );
  // get main div
  let main = document.getElementsByTagName('main')[0]
  // create HTML
  let pageHTML = pageTemplate()
  let postHTML = postTemplate({
    'title': title,
    'author': author,
    'post': post
  });
  let commentSection = commentsTemplate();

  // append page template to main div
  main.innerHTML += pageHTML;
  // grab post div
  let postDiv = document.getElementById('post');

  // add post to post div
  postDiv.innerHTML = postHTML;
  // add comment section to post
  postDiv.getElementsByTagName('footer')[0].innerHTML += commentSection;
}

function postComment() {
  // get form data from user input
  let commentBody = document.getElementById('commentBody').value;
  let commentAuthor = document.getElementById('commenter').value;

  // create template function
  let commentTemplate = _.template(
    document.getElementById('comment-template').innerHTML
  );

  // get comment div
  let commentSection = document.getElementById('comments');

  //createHTML
  let commentHTML = commentTemplate({
    'comment': commentBody,
    'commenter': commentAuthor
  });

  // append to comment section
  commentSection.innerHTML += commentHTML;

}
