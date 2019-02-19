function createPost() {
  let title = document.querySelector("#postTitle").value;
  let body = document.querySelector("#postBody").value;
  let author = document.querySelector("#postAuthor").value;

  let postTemplate = "<div class="post"><h1><%= title %></h1><p><%= body %></p><p>Posted by: <%= author %></p>";

  
}
