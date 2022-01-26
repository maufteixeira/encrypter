function deEncrypt() {  
    
    for (i = 0; i < texto.length; i++) {

        if(letras[i] == "ai") {
            letras.splice([i], 1, "a");
        };
        if(letras[i] == "enter") {
            letras.splice([i], 1, "e");
        };
        if(letras[i] == "imes") {
            letras.splice([i], 1, "i");
        };
        if(letras[i] == "ober") {
            letras.splice([i], 1, "o");
        };
        if(letras[i] == "ufat") {
            letras.splice([i], 1, "u");
        };

        palavraOriginal = palavraOriginal + letras[i];
        console.log(palavraOriginal);
        console.log(letras);
        result.value = `O resultado é:   ${palavraOriginal}`;
    };
    return letras; 
    return palavraOriginal; 
    palavraOriginal="";
};