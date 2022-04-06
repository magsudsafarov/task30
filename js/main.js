function Mode (){
    let body =document.body;

    if(body.style.backgroundColor === "black"){
        body.style.backgroundColor = "white"
    }
    else{
        body.style.backgroundColor = "black"
    }

}


function age(){
    var ageStr = prompt("Yasinizi daxil edin, min 18 olmalidir");
    var age = parseInt(ageStr);

    if( age>=18){
        alert("Daxil oldunuz");
    }
    else{
        alert("Yasiniz catmir, min 18 olmalidir");
    }
}





