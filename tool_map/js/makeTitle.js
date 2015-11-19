function getWord(c){
		word_num = {};
		word = Enumerable.From(word_data)
				.Where(function(x){
					if(x.cluster == c){
						return x;
					}
				})
				.GroupBy("$.type_w", null, "{type: $}")
				.ToArray();

		data = {};
		for(i=0; i<word.length; i++){
			word_result = Enumerable.From(word_data)
				.Shuffle()
				.Where(function(x){
					if(x.cluster == c){
						if(x.type_w == word[i]["type"]){
							return x;
						}
					}
				})
				.ToArray();
				data[word[i]["type"]] = word_result[0]["word"]
		}
		console.log(data)
		return data;
	}

function makeTitle(c){
	data = getWord(c);
	switch(c){
		case "4_4":
			return data["2.0"] + "女の子と" + data["3.0"] + "えっち生活♡";
		case "4_1":
			return "なぜか、" + data["2.0"] + "女の子は僕に" + data["3.0"] + "。";
		case "4_3":
			return data["4.0"] + "に" + data["3.0"] + data["1.0"] + "ても、" + "やっぱり" + data["4.0"] + "が好き！";
		case "4_2":
			return "昨日、" + data["3.0"] + "誘ってきた" + data["2.0"] + "女と" + data["6.0"] + "で・・・";
		case "1_4":
			return data["2.0"] + "女と" + data["4.0"] + "女のW" + data["3.0"] + "SEX";
		case "1_1":
			return data["2.0"] + "過ぎる美少女と" + data["3.0"] + "SEX";
		case "1_3":
			return data["4.0"] + "に" + data["1.0"] + "た" + data["2.0"] + "女";
		case "1_2":
			return data["5.0"] + "!!" +　data["2.0"] + "アイドル、最初で最後の" + data["3.0"] ;
		case "3_4":
			return "幸せそうな" + data["2.0"] + "女に忍び寄る" + data["4.0"] + "の影";
		case "3_1":
			return data["2.0"] + "女、" + data["3.0"] + "。" + data["5.0"] + data["1.0"] + "・・・";
		case "3_3":
		  	return data["1.0"] + "た" + data["2.0"] + "は僕のお嫁さん。";
		case "3_2":
		  return "目撃！！" + data["2.0"] + "女が" + data["4.0"] + "に" + data["1.0"] + "れる衝撃映像（ノーカット版）";
		case "2_4":
			return data["2.0"] + "女の子と" + data["6.0"] + "で" + data["3.0"] + "やっちゃった僕。";
		case "2_1":
			return "僕らの" + data["2.0"] + "マドンナがある日、" + data["4.0"] + "迫ってきた";
		case "2_3":
			return data["2.0"] + "女の子を" + data["4.0"] + "犯しちゃった・・・";
		case "2_2":
			return data["5.0"] + "!!!!!   THE  " + data["3.0"] + "る" + data["2.0"] + "女!";
	}
}