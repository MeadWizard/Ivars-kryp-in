
const posts = document.querySelectorAll(".posts div");

function initializePosts(){
    newestClicked();
}

function newestClicked(){
    print("newest clicked")
    posts.sort(orderByNewest());
}

function oldestClicked(){
    print("oldest clicked")
    posts.sort(orderByOldest());
}

function orderByNewest(a, b){
    return (a.getId()-b.getId());
}

function orderByOldest(a, b){
    return (b.getId()-a.getId());
}


