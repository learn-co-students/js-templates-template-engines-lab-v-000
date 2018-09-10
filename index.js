function createPost() {
  event.preventDefault();
  let post = document.getElementById("post_content").value;
  let postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  let templateFn = _.template(postTemplate);
  let postDiv = document.getElementById("posts");

  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ 'post': post });

  //append rather than replace!
  postDiv.innerHTML += templateHTML;
}
