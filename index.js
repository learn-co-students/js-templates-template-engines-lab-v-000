function createPost(){
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

  //get values//
  let postTitle = document.getElementById("title").value
  let postBody = document.getElementById("body").value
  let postAuthor = document.getElementById("author").value

  //interpolate values//
  let postTemplateHTML = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor})
  let pageTemplateHTML = pageTemplate({'post': postTemplateHTML});
  let commentsSection = commentsTemplate();

  document.getElementById("main").innerHTML += pageTemplateHTML;
  document.getElementById('main').innerHTML += commentsSection;
}

function postComment(){
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

  let commentContent = document.getElementById("commentContent").value
  let commentAuthor = document.getElementById("commentAuthor").value

  let commentTemplateHTML = commentTemplate({'comment': commentContent, 'commenter': commentAuthor});

  let commentsDiv = document.getElementById('comments')
  commentsDiv.innerHTML += commentTemplateHTML

}
