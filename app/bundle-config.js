if (global.TNS_WEBPACK) {
    //Registros tns-core-modules Módulos de la interfaz de usuario
    require("bundle-entry-points");

    //Registrar módulos de aplicación
    global.registerModule("main-page", function () { return require("./main-page"); });
}
