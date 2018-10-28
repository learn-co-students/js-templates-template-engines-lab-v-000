function createPost(){
    //create template functions
        //let pageTemplate = document.getElementById("page-template").innerHTML;
        //let tempFn = _.template(pageTemplate); //embedding pageTemplate context(HTML string)
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
    
    // get blog values
    var postTitle = document.getElementById("title").value;
    var postContent = document.getElementById("post").value;
    var postAuthor = document.getElementById("author").value;
    var blogSection = postTemplate({post: postTitle, content: postContent, author: postAuthor});
    
    var commentsSection = commentsTemplate();
    var postElement = document.getElementById("post");
    
    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection; //append rather than replace!
}

function postComment(){
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    var commentText = document.getElementById("commentText").value;
    var commenterName = document.getElementById("commenter").value;

    var commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}