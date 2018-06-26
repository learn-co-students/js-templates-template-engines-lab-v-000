function createPost() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var content = document.getElementById("content").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  //create template function
  var postTemplateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var main = document.getElementsByTagName("main")[0]

  //execute template function with JSON object for the interpolated values
  var postTemplateHTML = postTemplateFn({ "title": title, "author": author, "content": content});
  var pageTemplateHTML = pageTemplateFn();
  var commentsTemplateHTML = commentsTemplateFn();

  //append rather than replace!
  main.innerHTML += pageTemplateHTML;
  var post = document.getElementById("post")
  post.innerHTML = postTemplateHTML;
  var sidebar = document.getElementById("sidebar")
  sidebar.innerHTML = commentsTemplateHTML;
}

function postComment(){
  var comment = document.getElementById("comment").value;
  var commenter = document.getElementById("commenter").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn({ "comment": comment, "commenter": commenter });

  var comments = document.getElementById("comments")

  comments.innerHTML += commentTemplateHTML;

}
