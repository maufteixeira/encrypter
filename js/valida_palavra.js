function verificar(){

    var texto = document.getElementById("input").value;

    for (letra of texto){
        if (!isNaN(texto)){
            alert("Não digite números");
            document.getElementById("input").value="";
            return;
        };

        letraspermitidas="abcdefghijklmnopqrstuvxwyz"

        var ok=false;
        for (letra2 of letraspermitidas ){
            if (letra==letra2){
                ok=true;
            };
         };

         if (!ok){
            alert("Não digite caracteres especiais");
            document.getElementById("input").value="";
            return;
        };
    };
};