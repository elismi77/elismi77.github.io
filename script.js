var correctAnswers = {
    answer1: "sub",
    answer2: "14h14",
    answer3: "marches",
    answer4: "26",
    answer5: "unique",
    answer6: "couette"
};

function validateAnswers() {
    var userAnswers = {
        answer1: document.getElementById("answer1").value.toLowerCase(),
        answer2: document.getElementById("answer2").value.toLowerCase(),
        answer3: document.getElementById("answer3").value.toLowerCase(),
        answer4: document.getElementById("answer4").value.toLowerCase(),
        answer5: document.getElementById("answer5").value.toLowerCase(),
        answer6: document.getElementById("answer6").value.toLowerCase()
    };

    if (checkAnswers(userAnswers)) {
        alert("Réponses correctes. Redirection vers main.html.");
        window.location.href = "main.html";
        return true;
    } else {
        alert("Au moins une des réponses est incorrecte.");
        return false;
    }
}

function checkAnswers(userAnswers) {
    for (var key in userAnswers) {
        if (userAnswers[key] !== correctAnswers[key]) {
            return false;
        }
    }
    return true;
}
