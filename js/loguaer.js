function loguear() {
    

    let user = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;



    if (user == "caleb"  &&  contraseña=="12" ) {
        window.location.assign("../html/Principal.html");
        alert("bien");
    }
    else{
        alert("Datos Incorrecto");
    }
    
}
function mensaje(){

    alert("alksdjfasdf");

}
