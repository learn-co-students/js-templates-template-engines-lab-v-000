function createPost() {
    let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    let postTemplate = _.template(document.getElementById("post-template").innerHTML);
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    let title = document.getElementById("postTitle").value;
    let text = document.getElementById("postText").value;
    let author = document.getElementById("postAuthor").value;

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();


    let postHTML = postTemplate({ 'title': title, 'text': text, 'author': author });
    console.log("postHTML:" + postHTML);
    let commentsHTML = commentsTemplate();
    console.log("commentsHTML" + commentsHTML);

    let postDiv = document.getElementById("post");
    console.log("postDiv" + postDiv);

    postDiv.innerHTML += postHTML;
    postDiv.getElementsByTagName("footer")[0].innerHTML = commentsHTML;
}

function postComment() {
    let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    let commentText = document.getElementById("commentText").value;
    let commenterName = document.getElementById("commenter").value;

    let commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}