let Data = { Title: "", URL: "" }; //格納する変数


    chrome.tabs.query((tab) => {
      // 現在のタブを取得
      Data.Title = tab.title; // tabに現在のタブが格納されている（？）。
      Data.URL = tab.url; // tab.titleには現在開いているタブのページタイトルが、tab.urlにはURLが格納されている。
      console.log(`Title: ${Data.Title}`); // 出力は、「ポップアップを検証」で見れる。
      console.log(`URL: ${Data.URL}`);

        return [tab]
    });

