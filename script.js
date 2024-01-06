
let navBar = document.querySelector(".navigation-wrap");
window.onscroll = ()=> {
    if (document.documentElement.scrollTop > 25) {
        navBar.classList.add("scrolled-on");
    } else {
        navBar.classList.remove("scrolled-on");
    }
}


// let nav = document.querySelector(".navbar");

// window.onscroll = () =>{
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scrolled-on");
//     }else{
//         nav.classList.remove("scrolled-on");
//     }
// }
