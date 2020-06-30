let nav=document.querySelector("nav");
let html = document.querySelector("html");

html.addEventListener("click", (event) =>{
    let target = event.target;
    if (document.body.clientWidth<800) nav.style.display="none";
    if (!target.matches("#burgermenu")) return;
    else if (target.matches("#burgermenu")){
        nav.style.display = nav.style.display == "none"? "flex":"none";
    };
});