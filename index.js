function createPost () {
  //debugger
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn2 = _.template(pageTemplate);

  let title = document.getElementById('postTitle').value;
  let author = document.getElementById('postAuthor').value;
  let content = document.getElementById('postContent').value;
  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFn = _.template(postTemplate);
  let templateHTML = templateFn({ title: title, author: author, content: content });

  let template2HTML = templateFn2({ });
  document.querySelector('body').innerHTML += template2HTML;

  let postdiv = document.getElementById('post');
  postdiv.innerHTML = templateHTML;

  postComment();

}

function postComment () {
  if (document.getElementById('commentText') != null) {
    let comment = document.getElementById('commentText').value;
    let commentTemplate = document.getElementById('comment-template').innerHTML;
    let templateFncom = _.template(commentTemplate);
    let templateHTMLcom = templateFncom({comment:comment});
    let commentdiv = document.getElementById('comments');
    commentdiv.innerHTML += templateHTMLcom;
  } else {
    let commentsFormTemplate = document.getElementById('comments-template').innerHTML;
    let templateFncommentform = _.template(commentsFormTemplate);
    let templateCommentHTML = templateFncommentform({});
    document.querySelector('body').innerHTML += templateCommentHTML;
  }


}
