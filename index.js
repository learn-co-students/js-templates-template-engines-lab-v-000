function createPost() {
  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;
  const author = document.getElementById("post-author").value;

  // console.log(title)
  // console.log(body)
  // console.log(author)

  const postTemplate = document.getElementById("post-template").innerHTML;

  const templateFn = _.template(postTemplate);

  const postDiv = document.getElementById("post");

  const templateHTML = templateFn({'title': title, 'body': body, 'author': author});

  return templateHTML.innerHTML;
  //console.log("hello");
}

function createPage() {
  const pageTemplate = document.getElementById("page-template").innerHTML;

  const templateFn = _.template(pageTemplate);

  const body = document.body;

  const templateHTML = templateFn({'post': createPost()});

  body.innerHTML+= templateHTML;
}
