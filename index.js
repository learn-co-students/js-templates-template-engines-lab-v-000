// Create a template with an id of page-template that will represent the page of a blog post, including a sidebar element and a post element that will hold our blog post.
// Create a post-template that will represent the blog post itself. It should have a header for the post title and a footer for the post author, and be wrapped in an article element.
// Create a comments-template that will be the container for the collection of comments on the blog post, as well as the comment form.
// Create a comment-template that will hold an individual comment. Should have a footer for the commenter name.
// Provide a form with an id of post-form to create a blog post with a title, body, and author. Submitting the form should build the page template with the post inside. Make the form submit using a createPost() function.
// Provide a form within the comments-template to post comments, including commenter name and comment text. These should use the template to insert individual comments into the comments section. You should be able to keep adding more comments. Make the form submit use a postComment() function.

function createPost() {
    const postTitle = document.getElementById("postTitle").value;
    const postBody = document.getElementById("postBody").value;
    const postPoster = document.getElementById("postAuthor").value;

    const postTemplate = _.template(document.getElementById("post-template").innerHTML);

    const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    const pageTemplate = _.template(document.getElementById("page-template").innerHTML);

    //After <form> in main, add ```<div id="sidebar"></div><div id="post"></div>```
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    const blogSection = postTemplate({"title": postTitle, "body": postBody, "poster": postPoster});

    const commentsSection = commentsTemplate();

    const postElement = document.getElementById("post");

    postElement.innerHTML = blogSection;
    document.getElementById("comment-form").innerHTML = commentsSection;
}

function postComment() {
    const commenter = document.getElementById("commenter").value;
    const commentText = document.getElementById("commentText").value;

    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    const commentSection = commentTemplate({"comment": commentText, "commenter": commenter});

    document.getElementById("comments").innerHTML += commentSection;
}