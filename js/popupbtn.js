//=====チェックボックスにチェックでボタンクリック可能=====
const isAgreed = document.querySelector('#check');//#check取得
const btn = document.querySelector('#btn');//#btn取得
	
isAgreed.addEventListener('change', () => {
btn.disabled = !isAgreed.checked; // チェック入ってないらボタン無効化
});

//=====クリック後PUPUP削除=====
document.addEventListener("DOMContentLoaded", function() {//ページの読み込み完了を待って実行
document.getElementById("btn").addEventListener("click", function() {//btnの要素取得しクリックイベント追加
document.querySelectorAll(".popup-box").forEach(function(box) {//popup-box のすべての要素を取得
box.remove();//popup-box 要素を削除
});
});
});
//forEach は、配列の各要素に対して、一度ずつコールバック関数を実行するメソッド
