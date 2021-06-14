texta=document.getElementById("write");
window.addEventListener("keydown", (t) => {
    console.log("e:"+t);
    const key = document.getElementById(t.key);
    console.log("e keycode:"+e.key);
    switch(key){
        case q:
            texta.value+="슉,";
            break;
      
        case w:
            texta.value+="슈,"; 
            break;
        case e:
            texta.value+="슈슉,";
            break;
        case r:
            texta.value+="슈발럼아,";    
            break;
        default:
            console.log("other value");
            break;
    }
  });