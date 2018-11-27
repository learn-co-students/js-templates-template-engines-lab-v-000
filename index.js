
function createPost() {
  // elements of a Post
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let author = document.getElementById('author').value;

    // use lodash templates
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);

  let postTemplate = document.getElementById("post-template").innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let post = postTemplateFn({title: title, body: body, author: author});

  let commentsTemplate = document.getElementById("comments-template").innerHTML;

  // order matters - since body and commentsTemplate defined above, pageTemplateHTML
  // must come after these variables were defined.
  let pageTemplateHTML = pageTemplateFn({post: body, comments: commentsTemplate});
}

function postComment() {
  // gather data to interpolate
  let comment = document.getElementById('comment')
  let commenter = document.getElementById('commenter')

  // use lodash templates
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  let commentTemplateFn = _.template(commentTemplate);
  // need to check if comment and/or commenter have values
  if (comment && commenter){
    let commentTemplateHTML = commentTemplateFn({comment: comment.value, commenter: commenter.value});
  }

}
