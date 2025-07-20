//森の画像、家の屋根の部分の色なし画像、くまの画像、色つきと交換するために透明の画像を重ねている状態からスタート
document.addEventListener("DOMContentLoaded", function () {
    const mainImagePC = document.querySelector(".pc #mainImage"); // PC版くまの画像
    const bigimgPC = document.querySelector(".pc #bigimg"); // PC版屋根
    const mainImageSP = document.querySelector(".sp #mainImage"); // SP版くまの画像
    const bigimgSP = document.querySelector(".sp #bigimg"); // SP版屋根

    const sectionBox1 = document.getElementById("sectionBox1");// 屋根の色選択
    const sectionBox2 = document.getElementById("sectionBox2");// クイズ1
    const sectionBox3 = document.getElementById("sectionBox3");// クイズ2
    const sectionBox4 = document.getElementById("sectionBox4");// じゃんけんゲーム

    const nextBtn = document.getElementById("nextBtn");// 屋根の色選択 → クイズ1
    const nextBtn2 = document.getElementById("nextBtn2");// クイズ1 → クイズ2
    const nextBtn3 = document.getElementById("nextBtn3");// クイズ2 → じゃんけん
    const finishBtn = document.getElementById("finishBtn");// じゃんけん終了

    const checkAnswer1 = document.getElementById("checkAnswer");// クイズ1の答え合わせ
    const checkAnswer2 = document.getElementById("checkAnswer2");// クイズ2の答え合わせ

    let selectedRoofColor = "images/color/0.png"; // 初期値（透明）

// ===== 色の変更に応じてくまの画像も変更 =====
    const imageMap = {
        "images/color/1.png": "images/kuma4.png",//屋根の色：くまの画像
        "images/color/2.png": "images/kuma5.png",
        "images/color/3.png": "images/kuma6.png",
        "images/color/4.png": "images/kuma7.png",
        "images/color/5.png": "images/kuma8.png"
    };

    // 色を選ぶとPC・SP両方の屋根の色とくまの画像を変更
    document.querySelectorAll('.thumb').forEach(thumb => {
        thumb.onclick = function() {
            selectedRoofColor = this.dataset.image;// 選んだ色を記録
            if (bigimgPC) bigimgPC.src = selectedRoofColor;// 屋根の色を変更
            if (bigimgSP) bigimgSP.src = selectedRoofColor;
            if (imageMap[selectedRoofColor]) {
                if (mainImagePC) mainImagePC.src = imageMap[selectedRoofColor];// くまの画像を変更
                if (mainImageSP) mainImageSP.src = imageMap[selectedRoofColor];
            }
        };
    });

// ===== 「次へ」ボタンで画面遷移(屋根の色はそのまま保持) =====
    nextBtn.addEventListener("click", function () {
        sectionBox1.style.display = "none";//クマの家の色変え隠す
        sectionBox2.style.display = "block";//クイズ１出す
        if (mainImagePC) mainImagePC.src = "images/kuma1.png";//くまの画像は最初に戻す
        if (mainImageSP) mainImageSP.src = "images/kuma1.png";
        if (bigimgPC) bigimgPC.src = selectedRoofColor;// 屋根の色はそのまま
        if (bigimgSP) bigimgSP.src = selectedRoofColor;
    });

    nextBtn2.addEventListener("click", function () {
        sectionBox2.style.display = "none";//クイズ1隠す
        sectionBox3.style.display = "block";//クイズ2出す
        if (mainImagePC) mainImagePC.src = "images/kuma1.png";//くまの画像は最初に戻す 
        if (mainImageSP) mainImageSP.src = "images/kuma1.png";
        if (bigimgPC) bigimgPC.src = selectedRoofColor;// 屋根の色はそのまま
        if (bigimgSP) bigimgSP.src = selectedRoofColor;
    });

    nextBtn3.addEventListener("click", function () {
        sectionBox3.style.display = "none"; //クイズ2隠す
        sectionBox4.style.display = "block";// じゃんけんゲームを出す
        if (mainImagePC) mainImagePC.src = "images/kuma1.png"; //くまの画像は最初に戻す
        if (mainImageSP) mainImageSP.src = "images/kuma1.png";
        if (bigimgPC) bigimgPC.src = selectedRoofColor;// 屋根の色はそのまま
        if (bigimgSP) bigimgSP.src = selectedRoofColor;
    });

    finishBtn.addEventListener("click", function () {
        sectionBox4.style.display = "none";
        if (mainImagePC) mainImagePC.src = "images/kuma1.png";
        if (mainImageSP) mainImageSP.src = "images/kuma1.png";
        if (bigimgPC) bigimgPC.src = selectedRoofColor;
        if (bigimgSP) bigimgSP.src = selectedRoofColor;
    
        const jankenResult = document.getElementById("jankenResult");
        jankenResult.innerHTML = "楽しかったね💗🐻💗"; // じゃんけん結果と同じ部分に表示
    
        const openBtn = document.getElementById("open");
        openBtn.style.marginTop = "50px";
    });


 // ===== クイズ1の答え合わせ =====
 checkAnswer1.addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const quizResult = document.getElementById("quizResult1"); // 結果表示用の <p> 要素を追加

    if (!selectedAnswer) {
        quizResult.innerHTML = "どれか1つ選んでね";
        return;
    }
    if (selectedAnswer.value === "correct") {
        if (mainImagePC) mainImagePC.src = "images/kuma_happy.png";
        if (mainImageSP) mainImageSP.src = "images/kuma_happy.png";
        quizResult.innerHTML = "正解！くまちゃんのこと大好きだね🐻✨";
    } else {
        quizResult.innerHTML = "残念！もう一度考えてみて…";
    }
});

