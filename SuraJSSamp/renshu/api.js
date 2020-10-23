async function callApi() {
  //async　== 非同期関数となり、awaitという式を使えるようになり、Responseオブジェクトが返ってくる。
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users"); //API取得先のURLをfetchメソッドで取得し、res(レスポンスの略)変数へ代入。windowは省略可能。
  const users = await res.json(); //Resopnseオブジェクトが持っている.jsonメソッドを使えるようになる。
  console.log(users); //Promise{<pending>}というオブジェクトが返ってくる。非同期で必要。
}
callApi(); //上記のasyncを使う書き方が主流

//MDNのリファレンス https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
