function claculate(){
   
    let a=parseInt(document.getElementById("computer").value);    
    let b=parseInt(document.getElementById("english").value);    
    let c=parseInt(document.getElementById("physic").value);    
    let d=parseInt(document.getElementById("chemistry").value);    
    let e=parseInt(document.getElementById("maths").value);    
    
    if (a>100 || b>100 || c>100 || d>100 || e>100) {
        alert("please enter a correct value");
    }else{
       let obtain=a+b+c+d+e;
        document.getElementById("obtaine").innerText=+obtain;
       
        let per=obtain*100/500;
        document.getElementById("per").innerText=per;
       
    // dd
    if (obtain>=80) {
        document.getElementById("grade").textContent="A"
    } 
    else if (obtain >=70) {
        document.getElementById("grade").textContent="B"
        
    }
    else if (obtain >=60) {
        document.getElementById("grade").textContent="C"
        
    }
    
    else if (obtain >=50) {
        document.getElementById("grade").textContent="D"
        
    }
    else if (obtain >=40) {
        document.getElementById("grade").textContent="E"
        
    }
    else{
        document.getElementById("grade").textContent="f"
      
    }
    // dd
    
    
    
    
        if (a>40 && b>40 && c>40 && d>40 && e>40) {
            document.getElementById("remarks").innerHTML="<span style='color:green'>PASS</spen>"
        }else{
            document.getElementById("remarks").innerHTML="<span style='color:red'>FAIL</spen>"
           
        }
       }
    
    
    
    
    
    
    
    
    
       }
    
    
    
    
    
    