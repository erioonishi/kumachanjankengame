const open = document.querySelector('#open'); //モーダルを開くボタンの要素取得
const close = document.querySelector('#close');//モーダルを閉じるボタンの要素取得
const modal = document.querySelector('#modal');//モーダルウインドウの要素取得
const mask = document.querySelector('#mask');//背景の黒いマスク要素取得
const showKeyframes = {//モーダルを表示するためのアニメーション設定。最初は透明（opacity: 0）で、1秒以内に完全に表示（opacity: 1）され、visibilityはvisibleになる。
  opacity: [0, 1],//透明から色付きへ
  visibility: 'visible',//表示状態
};
const hideKeyframes = {//モーダルを非表示にするためのアニメーション設定。最初は完全に表示されていて（opacity: 1）、1秒以内に透明（opacity: 0）になり、visibilityがhiddenに変更。
  opacity: [1, 0],
  visibility: 'hidden',// 非表示状態
};
const options = {
  duration: 800,// アニメーションの時間
  easing: 'ease',//最初と最後ゆっくり
  fill: 'forwards',//アニメーション終了後も最終状態を維持
};
// モーダルウィンドウを開く
//#openボタンがクリックされると、モーダルとマスクがshowKeyframesを使って表示されるアニメーションを実行。
open.addEventListener('click', () => {
  modal.animate(showKeyframes, options);
  mask.animate(showKeyframes, options);
});
// モーダルウィンドウを閉じる
//#closeボタンがクリックされると、モーダルとマスクがhideKeyframesを使って非表示になるアニメーションを実行。
close.addEventListener('click', () => {
  modal.animate(hideKeyframes, options);
  mask.animate(hideKeyframes, options);
});
// マスクをクリックしてHTML全体を閉じる
//#closeボタンがクリックされると、windowがhideKeyframesを使って非表示になるアニメーションを実行。
close.addEventListener('click', () => {
  modal.animate(hideKeyframes, options);
  mask.animate(hideKeyframes, options);
  setTimeout(() => {
    window.close();  // モーダルが閉じた後にページを閉じる
  }, options.duration); // アニメーションが完了した後にページを閉じる
});