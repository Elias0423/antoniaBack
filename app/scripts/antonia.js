const Bots = require('./bot')
function DigitalAssistant() { }

DigitalAssistant.prototype = {

    iniciar(e, text, callback) {
        console.log("init smooch")
        let botsPromise = Bots.init({
            appId: "5cc0c6d56a06400010baf415"
        });

        botsPromise.then(function () {
            console.log("init complete");
            document.getElementById("loader").style.display = "none";
            Bots.open();
            Bots.sendMessage(text)
                .then(function () {
                    inputElement.value = '';
                });
            Bots.on('message:sent', displayMessage => {
                console.log(displayMessage)
            });
            Bots.on('message:received', displayMessage => {
                callback(displayMessage)
            });
            document.getElementById("openChatButton").setAttribute("disabled", false)
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = DigitalAssistant;