function createPost() {
  let title = document.getElementById('postTitle').value;
  let postText = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  //create template functions
  //load page
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let pageDiv = document.getElementById('page');

  let pageTemplateHTML = pageTemplateFn();
  pageDiv.innerHTML = pageTemplateHTML;

  //load post
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let postDiv = document.getElementById('post');

  //execute template function with JSON object for the interpolated values
  let postTemplateHTML = postTemplateFn({ title: title, postText: postText, author: author });
  //append rather than replace!
  postDiv.innerHTML += postTemplateHTML;

  //load comments section
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);
  let sidebarDiv = document.getElementById('sidebar');

  let commentsTemplateHTML = commentsTemplateFn();
  sidebarDiv.innerHTML = commentsTemplateHTML;
}


function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  let commentTemplate = document.getElementById('comment-template').innerHTML;

  //create template function
  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
