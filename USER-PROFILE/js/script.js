const btn = document.querySelector(".btn");
const follow = document.querySelector("#follow");


btn.addEventListener("click", ()=>{

    let followNum = parseInt(follow.innerHTML);
    follow.innerHTML = followNum + 1;
})