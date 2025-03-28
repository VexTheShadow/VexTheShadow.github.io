const data = [
    {
        "language": "English",
        "symbol": "en",
        "text": "programmer| web developer| cybersecurity technician"
      },
      {
        "language": "Korean",
        "symbol": "ko",
        "text": "프로그래머| 웹 개발자| 사이버보안 기술자"
      },
      {
        "language": "German",
        "symbol": "de",
        "text": "Programmierer| Webentwickler| Cybersicherheitstechniker"
      },
      {
        "language": "Chinese Simplified",
        "symbol": "zh-cn",
        "text": "程序员|网页开发人员|网络安全技术员"
      },
      {
        "language": "Russian",
        "symbol": "ru",
        "text": "программист| веб-разработчик| техник по кибербезопасности"
      },
      {
        "language": "Spanish",
        "symbol": "es",
        "text": "programador| desarrollador web| técnico en ciberseguridad"
      },
      {
        "language": "French",
        "symbol": "fr",
        "text": "programmeur| développeur web| technicien en cybersécurité"
      },
      {
        "language": "Portuguese",
        "symbol": "pt",
        "text": "programador | desenvolvedor web | técnico de segurança cibernética"
      },
      {
        "language": "Romanian",
        "symbol": "ro",
        "text": "programator| dezvoltator web| tehnician în securitate cibernetică"
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