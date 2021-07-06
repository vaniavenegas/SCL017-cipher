//Declaro variable texto de usuario para llamar texto 
let message = document.getElementById("user_text");
//Llamo botón de la clave
let offset = document.getElementById("offset");
//Llamo botón "cifra"
const buttonEncode = document.getElementById("encode_button");
//Llamo botón "descifra"
const buttonDecode = document.getElementById("decode_button");
//Llamo caja respuesta
var answer = document.getElementById("answer");

//Evento Encode
buttonEncode.addEventListener("click",() => {
        answer.innerHTML = cipher.createCipherWithOffset(parseInt(offset.value)).encode(message.value);
})
//Evento Decode
buttonDecode.addEventListener("click",() => {
        answer.innerHTML = cipher.createCipherWithOffset(parseInt(offset.value)).decode(message.value);
})