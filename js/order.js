const faqQuestion1 = document.querySelector("#order-faq-question-1");
const faqAnswer1 = document.querySelector("#order-faq-answer-1");

const faqQuestion2 = document.querySelector("#order-faq-question-2");
const faqAnswer2 = document.querySelector("#order-faq-answer-2");


faqQuestion1.addEventListener("click", function () {

    // Close FAQ 2
    faqAnswer2.style.display = "none";
    faqQuestion2.classList.remove("active");

    // Toggle FAQ 1
    if (faqAnswer1.style.display === "block") {
        faqAnswer1.style.display = "none";
        faqQuestion1.classList.remove("active");
    } else {
        faqAnswer1.style.display = "block";
        faqQuestion1.classList.add("active");
    }

});


faqQuestion2.addEventListener("click", function () {

    // Close FAQ 1
    faqAnswer1.style.display = "none";
    faqQuestion1.classList.remove("active");

    // Toggle FAQ 2
    if (faqAnswer2.style.display === "block") {
        faqAnswer2.style.display = "none";
        faqQuestion2.classList.remove("active");
    } else {
        faqAnswer2.style.display = "block";
        faqQuestion2.classList.add("active");
    }

});


    const faqQuestions = document.querySelectorAll(".payment-faq-question");

    faqQuestions.forEach(function(question) {

        question.addEventListener("click", function() {

            const currentItem = question.parentElement;
            const isOpen = currentItem.classList.contains("active");

            // Sab close
            faqQuestions.forEach(function(otherQuestion) {
                otherQuestion.parentElement.classList.remove("active");
            });

            // Agar pehle closed tha to open karo
            if (!isOpen) {
                currentItem.classList.add("active");
            }

        });

    });