 

 const card  = document.querySelector(".card");
 const container = document.querySelector(".container");

// O movimento começa aqui

container.addEventListener("mousemove",(e)=>{

    console.log("Hey");
    let xAxis = (window.innerWidth/2 -e.pageX)/20;
    let yAxis =( window.innerHeight/2 -e.pageY)/20;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Mouse enter

container.addEventListener("mouseenter", (e)=>{
        card.style.transform = "none"
});

// Movimento de Leave

container.addEventListener("mouseleave",(e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

});