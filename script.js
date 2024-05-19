function selectGame(){
  var game = document.フォーム名.フィールド名.options[document.フォーム名.フィールド名.selectedIndex].value
}

function valueChange(){
  console.log('新しく ' + fruitSelect.value + ' を選択しました');
}

let gameSelect = document.getElementById('game');
gameSelect.options[2].selected = true;
gameSelect.addEventListener('change', valueChange);
