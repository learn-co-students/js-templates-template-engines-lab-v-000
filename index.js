function createPost() {
  var postTitle = document.getElementById("postTitle").value
  var postBody = document.getElementById("postBody").value
  var postAuthor = document.getElementById("postAuthor").value

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postTemplateHTML = postTemplate({'title': postTitle, 'body': postBody, 'author': postAuthor })
  var commentsTemplateHTML = commentsTemplate;
  var pageTemplateElement = document.getElementById("post")

  pageTemplateElement.innerHTML = postTemplateHTML;
  pageTemplateElement.getElementsByTagName('footer')[0].innerHTML = commentsTemplateHTML;
}

function postComment() {
    var commenter = document.getElementById('commenter').value
    var comment = document.getElementById('commentText').value

    var commentTemplate = document.getElementById("comment-template").innerHTML;

    var commentTemplateFn= _.template(commentTemplate);

    var commentTemplateHTML = commentTemplateFn({'comment':comment, 'commenter':commenter});

    var commentsDiv = document.getElementById("comments");

    commentsDiv.innerHTML += commentTemplateHTML;
}
