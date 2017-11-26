function createPost(){
  //grab form values
  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  //grab post, comments and page templates
  let postTemplate = document.getElementById("post-template").innerHTML;
  let pageTemplate = document.getElementById("page-template").innerHTML;
  let commentsTemplate = document.getElementById("comments-template").innerHTML;

  //grab the main page
  let main = document.getElementsByTagName("main")[0];

 // create template function
 let postTemplateFn = _.template(postTemplate);
 let pageTemplateFn = _.template(pageTemplate);
 let commentsTemplateFn = _.template(commentsTemplate);

 //execute template function with JSON object for the interpolated values
 let postTemplateHTML = postTemplateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor});
 let pageTemplateHTML = pageTemplateFn();
 let commentsTemplateHTML = commentsTemplateFn();

 //append rather than replace!

 main.innerHTML += pageTemplateHTML;
 main.innerHTML += commentsTemplateHTML;
 let postSection = document.getElementById('post');
 postSection.innerHTML = postTemplateHTML;

}

function postComment(){

  let commenterName = document.getElementById("commenter-name").value;
  let commentText = document.getElementById("comment-text").value;

  let commentTemplate = document.getElementById("comment-template").innerHTML;
  commentTemplateFn = _.template(commentTemplate);
  commentTemplateHTML = commentTemplateFn({'commenterName': commenterName, 'commentText': commentText})
  commentsSection = document.getElementById('comments')
  commentsSection.innerHTML+= commentTemplateHTML;

}
