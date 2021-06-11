function viewPhoto(photo){
    photo = document.getElementById(photo);
    photo.setAttribute("style", `opacity: 70%; top: ${Math.random()*200}px; left: ${Math.random()*800}px;`);

}

function removePhoto(photo){
    document.getElementById(photo).style.opacity = "0%";
}


let x = document.getElementById("x");
x.addEventListener("mouseover",function(){viewPhoto("zanepx")});
let zanepx = document.getElementById("zanepx");
zanepx.addEventListener("mouseover",function(){removePhoto("zanepx")});

let place = document.getElementById("place");
place.addEventListener("mouseover",function(){viewPhoto("tonasketpx")});
let tonasket = document.getElementById("tonasketpx");
tonasketpx.addEventListener("mouseover",function(){removePhoto("tonasketpx")});

let cleo = document.getElementById("cleo");
cleo.addEventListener("mouseover",function(){viewPhoto("cleopx")});
let cleopx = document.getElementById("cleopx");
cleopx.addEventListener("mouseover",function(){removePhoto("cleopx")});



