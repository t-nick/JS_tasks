1.Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут. Скрыть решение.

Решение:

<input class="cls" type="text" value="" placeholder="число">
<input class="cls" type="text" value="" placeholder="число">
<input class="cls" type="text" value="" placeholder="число">
<button id="task">жми</button>
<input id="sum" type="text" value="">   

var elem = document.getElementById('task');
elem.addEventListener('click', func);
var elem1 = document.getElementsByClassName('cls');

function func() {
	var sum = 0;
	for (var i = 0; i < elem1.length; i++) {
		sum += +elem1[i].value;
	}
	var newElem = document.getElementById('sum');
	newElem.value = sum;
}    
