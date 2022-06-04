window.onload = go;
function go() {
  
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  genRandQuote();
}

function genRandQuote() {
  var quotes = [{
		id: 1,
		text: "Aku ini bukan apa-apa kalau tanpa rakyat. Aku besar karena rakyat, berjuang karena rakyat, dan aku penyambung lidah rakya",
		source: "Ir.Soekarno"
	},
	{
		id: 2,
		text:  "Hanya orang yang menampilkan kelemahan yang diperlakuka sebagai orang lemah",
		source: "Mario Teguh"
	},
	{
		id: 3,
		text: "Filsafat itu tentang cara berpikir bukan cara meghamba.",
		source: "Rocky Gerung"
	},
	{
		id: 4,
		text: "Di mana pun engkau berada selalulah menjadi yg terbaik dan berikan yang terbaik dari yang bisa kita berikan.",
		source: "Bj.Habibie"
	},
	{
		id: 5,
		text: "Bagi para calon sarjana, silakan merenungkan sendiri langkah yang akan ditempuh agar bisa bersinergi positif dalam kehidupan.",
		source: "Bj.Habibie"
	},
	{
		id: 6,
		text: "Cinta itu keikhlasan, tak ada paksaan ataupun rasa pelampiasan",
		source: "Bj.Habibie"
	},
	{
		id: 7,
		text: "Pendidikan adalah perang terhadap kedunguan.",
		source: "Rocky Gerung"
	},
	{
		id: 8,
		text: "Kita adalah apa yang kita kerjakan berulang kali.",
		source: "Aristoteles"
	},
	{
		id: 9,
		text: "Cinta terdiri atas sebuah jiwa yang mendiami dua tubuh",
		source: "Aristoteles"
	},
	{
		id: 10,
		text: "Mengedukasi pikiran tanpa mengedukasi hati sama dengan tak mengedukasi apa-apa",
		source: "Aristoteles"
	},
];
  var randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", stringToClickToTweetURL('"' + randQuote.text + '" - ' + randQuote.source));
}

function stringToClickToTweetURL(str) {

  var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
 
  return resultString;
}