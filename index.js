
function createPost() {
	
  let title = document.getElementById('postTitle').value;
  let post = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;


  let pageTemplate = document.getElementById('page-template').innerHTML;
  let postTemplate = document.getElementById('post-template').innerHTML;
 
  //create template function
	let pageTemplateFn = _.template(pageTemplate);
  let templateFn = _.template(postTemplate);
 
  let postDiv = document.getElementById('post-binding');
 
  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ title: title, post: post, author: author });
 
  //append rather than replace!
  postDiv.innerHTML += templateHTML;
}

function postComment() {
  let comment = document.getElementById('comment').value;
  let author = document.getElementById('commentAuthor').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
 
  //create template function
  let templateFn = _.template(commentTemplate);
 
  let commentDiv = document.getElementById('comment-binding');
 
  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, author: author });
 
  //append rather than replace!
  commentDiv.innerHTML += templateHTML;
	
}
