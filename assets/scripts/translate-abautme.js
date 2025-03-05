//const jsonData = '.json';

const data = [
    {
        "language": "English",
        "symbol": "en",
        "text": "programmer| web developer| cybersecurity technician"
      },
      {
        "language": "Romanian",
        "symbol": "ro",
        "text": "programator| dezvoltator web| tehnician în securitate cibernetică"
      },
      {
        "language": "Catalan",
        "symbol": "ca",
        "text": "programador| desenvolupador web| tècnic en ciberseguretat"
      },
      {
        "language": "Japanese",
        "symbol": "ja",
        "text": "プログラマー|ウェブ開発者|サイバーセキュリティ技術者"
      },
      {
        "language": "Arabic",
        "symbol": "ar",
        "text": "مبرمج| مطور ويب| فني الأمن السيبراني"
      }
]

var finalArray = [];

data.forEach(item => {
    if (item.symbol) {
        var translatedText = item.text.split("|");
        var translatedTextClean = translatedText.map(item => item.trim());
        var translatedTextFormatted = translatedTextClean.map(item => item + ".");
        var translatedTextSringified = JSON.stringify(translatedTextFormatted);
        var translatedTextReady = `${item.symbol}: ${translatedTextSringified},`;
        finalArray.push(translatedTextReady);
    }
  });

    finalArray.forEach (item => {
    console.log(item)
})
/*
// Usar fetch para cargar el archivo JSON
fetch(jsonData)
  .then(data => {
    data.forEach(item => {
        if (item.symbol) {
            var translatedText = item.text.split(",");
            var translatedTextClean = translatedText.map(item => item.trim());
            var translatedTextFormatted = translatedTextClean.map(item => item + ".");
            var translatedTextSringified = JSON.stringify(translatedTextFormatted);
            var translatedTextReady = `${item.symbol}: ${translatedTextSringified},`;
            finalArray.push(translatedTextReady);
        }
        //console.log(`Idioma: ${item.language}, Símbolo: ${item.symbol}, Texto: ${item.text}`);
        console.log(finalArray);
      });
  })
  .catch(error => {
    // Manejar errores
    console.error('Hubo un problema con la operación fetch:', error);
  });

*/
