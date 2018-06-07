
function createPost(){
    var template = _.template(document.getElementById("page-template").innerHTML);
    var post = _.template(document.getElementById("post-template").innerHTML);
};

function postComment(){
    var post = _.template(document.getElementById("comment-template").innerHTML);
};