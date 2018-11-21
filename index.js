function createPost(){
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let body = document.getElementById('body').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let commentsTemplate = document.getElementById('comments-template').innerHTML

  let commentsTemplateFn= _.template(commentsTemplate)
  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplateFn();
  let postDiv = document.getElementById('post');
  let templateHTML= postTemplateFn({title: title, body: body, author: author});

  postDiv.innerHTML = templateHTML;
  postDiv.getElementsByTagName('footer')[0].innerHTML = commentsTemplateFn
}


function postComment(){
  let comment = document.getElementById('comment').value
  let commenter = document.getElementById('commenter').value

  let commentTemplate = document.getElementById('comment-template').innerHTML
  let commentTemplateFn = _.template(commentTemplate)

  let commentDiv = document.getElementById('comments')

  let templateHTML = commentTemplateFn({comment: comment, commenter: commenter})

  commentDiv.innerHTML += templateHTML



}
