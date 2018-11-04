function createPost() {
  // get templates
  let pageTemplate = document.getElementById("page-template").innerHTML;
  let postTemplate = document.getElementById("post-template").innerHTML;
  let commentsTemplate = document.getElementById("comments-template").innerHTML;


  // create template functions
  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);
  let commentsTemplateFn = _.template(commentsTemplate);


  // get blog values
  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let postBody = document.getElementById("postBody").value;

  // get main element & build HTML
  let main = document.getElementsByTagName("main");
  main[0].innerHTML += pageTemplateFn();

  // execute template function with JSON object for the interpolated values
  let blogSection = postTemplateFn({ title: postTitle, poster: postAuthor, body: postBody })
  let commentsSection = commentsTemplateFn();
  let postElement = document.getElementById('post');

  // append blog to HTML
  postElement.innerHTML += blogSection;

  let footer = postElement.getElementsByTagName('footer')[0]
  footer.innerHTML += commentsSection;
}

function postComment() {
  // get template
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  // create template function
  let commentTemplateFn = _.template(commentTemplate);

  // get comment values
  let commentText = document.getElementById("commentText").value;
  let commenter = document.getElementById("commenter").value;

  // get comments element
  let commentsSection = document.getElementById("comments");

  // append comment to element 
  commentsSection.innerHTML += commentTemplateFn({ commenter: commenter, comment: commentText });
}
