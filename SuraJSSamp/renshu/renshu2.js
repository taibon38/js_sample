// function confirmed(fn){
//     const input = window.prompt("実行しますか？");
//     if(input === "実行") {//テキストフォームを開く。
//         fn();
//     }else{
//         console.log("正しく入力してください")
//     }
// }

// confirmed(function(){ //コールバック関数で匿名関数を利用している
//     console.log("リポジトリを削除");
// });

// //通常の関数
// function isTweetable(text){
//     return text.length <= 140;
// };
// console.log(isTweetable("foo")); //trueが返り値となる。

// //関数式(匿名関数)
// var isTweetable = function(text){ //functionのあとに、普通は関数名が入るがなくとも動く。これが匿名関数。
//     return text.length <=2;
// };
// console.log(isTweetable("foo")); //trueが返り値となる。


//疑似ツイッター
// function unfollow(){
//     console.log("フォローを外しました");
// }

// const cancelTweet = function(){ //匿名関数
//     console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn){
//     if(window.confirm("実行しますか？")){
//         fn(); // confirmで確認がでて、OKがでたら実行
//     }
// }

// confirmed(cancelTweet);



// function 高階関数(コールバック関数){ //高階関数とは
//     //処理
//     コールバック関数();
// }

// // 普通の書き方
// function bring(food){
//     if(/*手洗いが終えたら */){
//         //食材を持ってきてもらう処理
//     }
// }

// function peer(food){
//     if(/*手洗いが終えたら */){
//         //食材の皮をむく処理
//     }
// }

// function cut(food){
//     if(/*手洗いが終えたら */){
//         //食材を切ってもらう処理
//     }
// }

// //高階関数を使った場合の処理（処理がきれいになる）
// function washed(fn){  //ここに引数を入れることも可能。
//     if(/*手洗いが終えたら かつ */)){
//         fn(); //コールバック関数の処理
//     }
// }

// function bring(food){
//     //食材を持ってきてもらう処理
// }

// function peer(food){
//     //食材の皮をむく処理
// }

// function cut(food){
//     //食材を切ってもらう処理
// }

// washed(peer) で実行できる。