/*
En NativeScript, el archivo app.js es el punto de entrada a su aplicación.
Puede utilizar este archivo para realizar la inicialización del nivel de la aplicación, pero el propósito principal del archivo es pasar el control al primer módulo de la aplicación.
*/

require("./bundle-config");
var application = require("application");

var firebase    = require("nativescript-plugin-firebase");

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);

application.start({ moduleName: "main-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
