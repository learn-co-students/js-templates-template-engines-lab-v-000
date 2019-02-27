function createPost() {
    let pageTemplate = _.template(document.getElementById("page-template").innerHTML)
    let postTemplate = _.template(document.getElementById("post-template").innerHTML)
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML)

    let postTitle = document.getElementById("postTitle").value
    let postAuthor = document.getElementById("postAuthor").value
    let postBody = document.getElementById("postBody").value

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

    
    let templateHTML = postTemplate({ postTitle: postTitle, postBody: postBody, postAuthor: postAuthor})

    let postDiv = document.getElementById("post")
    postDiv.innerHTML = templateHTML
    postDiv.getElementsByTagName("comment")[0].innerHTML = commentsTemplate();
    

}

function postComment() {
    let commentTemplate = (document.getElementById("comment-template").innerHTML)
    
    let templateFn = _.template(commentTemplate)

    let commenterName = document.getElementById("commenterName").value
    let comment = document.getElementById("commentText").value 

    let commentsDiv = document.getElementById("comments")

    let templateHTML = templateFn({ commentAuthor: commenterName, comment: comment})

    commentsDiv.innerHTML = templateHTML

}