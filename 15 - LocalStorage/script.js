var addItems = document.querySelector('.add-items'),
  checkAll = document.querySelector('.check'),
  uncheckAll = document.querySelector('.uncheck'),
  deleteAll = document.querySelector('.delete'),
  itemsList = document.querySelector('.plates'),
  items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector('[name=item]').value,
    item = {
      text,
      done: false
    };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));

  this.reset();
}

function populateList(plates = [], platesList) {
  if (plates.length == 0) document.querySelector('.footer').classList.add('hide');
  else if (plates.length >= 2) document.querySelector('.footer').classList.remove('hide');

  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  const el = e.target;
  if (!el.matches('input')) return; // skip this unless its an input

  const index = el.dataset.index;
  items[index].done = !items[index].done;

  localStorage.setItem('items', JSON.stringify(items));
}

function toggleCheck(e) {
  items.forEach(item => {
    if (e.target.name === 'check') item.done = true;
    else item.done = false;
  });

  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteItems() {
  items = [];
  localStorage.removeItem('items');
  populateList([], itemsList);
}

addItems.addEventListener('submit', addItem);

checkAll.addEventListener('click', toggleCheck);
uncheckAll.addEventListener('click', toggleCheck);
deleteAll.addEventListener('click', deleteItems);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
