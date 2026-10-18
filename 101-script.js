document.addEventListener('DOMContentLoaded', () => {
  const items = ['Item'];
  const list = document.querySelector('ul.my_list');
  const addItemBtn = document.querySelector('#add_item');
  const removeItemBtn = document.querySelector('#remove_item');
  const clearListBtn = document.querySelector('#clear_list');

  function render () {
    list.innerHTML = '';
    items.forEach((itemText) => {
      const li = document.createElement('li');
      li.textContent = itemText;
      list.appendChild(li);
    });
  }

  addItemBtn.addEventListener('click', () => {
    items.push('Item');
    render();
  });

  removeItemBtn.addEventListener('click', () => {
    if (items.length > 0) {
      items.pop();
      render();
    }
  });

  clearListBtn.addEventListener('click', () => {
    items.length = 0;
    render();
  });
});
