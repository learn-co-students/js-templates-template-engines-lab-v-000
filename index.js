function createPost() {
  let post_body = document.getElementById('postBody').value;
  let post_title = document.getElementById('postTitle').value;
  let post_author = document.getElementById('postAuthor').value;

  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);

  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);

  let postSection = document.getElementById('post');


  let templateHTML = postTemplateFn({postBody: post_body, postTitle: post_title, postAuthor: post_author});
  console.log(templateHTML);
  let commentSection = commentsTemplateFn();

    //need to add comments section to post section to get it to show up!
  postSection.innerHTML += commentSection += templateHTML;
}

function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let commentTemplateFn = _.template(commentTemplate);

  let comments = document.getElementById('comments');

  let commentTemplateHTML = commentTemplateFn({ comment: comment, commenterName: commenter });

  comments.innerHTML += commentTemplateHTML;
}
