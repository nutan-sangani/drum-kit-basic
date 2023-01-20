for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",when_clicked);
}


document.addEventListener("keypress",function(e){
    buttonListener(e.key);
    makeSound(e.key); 
} );


function when_clicked(){
   var kval= this.innerHTML;
   buttonListener(kval);
   makeSound(kval);
}
function makeSound(kval){
    switch(kval)
    {
        case "a":
            var audio =new  Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio =new  Audio("sounds/tom-3.mp3");
             audio.play();
             break;
        case "w":
             var audio =new  Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio =new  Audio("sounds/tom-4.mp3");
             audio.play();
            break;
        case "j":
            var audio =new  Audio("sounds/snare.mp3");
             audio.play();
             break;
        case "l":
             var audio =new  Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
             var audio =new  Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("nope, this wont works")
    }
}
function buttonListener(key1){
    document.querySelector("."+key1).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+key1).classList.remove("pressed");
        },100);
}
