function postComment() {
  let commenter = document.getElementById('commenterName');
  console.log(commenter);
  let comment = document.getElementById('commentText').value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments-template');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);


  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let templateHTML = postTemplate({ "title": title, "body": body, "author": author});
  let postHTML = pageTemplate({ "post": templateHTML });

  document.getElementsByTagName('main')[0].innerHTML += postHTML;
  //
  // let commentsSection = commentsTemplate();
  // var postElement = document.getElementById('post')
  //
  // postElement.innerHTML += templateHTML

}
