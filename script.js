var istatus = document.querySelector("h5");
var afbtn = document.querySelector("#af-btn")
afbtn.addEventListener("click", function(){
    istatus.innerHTML = "friends"
    istatus.style.color = "green"
    alert("friend request sent")
});
var rmbtn = document.querySelector("#rm-btn")
rmbtn.addEventListener("click", function(){
istatus.innerHTML = "following"
istatus.style.color = "blue"
});

