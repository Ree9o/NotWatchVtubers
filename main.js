const nijisanji = ["ラトナ・プティ", "ラトナプティ", "葛葉", "イブラヒム"]; //ライバーの名前を保有する配列

(function () {
  chrome.tabs.getSelected(null, (tab) => {
    const title = tab.title; // tabに現在のタブが格納されている（？）。
      const url = tab.url; // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。
       const tabID = tab.id

    const filterName = nijisanji.filter((name) => {
      //fliterだとタイトルに二回名前でてくると最後まで取得するので別のに買えて挙動確認してください
      //良くわからないけど重複した名前を抽出
      return title.indexOf(name) !== -1;
    });

    console.log("名前" + filterName); //['名前']

    const changeFormat = JSON.stringify(filterName); //配列→文字列

    const len = changeFormat.length - 4; //[]と''ぶん引く

    const firstOfName = title.indexOf(filterName); //開始位置を取得
    console.log("名前の開始位置は" + firstOfName);

    const endOfName = title.lastIndexOf(filterName) + len; //開始位置から名前の長さを足す
    console.log(endOfName);

    const result = title.substring(firstOfName, endOfName); //開始位置,終了位置

    console.log("結果" + result);

    const indexresult = filterName.indexOf(name);
    console.log("index" + indexresult);

    const isBoolean = Boolean(firstOfName);
    console.log("真偽値は" + isBoolean);

    if (isBoolean) {
      //名前が含まれていた場合
      const name = result; //タイトルを格納。
      console.log(name);

      console.log(`${name}が含まれています`);

      alert(name + "が含まれているためタブを終了します！");
       
        console.log(tabID)
        chrome.tabs.remove(tabID)
      
    } else {
      //含まれていない場合
      console.log("filterNameが含まれていません");
    }
  });
})();
