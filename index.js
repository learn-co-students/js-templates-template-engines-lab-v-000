function createPost(){
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value

  let pageTemplate = document.getElementById("page-template").innerHTML
  let pageTemplatefn = _.template(pageTemplate)

  let postTemplate = document.getElementById("post-template").innerHTML
  let postTemplateFn = _.template(postTemplate);
}

function postComment(){
  let commentTemplate = document.getElementById("comment-template").innerHTML
  let commentTemplateFn = _.template(commentTemplate)
}
