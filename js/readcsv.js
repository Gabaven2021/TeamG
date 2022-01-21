//CSVファイルを読み込む関数 getCSV()
function getCSV(){
	// XMLHttpRrequestオブジェクトを生成
    var csvfile = new XMLHttpRequest();
	// csvファイルのパスを指定し、データを開く
    csvfile.open("get", "http://keylopment.com/_cms/wp-content/themes/keylopment/docs/test_label_on.csv", true);
    csvfile.send(null); // HTTPリクエストの発行	
	// csvファイルを読み込んだら処理を実行
	csvfile.onload = function(){
		convertCSV(csvfile.responseText);
	}
}