// ===== クイズ2の答え合わせ =====
checkAnswer2.addEventListener("click", function () {
    const selectedAnswer = document.querySelector('input[name="quiz2"]:checked');
    const quizResult = document.getElementById("quizResult2"); // 結果表示用の <p> 要素を追加

    if (!selectedAnswer) {
        quizResult.innerHTML = "1つ選んでね！";
        return;
    }
    if (selectedAnswer.value === "correct") {
        if (mainImagePC) mainImagePC.src = "images/kuma_happy.png";
        if (mainImageSP) mainImageSP.src = "images/kuma_happy.png";
        quizResult.innerHTML = "正解！くまちゃんの好きな色は黄色だよ🐻💛";
    } else {
        quizResult.innerHTML = "残念！もう一度考えてみて…";
    }
});

// ===== じゃんけんゲーム =====
const jankenButtons = document.querySelectorAll(".jankenBtn");
const jankenResult = document.getElementById("jankenResult");

jankenButtons.forEach(button => {//ボタンクリックすると
    button.addEventListener("click", function () {
        const choices = ["グー", "チョキ", "パー"];
        const kumaChoice = choices[Math.floor(Math.random() * choices.length)];
            //choices 配列の中からランダムに1つの要素を選ぶ
        const playerChoice = this.dataset.choice;
            //thisはイベントリスナーを登録したbutton要素
            //datasetはHTML の data- 属性をJavaScript から取得
            //choiceはdata-choiceというカスタムデータ属性
            //HTMLで<button data-choice="グー">設定で、this.dataset.choiceは"グー" を取得
            // くまちゃんの手に応じて画像を変更
        // PC版・SP版のくま画像を取得
        const mainImagePC = document.querySelector(".pc #mainImage");
        const mainImageSP = document.querySelector(".sp #mainImage");

        // くまちゃんの手に応じて画像を変更（PC & SP 両方）
        if (kumaChoice === "グー") {
            if (mainImagePC) mainImagePC.src = "images/kuma_gu.png";
            if (mainImageSP) mainImageSP.src = "images/kuma_gu.png";
        } else if (kumaChoice === "チョキ") {
            if (mainImagePC) mainImagePC.src = "images/kuma_choki.png";
            if (mainImageSP) mainImageSP.src = "images/kuma_choki.png";
        } else {
            if (mainImagePC) mainImagePC.src = "images/kuma_pa.png";
            if (mainImageSP) mainImageSP.src = "images/kuma_pa.png";
        }

// == じゃんけんの結果を表示 ==
        let resultMessage = `くまちゃんの手: ${kumaChoice} <br>あなたの手: ${playerChoice}<br> → `;        
        if (playerChoice === kumaChoice) {
            resultMessage += "引き分けだね！🐻";
            //resultMessageの内容に"引き分けだね！🐻"を連結して、その新しい値を resultMessage に代入
            //&&（AND）両方の条件がtrueのときにtrue 
            //||（OR）いずれかの条件がtrueならtrue
        } else if (
            (playerChoice === "グー" && kumaChoice === "チョキ") ||//私グーくまチョキどっちも満たされる、または
            (playerChoice === "チョキ" && kumaChoice === "パー") ||//私チョキくまパーどっちも満たされる、または
            (playerChoice === "パー" && kumaChoice === "グー")//私パーくまグーどっちも満たされる時
        ) {
            resultMessage += "おめでとう！あなたの勝ち！🎉🐻";
        } else {
            resultMessage += "くまちゃん勝っちゃった(/ω＼)🐻";
        }

        jankenResult.innerHTML = resultMessage; // innerHTMLを使用して改行を適用
        //HTMLの要素jankenResultの中身を、resultMessageに置き換える
    });
});
});
