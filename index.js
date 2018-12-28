function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let blog = postTemplate({ 'title': title, 'body': body, 'author': author });
  let comments = commentsTemplate();
  let post = document.getElementById('post');

	post.innerHTML += blog;
	post.getElementsByTagName('footer')[0].innerHTML += comments;
}

function postComment() {
	let name = document.getElementById('commenterName').value;
	let text = document.getElementById('commenterText').value;

	let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let comment = commentTemplate({'comment': text, 'commenter': name})
  let comments = document.getElementById('comments');

  comments.innerHTML += commentTemplate
}
