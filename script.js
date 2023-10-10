function translateText() {
    const inputText = document.getElementById('inputText').value;

    // Use Google Translate API to translate from Hindi to a specific dialect
    const selectedLanguageCode = selectLanguage.value;
    const googleTranslateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hi&tl=${selectedLanguageCode}&dt=t&q=${encodeURIComponent(inputText)}`;

    fetch(googleTranslateUrl)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            displayTranslation(translatedText);
        })
        .catch(error => {
            if (inputText) {
                console.error("Error translating text:", error);
                displayTranslation("Error occurred while translating. Please try again.");
            }
            else {
                displayTranslation("Please Enter Your text !");

            }
        });
}

function displayTranslation(translatedText) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Translated Text: ${translatedText}`;
}

const LanguageData = [
    { name: "Bhojpuri", isoCode: "bho" },
    { name: "Bundeli", isoCode: "bns" },
    { name: "Dongri", isoCode: "dgo" },
    { name: "Mumbai Hindi", isoCode: "hi" },
    { name: "Haryanvi", isoCode: "bgc" },
    { name: "Nimandi", isoCode: "noe" },
    { name: "Malvi", isoCode: "mal" },
    { name: "Dhakni", isoCode: "bfk" },
    { name: "Kinnauri", isoCode: "kfk" },
    { name: "Kangri", isoCode: "xnr" },
    { name: "Chambeali", isoCode: "cbl" },
    { name: "Garhwali", isoCode: "gbm" },
    { name: "Kumaoni", isoCode: "kfy" },
    { name: "Jaunsari", isoCode: "jns" },
    { name: "Brij Bhasha", isoCode: "bup" },
    { name: "Kannauji", isoCode: "kxu" },
    { name: "Bagdi", isoCode: "bgd" },
    { name: "Nimadi", isoCode: "noe" },
    { name: "Bagri", isoCode: "bgq" },
    { name: "Wagdi", isoCode: "wbr" },
    { name: "Kumaoni", isoCode: "kfy" },
    { name: "Bagheli", isoCode: "bfy" },
    { name: "Awadhi", isoCode: "awa" },
    { name: "Magahi", isoCode: "mag" },
    { name: "Angika", isoCode: "anp" },
    { name: "Nagpuri", isoCode: "npk" },
    { name: "Khortha", isoCode: "kfs" },
    { name: "Kurmali", isoCode: "xnr" },
    { name: "Mundari", isoCode: "unr" },
    { name: "Panch Pargania", isoCode: "psg" },
    { name: "Chattisgharhi", isoCode: "hne" },
    { name: "Surgujia", isoCode: "sgj" },
    { name: "Marwari", isoCode: "mwr" },
    { name: "Dhundhari", isoCode: "dhd" },
    { name: "Harauti", isoCode: "hrt" },
    { name: "Shekhawati", isoCode: "swv" },
    { name: "Maithili", isoCode: "mai" },
    { name: "Malvi", isoCode: "mal" }
];

const selectLanguage = document.getElementById("Language");
LanguageData.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.isoCode;
    option.text = lang.name;
    selectLanguage.appendChild(option);
});
