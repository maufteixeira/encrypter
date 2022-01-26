function addEncrypt() {  
    
    for (i = 0; i < texto.length; i++) {
        letras[i] = texto[i];

        campo.value="";

        let letraA = "ai";
        let letraE = "enter";
        let letraI = "imes";
        let letraO = "ober";
        let letraU = "ufat";

        console.log(letras);
        
        if(letras[i] == "a") {
            letras.splice([i], 1, letraA);
        };
        if(letras[i] == "e") {
            letras.splice([i], 1, letraE);
        };
        if(letras[i] == "i") {
            letras.splice([i], 1, letraI);
        };
        if(letras[i] == "o") {
            letras.splice([i], 1, letraO);
        };
        if(letras[i] == "u") {
            letras.splice([i], 1, letraU);
        };

        palavraNova = palavraNova + letras[i];
        console.log(palavraNova);
        console.log(letras);
        result.value = `O resultado é:   ${palavraNova}`;
    };
    return letras; 
    return palavraNova; 
    palavraNova="";
};
