// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

const list = document.getElementById("list");
const firstEl = list.firstElementChild.innerHTML;
const lastEl = list.lastElementChild.innerHTML;
const secondtEl = list.children[1].innerHTML;
const fourthEl = list.children[3].innerHTML;
const thirdtEl = list.children[2].innerHTML;

module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
