/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/fiori_05/cadastro_de_alunos/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});