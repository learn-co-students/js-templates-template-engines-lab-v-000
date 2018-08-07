function createPost(){
  event.preventDefault();
  
  let postTitle = document.getElementById('postTitle').value;
  let postBody = document.getElementById('postBody').value;
  let postAuthor = document.getElementById('postAuthor').value;
  

  let postTemplate = document.getElementById('post-template').innerHTML;

  let templateFn = _.template(postTemplate);

  let postDiv = document.getElementById('post');

  let templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});

  postDiv.innerHTML += templateHTML;
}
