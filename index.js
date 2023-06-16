

var bt=document.querySelectorAll(".drum").length;
for (let index = 0; index < bt; index++) {
    
    document.querySelectorAll(".drum")[index].addEventListener("click",function() {
    var ip=this.innerHTML;
        switch(ip){
            case "w":
                handleFunc("tom-1");
                break;
            case "a":
                handleFunc("tom-2");
            break;
    
            case "s":
               handleFunc("tom-3");
            break;
            case "d":
                handleFunc("tom-4");
            break;
                            
            case "j":
                handleFunc("crash");
            break;
            case "k":
                handleFunc("Kick-bass");
            break;
                        
            case "l":
                handleFunc("snare");
            break;
    
        }
    });
   
}









function handleFunc(tom){
   new Audio("./sounds/"+tom+".mp3").play();
}