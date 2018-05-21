
var add = document.querySelector('.add');
var out = document.querySelector('.out');
var input = document.querySelector('.input');
var button = document.querySelector('.button');

var word, letterArray, i = 0, count = 0;

var wordsArray = [
	['чI','а','л'],
	['ц','а','в'],
	['къ','уь','л'],
	['в','а','р','з'],
	['ч','у','кI','у','л'],
	['кI','а','р','а','с'],
	['б','и','цI','е','к'],
	['кI','а','кI','а','м'],
	['с','у','кI', 'р', 'а'],
	['кь','уь','гъ', 'уь', 'р']
];

var wordAmount = wordsArray.length;

window.onload = function(){
	getWord();
	button.addEventListener('click', function(){
		if (input.value == word) {
			out.innerHTML = 'Правильно! Угадано ' + count + ' из ' + wordAmount + '.';
			count++; // увеличиваем количество угаданных слов
			i++; // переходим к слудующему слову
			getWord(); 
		} else {
			input.value = '';
			out.innerHTML = 'Попробуйте ввести другое слово!';
		}
	});
}

function getWord(){
	if(i >= wordsArray.length) {
		out.innerHTML = 'Игра закончена! Все слова угаданы!';
		return false;
	}
	input.value = "";
	word = wordsArray[i].join(''); // выбираем слово из исходного массива
	letterArray = wordsArray[i].sort(randomize); // перемешанный массив букв выбранного слова
	var str = "<div></div>";
	for(var j=0; j<letterArray.length; j++){
		str+='<div class="letter">' + letterArray[j] + '</div>';
	}
	add.innerHTML = str; // выводим на экран буквы из перемешанного массива

	/* отслеживаем клик на букву и добавляем его в поле инпут */
	var letter = document.querySelectorAll('.letter');
	for(let i = 0; i<letter.length; i++) {
		letter[i].addEventListener('click', function(){
			out.innerHTML = '';
			input.value += letter[i].innerHTML;
			letter[i].style.borderColor = "#DDD";
		})
	}
}

input.addEventListener('input', function(){
	out.innerHTML = '';
})

function randomize(a, b) {
	return Math.random() - 0.5;
}


