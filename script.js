
//nav anchors
let homeAnchor=document.getElementById("homeAnchor")
let aboutCoronaAnchor=document.getElementById("aboutCoronaAnchor");
let symptomsAnchor=document.getElementById("symptomsAnchor");
let preventionAnchor=document.getElementById("preventionAnchor");
let treatmentAnchor=document.getElementById("treatmentAnchor");
let faqAnchor=document.getElementById("faqAnchor");
let newsAnchor=document.getElementById("newsAnchor");
let doAndDonotAnchor=document.getElementById("doAndDonotAnchor");

//sections
let homeSection=document.getElementById("homeSection");
let aboutTheDisease=document.getElementById("aboutTheDisease");
let transmission=document.getElementById("transmission");
let steps=document.getElementById("steps");
let symptomsOfCorona=document.getElementById("symptomsOfCorona");
let prevention=document.getElementById("prevention");
let treatment=document.getElementById("treatment");
let doAnddonot=document.getElementById("doAnddonot");
let faqSection=document.getElementById("faq");
let latestUpdate=document.getElementById("latestUpdate");
let footer=document.getElementById("footer");

//FAQ Bottoms
let firstQ=document.getElementById("firstQ");
let secondQ=document.getElementById("secondQ");
let thirdQ=document.getElementById("thirdQ");
let forthQ=document.getElementById("forthQ");
let fifthQ=document.getElementById("fifthQ");
let sixthQ=document.getElementById("sixthQ");

//FAQ according
let firstAnswer=document.getElementById("firstAnswer");
let secondAnswer=document.getElementById("secondAnswer");
let thirdAnswer=document.getElementById("thirdAnswer");
let forthAnswer=document.getElementById("forthAnswer");
let fifthAnswer=document.getElementById("fifthAnswer");
let sixthAnswer=document.getElementById("sixthAnswer");


firstQ.addEventListener("click",function(){
    firstAnswer.classList.remove("d-none")

    secondAnswer.classList.add("d-none")
    thirdAnswer.classList.add("d-none")
    forthAnswer.classList.add("d-none")
    fifthAnswer.classList.add("d-none")
    sixthAnswer.classList.add("d-none")

})

secondQ.addEventListener("click",function(){
    secondAnswer.classList.remove("d-none")

    firstAnswer.classList.add("d-none")
    thirdAnswer.classList.add("d-none")
    forthAnswer.classList.add("d-none")
    fifthAnswer.classList.add("d-none")
    sixthAnswer.classList.add("d-none")

})
thirdQ.addEventListener("click",function(){
    thirdAnswer.classList.remove("d-none")

    firstAnswer.classList.add("d-none")
    secondAnswer.classList.add("d-none")
    forthAnswer.classList.add("d-none")
    fifthAnswer.classList.add("d-none")
    sixthAnswer.classList.add("d-none")

})

forthQ.addEventListener("click",function(){
    forthAnswer.classList.remove("d-none")

    firstAnswer.classList.add("d-none")
    secondAnswer.classList.add("d-none")
    thirdAnswer.classList.add("d-none")
    fifthAnswer.classList.add("d-none")
    sixthAnswer.classList.add("d-none")

})

fifthQ.addEventListener("click",function(){
    fifthAnswer.classList.remove("d-none")

    firstAnswer.classList.add("d-none")
    secondAnswer.classList.add("d-none")
    thirdAnswer.classList.add("d-none")
    forthAnswer.classList.add("d-none")
    sixthAnswer.classList.add("d-none")

})


sixthQ.addEventListener("click",function(){
    sixthAnswer.classList.remove("d-none")

    firstAnswer.classList.add("d-none")
    secondAnswer.classList.add("d-none")
    thirdAnswer.classList.add("d-none")
    forthAnswer.classList.add("d-none")
    fifthAnswer.classList.add("d-none")

})












let scrollTop=document.querySelector(".scrollUpDiv"); 
window.onscroll=function(){
    
    if(this.scrollY>=700){
        scrollTop.classList.add("show")
    }else{
        scrollTop.classList.remove("show")
    }


    if(window.scrollY>=homeSection.offsetTop&&window.scrollY<aboutTheDisease.offsetTop){
        homeAnchor.classList.add("navAnchorColor")
    }else{
        homeAnchor.classList.remove("navAnchorColor")
    }

if(window.scrollY>=aboutTheDisease.offsetTop&&window.scrollY<transmission.offsetTop){
    aboutCoronaAnchor.classList.add("navAnchorColor")
}else{
    aboutCoronaAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=symptomsOfCorona.offsetTop&&window.scrollY<prevention.offsetTop){
    symptomsAnchor.classList.add("navAnchorColor")
}else{
    symptomsAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=prevention.offsetTop&&window.scrollY<steps.offsetTop){
    preventionAnchor.classList.add("navAnchorColor")
}else{
    preventionAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=treatment.offsetTop&&window.scrollY<doAnddonot.offsetTop){
    treatmentAnchor.classList.add("navAnchorColor")
}else{
    treatmentAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=faqSection.offsetTop&&window.scrollY<latestUpdate.offsetTop){
    faqAnchor.classList.add("navAnchorColor")
}else{
    faqAnchor.classList.remove("navAnchorColor")
}

if(window.scrollY>=latestUpdate.offsetTop&&window.scrollY<footer.offsetTop){
    
    newsAnchor.classList.add("navAnchorColor")
}else{
    newsAnchor.classList.remove("navAnchorColor")
}


};

scrollTop.addEventListener("click",function(){
   window.scrollTo({
    top:0,
    behavior:"smooth"
   })
});






