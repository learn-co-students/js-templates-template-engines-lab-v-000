// document.getElementById('submitPost').addEventListener('click', function(e){
//   e.preventDefault();
//   createPost();
// })


function createPost() {
  console.log('createPost firing')
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;

  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let postTemplateHTML = postTemplate({'title': postTitle, 'content': postBody, 'author': postAuthor})
  let commentsTemplateHTML = commentsTemplate();
  let postElement = document.getElementById('post');
  postElement.innerHTML = postTemplateHTML;
  postElement.getElementsByTagName('footer')[0].innerHTML = commentsTemplateHTML;
}

function postComment() {
  let author = document.getElementById('author').value;
  let comment = document.getElementById('comment').value;

  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  let commentHTML = commentTemplate({'comment': comment, 'author': author});
  document.getElementById('comment').innerHTML += commentHTML;

}