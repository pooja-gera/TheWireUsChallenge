function caesarCipher(message, key) {
    if (key < 0)
        return caesarCipher(message, key + 26);

    // to store the decrypted message
    var output = "";

    // to loop through each character
    for (var i = 0; i < message.length; i++){
        // get the current character
        var c = message[i];
        // get the ascii code of the character
        var ascii = message.charCodeAt(i);
        
        // if it is in uppercase
        if (ascii >= 65 && ascii <= 90)
            c = String.fromCharCode(((ascii - 65 + key) % 26) + 65);
        
        // if it is in lowercase
        else if (ascii >= 97 && ascii <= 122)
            c = String.fromCharCode(((ascii - 97 + key) % 26) + 97);

        output += c;
    }
    return output;
}

var message = "I love JavaScript";
var key = 100;
console.log("Before encryption: " + message);

encrypted = caesarCipher(message, key);
console.log("\nAfter encryption: " + encrypted);