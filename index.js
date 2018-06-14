function createPost(){
    var blogTitle = document.getElementById("blogTitle")
    const bloggerName = document.getElementById("bloggerName")
    const blogPost = document.getElementById("blogPost")

    const pageTemplate = _.template(document.getElementById("page-template").innerHTML)
    const postTemplate = _.template(document.getElementById("post-template").innerHTML)
    const commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

    const blog = postTemplate({ "title": blogTitle, "author": bloggerName, "body": blogPost })
    const comments = commentsTemplate()
    const blogContent = document.getElementById('post')
    
    blogContent.innerHTML = blog
    blogContent.getElementsByTagName("footer")[0].innerHTML = comments
};

function postComment(){
    const commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

    const commentText = document.getElementById("commentText").value 
    const commenterName = document.getElementById("commenterName").value

    const commentsSection = document.getElementById("comments")
    commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText })
}