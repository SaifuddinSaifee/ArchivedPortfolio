const quizData = [
    {
        question: "Q.1 Who wrote Lord of The Rings?",
        a: "JR Tolkien",
        b: "JJ Thomson",
        c: "George RR Martin",
        d: "Sherlock Holmes",
        correct: c,
    },
    {
        question: "Q.2 Who invented the first Airplane?",
        a: "Thomas Edison",
        b: "Wrong Brothers",
        c: "Neil Degrasse Tyson",
        d: "Wright Brothers",
        correct: d,
    },
    {
        question: "Q.3 Who invented the first Bulb?",
        a: "Thomas Edison",
        b: "Marco Polo",
        c: "The Rock",
        d: "Anakin",
        correct: a,
    },
    {
        question: "Q.4 Tallest Statue in the world",
        a: "Jesus Christ (Brasil)",
        b: "Statue of Unity (Gujrat)",
        c: "Statue of Liberty (USA)",
        d: "Galactus (MCU)",
        correct: b,
    },
    {
        question: "Q.5 Who is the father of Computer",
        a: "Charles Babbage",
        b: "Dennis Ritchie",
        c: "Thor Odinson",
        d: "Stephen Hawking",
        correct: b,
    },
];

const question = document.getElementById("question");
const option_a = document.getElementById("option_a");
const option_b = document.getElementById("option_b");
const option_c = document.getElementById("option_c");
const option_d = document.getElementById("option_d");

const submitBtn = document.getElementById('submitBtn');

let question_number = 0;

loadQuiz();

function loadQuiz() {
    const currentQuiz = quizData [question_number];
    
    question.innerText = currentQuiz.question;
    option_a.innerText = currentQuiz.a;
    option_b.innerText = currentQuiz.b;
    option_c.innerText = currentQuiz.c;
    option_d.innerText = currentQuiz.d;
    console.log("Hello");
}

function getSelected() {
    const answerEl = document.querySelectorAll(".answer");

    answerEl.forEach((answerEl) => {
        console.log(answerEl.value);
    })
}

submitBtn.addEventListener('click', () => {
    question_number++;
    getSelected()

    // if (question_number < quizData.length) {
    //     loadQuiz();
    // } else {
    //     alert("You have complete the quiz!")
    // }

    // loadQuiz();
})