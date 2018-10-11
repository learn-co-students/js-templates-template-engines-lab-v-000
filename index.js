function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
