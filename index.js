function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  let blogSection = postTemplate({ 'title': title, 'body': body, 'author': author })
  let commentsSection = commentsTemplate();

  document.getElementById('post').innerHTML += blogSection
  document.getElementsByTagName('article')[0].innerHTML += commentsSection
}

function postComment() {
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  let name = document.getElementById('commenter').value;
  let text = document.getElementById('commentText').value;

  let comment = commentTemplate({ 'commenter': name, 'comment': text  })

  document.getElementById('comments').innerHTML += comment

}
