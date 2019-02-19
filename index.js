function createPost() {
  let title = document.getElementById('blogTitle').value;
  let body = document.getElementById('blogBody').value;
  let author = document.getElementById('blogAuthor').value;


  let postTemplate = '<article><header><%= title %></header><p><%= body %></p><footer><%= author %></footer></article>';
  let templateFn = _.template(postTemplate);
}
