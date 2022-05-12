let inp=document.querySelector("input");
inp.addEventListener("keyup",function(){
   for (let i = 0; i < this.value.length; i++) {
      
    if(!isNaN(this.value[i])){
        inp.value=this.value.slice(0,-1);

    }
   }


    
})