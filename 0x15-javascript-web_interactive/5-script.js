const addItem = document.querySelector('#add_item');
addItem.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Item';
  document.querySelector('ul.my_list').appendChild(li);
});
