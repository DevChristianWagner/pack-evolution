// Whatsapp Button

let wpBtn = document.querySelector("#wp-btn")

wpBtn.addEventListener("click", () => {
    window.open("https://web.whatsapp.com/")
})

// FAQ
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    })
})