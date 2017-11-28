
function loadPageTemplate(){
    const pageTemplate = document.getElementById("page-template").innerHTML
    const templateFn = _.template(pageTemplate)
    const main = document.getElementById("main")
    const templateHTML = templateFn()
    main.innerHTML += templateHTML
    loadCommentsTemplate()
}

function loadPostTemplate(){
    const postTemplate = document.getElementById("post-template").innerHTML
    const templateFn = _.template(postTemplate)
    const main = document.getElementById("post")
    const templateHTML = templateFn()
    main.innerHTML += templateHTML
}

function loadCommentsTemplate(){
    const commentsTemplate = document.getElementById("comments-template").innerHTML
    const templateFn = _.template(commentsTemplate)
    const main = document.getElementById("comments-box")
    const templateHTML = templateFn()
    main.innerHTML += templateHTML
}

function postComment(){
    let commenter = document.getElementById("commenterName").value
    let comment = document.getElementById("commentText").value

    let commentTemplate = document.getElementById("comment-template").innerHTML

    const templateFn = _.template(commentTemplate)

    let commentsDiv = document.getElementById("comments")
    let templateHTML = templateFn({"comment": comment, "commenter": commenter})
    commentsDiv.innerHTML += templateHTML
}

function createPost(){
    const author = document.getElementById("postAuthor").value
    const title = document.getElementById("postTitle").value
    const content = document.getElementById("postContent").value

    let postTemplate = document.getElementById("post-template").innerHTML

    const templateFn = _.template(postTemplate)
 
    let postDiv = document.getElementById("post")
    debugger
    let templateHTML = templateFn({"author":author, "content":content, "title":title})
    postDiv.innerHTML += templateHTML
}