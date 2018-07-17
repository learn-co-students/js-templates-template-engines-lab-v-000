function createPost(){
    //start by creating template functions
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML)
    var postTemplate = _.template(document.getElementById("post-template").innerHTML)
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

    // get blog values
    var postTitle = document.getElementById("postTitle").value;
    var postAuthor= document.getElementById("postAuthor").value;
    var postBody= document.getElementById("postBody").value;

    document.getElementByTagName("main")[0].innerHTML += pageTemplate()

    var blogSection= postTemplate({'title': postTitle, 'body': post, 'poster': postAuthor})
    var commentSection = commentsTemplate()
    var postElement = document.getElementById("post")

    postElement.innerHTML = blogSection;
    postElement.getElementByTagName("footer")[0].innerHTML = commentSection
}
