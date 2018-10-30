function createPost(){
  let postTitle = document.getElementById(`postTitle`).value
  let postBody = document.getElementById(`postBody`).value
  let postAuthor = document.getElementById(`postAuthor`).value

  let pageTemplate = _.template(document.getElementById(`page-template`).innerHTML);
  let postTemplate = _.template(document.getElementById(`post-template`).innerHTML);
  let commentsTemplate = _.template(document.getElementById(`comments-template`).innerHTML);
   document.getElementsByTagName(`main`)[0].innerHTML += pageTemplate();

  let postSection = postTemplate({postTitle: postTitle, postBody: postBody, postAuthor: postAuthor})
  let commentSection = commentsTemplate();
  let postDiv = document.getElementById(`post`)

  postDiv.innerHTML = postSection;
  postDiv.getElementsByTagName(`footer`)[0].innerHTML = commentSection
 };

 function  postComment(){
  let commentBody = document.getElementById(`commentBody`).value
  let commenter = document.getElementById(`commenter`).value

  let commentTemplate = _.template(document.getElementById(`comment-template`).innerHTML);

  let commentsSection = document.getElementById(`comments`);
  commentsSection.innerHTML += commentTemplate({commentBody: commentBody, commenter: commenter})
};
