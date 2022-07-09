// get toggle button
const toggle = document.querySelector('.toggle');
// get menu box
const menu = document.querySelector('.menu');
// get all menu item button
const items = document.querySelectorAll('.menu button');
// get all forms;
const forms = document.querySelectorAll('.center');
// set click listener to toggle button
toggle.addEventListener('click', handleToggle);

function handleToggle() {
  menu.classList.toggle('hideMenu');
}
// add listener to all menu items
items.forEach((item) => {
  item.addEventListener('click', handleItemClick);
});
function handleItemClick(e) {
  let current = e.target.getAttribute('data-title');
  items.forEach((item, index) => {
    item.classList.remove('active');
    forms[index].classList.remove('current');
  });
  //   add active item
  e.target.classList.add('active');
  //   hide the menu
  menu.classList.remove('hideMenu');
  // set current tab
  document.getElementById(current).classList.add('current');
}
