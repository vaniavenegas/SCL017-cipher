cipher = {
  encode: (offset, message) => {//Función encode
    //Declaro variable vacía 
    var finalText = '';
    //Defino ciclo FOR: inicialización; Condición; expresión final
    for (var i = 0; i < message.length; i++) {
      //Extraigo el código ascii entrante
      var firstAscii = message.charCodeAt(i);
      //FORMULA DE LABORATORIA Posiciones de las letras: La A está en 65 y la z en 90. 
      //Mayúsculas- Nuevo Ascii.
      if (firstAscii >= 65 && firstAscii <= 90) {
        //aplicamos formula laboratoria, resiudo de 26 
        var newAsccii = (firstAscii - 65 + offset) % 26 + 65;
        //Convertir a letras desde código ascii
        finalText += String.fromCharCode(newAsccii);
      }
      //Minúsculas a en 97 z en 122
      else if (firstAscii >= 97 && firstAscii <= 122) {
        var newAsccii = (firstAscii - 97 + offset) % 26 + 97;
        finalText += String.fromCharCode(newAsccii);
      }

      //Espacio está en posición 32 ascii
      else if (firstAscii === 32) {
        finalText += " ";
      }
      //Condición para no convertir letras que no cumplen con las condiciones anteriores
      else {
        finalText += String.fromCharCode(firstAscii);
      }
    }
    //Retorna variable 
    return finalText;
  },

  decode: (offset, message) => {//Función decode
    var finalText = '';
    for (var i = 0; i < message.length; i++) {
      var firstAscii = message.charCodeAt(i);
      //Mayúsculas
      if (firstAscii >= 65 && firstAscii <= 90) {
        //Para DECODE uso el código ascci de la última letra del alfabeto
        var newAsccii = (firstAscii - 90 - offset) % 26 + 90;
        finalText += String.fromCharCode(newAsccii);
      }
      //Minúsculas
      else if (firstAscii >= 97 && firstAscii <= 122) {
        var newAsccii = (firstAscii - 122 - offset) % 26 + 122;
        finalText += String.fromCharCode(newAsccii);
      }
      //Espacio
      //El módulo(%) es 1 porque solo hay un espacio
      else if (firstAscii === 32) {
        var newAsccii = (firstAscii - 32 - offset) % 1 + 32;
        finalText += String.fromCharCode(newAsccii);
      }
      else
        finalText += String.fromCharCode(firstAscii);
    }
    return finalText;
  },

  //Nueva función 
  createCipherWithOffset: (offset) => {
    //Retorna encode y decode del object Cipher 
    return {
      //Llama encode
      encode: (string) => {
        return cipher.encode(offset, string);
      },
      //Llama decode
      decode: (string) => {
        return cipher.decode(offset, string);
      }
    }
  }
}