function createPost() {
    // Create templates
    var postTemplate = _.template(document.getElementById("post-template").innerHTML);
    var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
    var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    // Get values from postForm
    var title = document.getElementById('postTitle').value;
    var body = document.getElementById('postBody').value;
    var author = document.getElementById('postAuthor').value;

    // execute pageTemplate--does not have any values?
    document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

    // execute postTempate, passing in JSON object for values
    var postSection = postTemplate({ 'title': title, 'body': body, 'author': author });

    // execute commentsTemplate
    var commentsSection = commentsTemplate();

    // get element to append to or replace:
    var postElement = document.getElementById("post");
    // This will put the post in the "post" section of the pageTemplate
    postElement.innerHTML = postSection;
    // The footer now has an id of post b/c we appended it to that div. 
    // Now we can add the commentsSection in the footer.
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
    
}

function postComment() {
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    var comment = document.getElementById('commentText').value;
    var commenter = document.getElementById('commenterName').value;

    var commentsSection = document.getElementById("comments");
    commentsSection.innerHTML += commentTemplate({ 'commenter' : commenter, 'comment' : comment});
}