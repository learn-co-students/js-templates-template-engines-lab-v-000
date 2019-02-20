function createPost() {
  let title = document.getElementById('blogTitle').value;
  let body = document.getElementById('blogBody').value;
  let author = document.getElementById('blogAuthor').value;
  let post = document.getElementById('post-form').value;

  let pageTemplate ='<div id="page-template"><%= post %></div>';
  let pageTemplateFn = _.template(pageTemplate);

  let postTemplate = '<article><header><%= title %></header><p><%= body %></p><footer><%= author %></footer></article>';
  let postTemplateFn = _.template(postTemplate);
}
