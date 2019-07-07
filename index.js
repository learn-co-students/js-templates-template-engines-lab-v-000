function postComment(){
  //Gets the user-entered values from the form
  const commenter=document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;
  
  
  //get the script tag ided 'comment-template' and store the inner html in commentTemplate
  let commentTemplate=document.getElementById("comment-template").innerHTML;
  
  
  //Store the ability to use this template in templateFn
  //Template Fn accepts a properly formatted and name
  //JSON object
  let templateFn=_.template(commentTemplate);
  
  //target div to append the comment to
  const commentsDiv=document.getElementById("comments");
  
  //Use the templateFn to generate the appropriate html
  // behind the scences
  let templateHTML=templateFn({"comment": comment, "commenter": commenter});
  
  commentsDiv.innerHTML+=templateHTML;
}

function createPost(){
  let postTitle=document.getElementById("postTitle").value;
  let postBody=document.getElementById("postBody").value;
  
  let postTemplate=document.getElementById("post-tempalte").innerHTML;
  
  let templateFn=_.template(postTemplate);
  
  const pageDiv=document.getElementById("page");
  
  let templateHTML=templateFn({"postTitle": postTitle, "postBody": postBody});
  
  pageDiv.innerHTML+=templateHTML;
}

