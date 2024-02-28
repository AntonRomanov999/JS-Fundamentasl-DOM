// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles

function applyStyles() {
    const styledTitle = document.getElementById("title");
    const styledDiv = document.getElementById("myDiv")
    const styledList = document.getElementById("myList");
    const styledBlock = document.querySelector(".style_elements");
    const styledSpan = styledBlock.getElementsByTagName("span")[0];
    styledTitle.style.backgroundColor="lightgreen";
    styledDiv.firstElementChild.style.fontWeight="700";
    styledDiv.children[1].style.color="red";
    styledDiv.children[2].style.textDecoration="underline";
    styledDiv.children[3].style.fontStyle="italic";
    styledList.style.listStyle="none";
    styledList.style.display="flex";
    styledSpan.style.display="none"
}    
    


module.exports = applyStyles;
