function createPost() {
  let author = document.getElementById("postAuthor").value;
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let main = document.querySelector("main");

  let pageTemplate = document.getElementById("page-template").innerHTML;
  let postTemplate = document.getElementById("post-template").innerHTML;
  let commentsTemplate = document.getElementById("comments-template").innerHTML;

  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);
  let commentsTemplateFn = _.template(commentsTemplate);


  let postTemplateHTML = postTemplateFn({'author':author, 'title':title, 'body':body, 'comments':commentsTemplateFn()});
  let pageTemplateHTML = pageTemplateFn({'post':postTemplateHTML});
   main.innerHTML += pageTemplateHTML;
}

function postComment() {

  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;
debugger;
  let commentTemplate = document.getElementById("comment-template").innerHTML;

  let commentTemplateFn = _.template(commentTemplate);

  let commentHTML =  commentTemplateFn({'commenter':commenter, 'comment':comment});

  let comments = document.getElementById("comments");

  comments.innerHTML += commentHTML;
}
