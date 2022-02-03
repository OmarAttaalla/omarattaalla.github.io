//create observer object
const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("SkillAnimationsAnim");
        } else {
            element.target.classList.remove("SkillAnimationsAnim");
        }
    });
});

//observe SkillAnimations element
observer.observe(document.getElementById("SkillAnimations"));

