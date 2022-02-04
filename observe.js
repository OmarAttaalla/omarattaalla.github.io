let observationDict = {
    "SkillAnimations": "SkillAnimationsAnim",
    "FrontTitle": "FrontTitleAnimation",
    "personImage": "personImageAnimation"
}

//create observer object
const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add(observationDict[element.target.id]);
        } else {
            element.target.classList.remove(observationDict[element.target.id]);
        }
    });
});

//observe SkillAnimations element
for (const [key, value] of Object.entries(observationDict)) {
    observer.observe(document.getElementById(key));
}

