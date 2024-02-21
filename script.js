function validatePassword() {
    var password = document.getElementById("password").value;
    var hashedPassword = stringToHex(password);

    // Utilisez hashedPassword dans la requête ou le stockage côté serveur
    console.log("Mot de passe en hexadécimal : " + hashedPassword);

    // Remplacez "737562" par la représentation hexadécimale correcte de votre mot de passe
    if (hashedPassword === "737562") {
        return true; // Mot de passe correct, permet de soumettre le formulaire
    } else {
        alert("Mot de passe incorrect");
        return false; // Empêche le formulaire d'être soumis
    }
}

function stringToHex(str) {
    var hex = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i).toString(16);
        hex += (charCode.length === 1 ? '0' : '') + charCode;
    }
    return hex;
}
