function createPost() {
  let blogTitle = document.getElementById("blogTitle").value; // "My first blog";
  let blogAuthor = document.getElementById("blogAuthor").value;
  let blogContent = document.getElementById("blogContent").value;
  let postTemplate = document.getElementById("post-template").innerHTML;
  let pageTemplate = document.getElementById("page-template").innerHTML;
  let sideBarStuff = 'foo';
  let mainTag = document.getElementById("meat");


  let pageTemplateFn = _.template(pageTemplate);
  let postTemplateFn = _.template(postTemplate);

  let postTemplateHTML = postTemplateFn({'blogTitle': blogTitle, 'blogAuthor': blogAuthor, 'blogContent': blogContent})
  let pageTemplateHTML = pageTemplateFn({'sidebarStuff' : sideBarStuff, 'postStuff': postTemplateHTML});

  mainTag.innerHTML += pageTemplateHTML;


}

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;

  let commentsDiv = document.getElementById("comments"); //returns null for some reason
  console.log(commentsDiv);
  let commentTemplate = document.getElementById("comment-template").innerHTML;
  console.log(commentTemplate);
  let commentTemplateFn = _.template(commentTemplate);

  let commentTemplateHTML = commentTemplateFn({'comment': comment, 'commenter': commenter});
  commentsDiv.innerHTML += commentTemplateHTML;

}
