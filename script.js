function translateText() {
    const inputText = document.getElementById('inputText').value;

    // Use Google Translate API to translate from Hindi to a specific dialect
    const targetDialect = "bho"; // For Bhojpuri dialect
    const googleTranslateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hi&tl=${targetDialect}&dt=t&q=${encodeURIComponent(inputText)}`;

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
