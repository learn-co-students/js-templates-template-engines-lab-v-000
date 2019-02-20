
function createPost(){
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let author = document.getElementById('author').value;

  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let postElement = document.getElementById('post');
  let blogSection = postTemplate({title: title, body: body, author: author});
  let commentsSection = commentsTemplate();

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsSection;
}

function postComment() {
  let comment = document.getElementById('comment').value;
  let commenter = document.getElementById('commenter').value;

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let commentsDiv = document.getElementById('comments');

  let commentTemplateHTML = commentTemplate({ comment: comment, commenter: commenter });

  commentsDiv.innerHTML += commentTemplateHTML;

}
