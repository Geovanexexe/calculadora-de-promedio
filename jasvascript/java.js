function procesarDatos(){

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nota5 = parseFloat(document.getElementById("nota5").value);
   
    if (
        nota1 < 1 || nota1 > 10 ||
        nota2 < 1 || nota2 > 10 ||
        nota3 < 1 || nota3 > 10 ||
        nota4 < 1 || nota4 > 10 ||
        nota5 < 1 || nota5 > 10
    ) {
        document.getElementById("resultado").innerHTML = "Todas las notas deben estar entre 1 y 10.";
        return;
    }

    var nota6;

    nota6=(nota1+nota2+nota3+nota4+nota5)/5


   
    if (nota6 >=7 ) {
        document.writeln("El estudiante tiene la nota " +nota6 +( " por lo tanto aprueba año" ));
    }
    else if (nota6 >= 3.5 && nota6 <7){
        document.writeln("El estudiante tiene la nota " +nota6 +( " por lo tanto se queda a suspenso" ));
    }
    else
        document.writeln("El esutdiante tiene la nota de " +nota6+" por lo tanto no aprueba el año")
}
