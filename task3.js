
// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()

function applyStyles() {
    const newMain = document.createElement("main");
    const newDiv = document.createElement("div");
    const newPar = document.createElement("p");
    newMain.className = "mainClass check item";
    newDiv.id = "myDiv";
    newPar.innerHTML = "First paragraph";
    const plcInsert = document.querySelector(".create_elements")
    newDiv.append(newPar);
    newMain.append(newDiv);
    plcInsert.append(newMain);
}




module.exports = applyStyles;
