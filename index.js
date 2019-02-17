function createPost() {
    let title = document.getElementById("postTitle").value;
    let postBody = document.getElementById("postBody").value;
    let author = document.getElementById("postAuthor").value;

    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    let postTemplate = _.template(document.getElementById("post-template").innerHTML);

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();


    let postDiv = document.getElementById("post");

    let templateHTML = postTemplate({ title: title, postBody: postBody, author: author });

    postDiv.innerHTML += templateHTML;
}