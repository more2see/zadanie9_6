var list = document.getElementById('list'),
	add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	/*Pamietaj, że kolejność ma znaczenie bo inaczej liczba się nie wyświetli, var liLength musi byc przed element.inner*/
	var liLength = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + liLength;
	list.appendChild(element);
});