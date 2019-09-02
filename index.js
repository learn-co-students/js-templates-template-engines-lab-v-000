function createPost(){

    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    var title = document.getElementById("postTitle").value;
    var body = document.getElementById("postBody").value;
    var author = document.getElementById("postsAuthor").value;

    document.getElementsByTagName('main')[0].innerHTML += pageTemplate()
    var blogPostHTML = postTemplate({ 'title': title, 'body': body, 'author': author });

    document.getElementById('post').innerHTML = blogPostHTML
    document.getElementsByTagName('footer')[0].innerHTML = commentsTemplate()
    // var postAuthorDiv = document.getElementById("post");
    //
    // postAuthorDiv.innerHTML += templateHTML;

}


function postComment() {

    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    var comment = document.getElementById("statement").value
    var author = document.getElementById("author").value

debugger
    document.getElementById('comments').innerHTML += commentTemplate({'commentAuthor': author, 'comment': comment})

}
