nom de var questions = [
    { id: "answer1", question: "Quel était le nom de l'hôtel ?", answer: "sub" },
    { id: "answer2", question: "Quelle est l'heure la plus importante de votre vie ?", answer: "14h14" },
    { id: "answer3", question: "Où étiez-vous assis ?", answer: "marches" },
    { id: "answer4", question: "Quel est le jour où il vous a parlé ?", answer: "26" },
    { id: "answer5", question: "Pour Johnny Cash, June Carter était son ?", answer: "unique" },
    { id: "answer6", question: "Quel accessoire vous faut-il pour bien faire l'amour ?", answer: "couette" }
];

var currentQuestionIndex = 0;

function displayQuestion() {
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";

    var currentQuestion = questions[currentQuestionIndex];
    var label = document.createElement("label");
    label.setAttribute("for", currentQuestion.id);
    label.textContent = currentQuestion.question;

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", currentQuestion.id);
    input.setAttribute("name", currentQuestion.id);
    input.setAttribute("required", true);

    questionContainer.appendChild(label);
    questionContainer.appendChild(input);

    document.getElementById("questionTitle").textContent = "Répondez à la question suivante";
}

function validateAnswer() {
    var userAnswer = document.getElementById(questions[currentQuestionIndex].id).value.toLowerCase();
    var correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            return false; // Empêche la soumission du formulaire pour passer à la question suivante
        } else {
            alert("Toutes les réponses sont correctes. Redirection vers main.html.");
            window.location.href = "main.html";
            return true;
        }
    } else {
        alert("La réponse est incorrecte. Essayez à nouveau.");
        return false;
    }
}

// Afficher la première question au chargement de la page
displayQuestion();
