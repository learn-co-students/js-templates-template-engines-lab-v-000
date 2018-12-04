function createPost() {

  // create Page template
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);

  // create Post template
  let postTemplate = document.getElementById('post-template').innerHTML;
  let postTemplateFn = _.template(postTemplate);

  // create Comments template
  let commentsTemplate = document.getElementById('comments-template').innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);



  // get values from the Post form
  let postTitle = document.getElementById('postTitle').value;
  let postContent = document.getElementById('postContent').value;
  let postAuthor = document.getElementById('postAuthor').value;


  // Create HTML for the Post Template & Insert respective values
  let postTemplateHTML = postTemplateFn({
                          postTitle: postTitle,
                          postContent: postContent,
                          postAuthor: postAuthor
                        });

  // Create HTML for the Page Template
  let pageTemplateHTML = pageTemplateFn();

  // Create HTML for the Comments Template
  let commentsTemplateHTML = commentsTemplateFn();


  //Insert the Post & Comment sections into the pageTemplate
  let remainingBody = document.getElementById('remaining_content');
  remainingBody.innerHTML = pageTemplateHTML;

  //Insert the post into the Post Section
  let postSection = document.getElementById('post');
  postSection.innerHTML = postTemplateHTML;

  //Insert the comment into the Comment Section
  let commentForm = document.getElementById('comment_form');
  commentForm.innerHTML = commentsTemplateHTML;
}


function postComment() {

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);

  let comment = document.getElementById('commentText').value;
  let commenter = document.getElementById('commenterName').value;

  let commentTemplateHTML = commentTemplateFn({
                              commentText: comment,
                              commenterName: commenter
                            });

  let commentsSection = document.getElementById('comments_for_post');

  commentsSection.innerHTML += commentTemplateHTML;
}
