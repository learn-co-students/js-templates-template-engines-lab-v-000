function createPost() {

  // Get the data submitted by the form
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var title = document.getElementById("postTitle").value;

  //
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var templateFn = _.template(pageTemplate);

  var postDiv = document.getElementById("comments");
}
