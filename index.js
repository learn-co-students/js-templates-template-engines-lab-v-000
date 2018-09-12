function postPage() {
  const post = document.getElementById("postText").value;
  const sidebar = document.getElementById("sidebarText").value;

  const pageTemplate = document.getElementById("page-template").innerHTML;
  const templateFn = _.template(pageTemplate);
}

function createPost() {
  const post = document.getElementById("postText").value;
}
