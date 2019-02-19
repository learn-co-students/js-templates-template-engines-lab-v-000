function createPost() {
  let title = document.getElementById('blogTitle').value;
  let body = document.getElementById('blogBody').value;
  let author = document.getElementById('blogAuthor').value;

  let pageTemplate = '<div>postTemple</div>';
  let pageTemplateFN = _.template(pageTemplate);
  let postTemplate = '<article><header><%= title %></header><p><%= body %></p><footer><%= author %></footer></article>';
  let templateFn = _.template(postTemplate);
}
