function scrollToTarget(target_element){
    let element = document.getElementById(target_element);
    let headerOffset = 60;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

function Submit() {
    alert("Your message has been sented.")
}