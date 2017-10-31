function createPost(){
  //get content from form
  let author = document.getElementById("postAuthor").value;
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;

  //template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  //execute template functions with JSON object
  //comments start empty
  let postHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsHTML = commentsTemplate();

  //adds newly generated pageTemplate to main section of document
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  //identify container on page where post will display
  let postDiv = document.getElementById("post");

  //puts new post content in post container
  postDiv.innerHTML = postHTML;

  //add comments section to post footer
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsHTML;
}

function postComment(){
  //get content from form
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  //lodash function
  //identify how individual comments will be built
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  //indentify container on page where comments will be listed
  let commentsDiv = document.getElementById("comments");

  //execute templateFn with JSON object
  //interpolated values > for use in html file
  let templateHTML = commentTemplate({ 'comment': comment, 'commenter': commenter });

  //appends new comments to comments container
  commentsDiv.innerHTML += templateHTML;
}
