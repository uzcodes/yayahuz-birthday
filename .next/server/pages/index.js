module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _messages_messages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.json */ "./pages/messages/messages.json");
var _messages_messages_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./messages/messages.json */ "./pages/messages/messages.json", 1);

var _jsxFileName = "C:\\Users\\Miguel\\Documents\\Projects\\side\\final\\yayahuz\\pages\\index.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed,
      children: "\uD83C\uDF82\uD83C\uDF88\uD83C\uDF81\uD83C\uDF1F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Feliz Anivers\xE1rio, Yayahuz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/yayahCoracao.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: ["\uD83D\uDC96 Feliz Anivers\xE1rio, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Yayahuz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 31
      }, this), "! \uD83C\uDF89"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,
      children: "Yayah, aqui est\xE3o algumas das mensagens escritas com muito carinho pela sua comunidade."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: _messages_messages_json__WEBPACK_IMPORTED_MODULE_3__.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.article,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nick,
          children: message.nick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
          children: message.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `/${message.icon}.png`,
          alt: "",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.emote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, this)]
      }, message.nick, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/yayahCoracao.png",
        alt: "",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerEmote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), "Feito com muito amor por amigos, mods e grupos.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/yayahCoracao.png",
        alt: "",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerEmote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.group,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Grupo 1.2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: " OI, Yayah!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "N\xF3s do grupo 1.2 queremos parabeniz\xE1-la nessa data t\xE3o especial que \xE9 o seu anivers\xE1rio. Como membros anci\xF5es e futuro da live, gostar\xEDamos de desejar muitos anos de vida, que voc\xEA cres\xE7a ainda mais na twitch e dizer que sempre estaremos aqui para apoi\xE1-la em tudo. Agradecemos por todos os momentos felizes que voc\xEA nos proporcionou com as lives:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Livezinhas da cadeira com a net do hotel, jogando um lolzinho com 30 fps, luz improvisada, com a irm\xE3 do lado conversando e depois os filmes da madrugada;"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Gameplays de phasmophobia com a Mayumi, Yulla e Bonner;"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Lives da Bad Yayah (vulgo mosquito ou messi de \xF3culos);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Jogos do melhor duo do CS global (VIVA YADINHO);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Lives culin\xE1rias, que consistem em intoxicar a fam\xEDlia inteira (que massa com queijo nojenta paporeto);"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Participa\xE7\xF5es da Sensei (maravilhosa) que sempre salvam a qualidade deste canal prec\xE1rio;"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Devemos lembrar tamb\xE9m da vez que voc\xEA carregou o seu time no Twitch Rivals, aposentando o Fer de vez (Kappa), e daquela vez que voc\xEA se mediu com a cadeira pra ver quem era maior. Ap\xF3s relembrar de v\xE1rios momentos memor\xE1veis, desejamos que voc\xEA se sinta realizada pelo que voc\xEA est\xE1 fazendo, saiba que estaremos lhe apoiando independente do que escolher fazer. Muitos de n\xF3s te conhecemos das primeiras lives e sabemos o quanto voc\xEA evoluiu n\xE3o s\xF3 como streamer, mas tamb\xE9m como pessoa."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Por fim, feliz anivers\xE1rio Yayah, vulgo esquisita, cachaceira, an\xE3 de jardim, cantora de r\xE1dio de pilha, salva-vidas de aqu\xE1rio, carcereira de gaiola, chaveiro de judoca, playmobil, alpinista de poltrona, corretora de banco imobili\xE1rio, escaladora de meio-fio, escultora de suspiro, gandula de pebolim, pintora de rodap\xE9, goleira de futebol de bot\xE3o, lenhadora de bonsai, mec\xE2nica de hot wheels, cachachera, enfim."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Esperamos ansiosamente o dia que voc\xEA devolver\xE1 nossos pontos de Q.I perdidos durante esse tempo todo. At\xE9 l\xE1, continuaremos sendo esquisit\xF5es do chat, j\xE1 que o chat \xE9 o espelho da streamer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
        children: ["Com carinho,", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 48
        }, this), "Grupo 1.2 #seremosofuturo"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.group,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Grupo 2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Yasmin, sei que n\xE3o gosta que te chamemos assim mas esse \xE9 o nosso jeito esquisito de ser. Vamos fazer as considera\xE7\xF5es: N\xF3s odiamos sua live: check. N\xF3s n\xE3o gostamos da sua gameplay: check. N\xE3o gostamos de voc\xEA ter trocado o Brasil pelo Paraguai: check. Enfim, existem N coisas que podemos te criticar, mas hoje queremos focar em dizer o quanto voc\xEA, sua ESQUISITA, \xE9 INCR\xCDVEL! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Quando tu n\xE3o capota caminh\xE3o, tu ta bangando o time todo e acabando com os rounds. A sua burrice nos surpreende cada dia mais, mas o seu cora\xE7\xE3o \xE9 muito maior e \xE9 por isso estamos aqui com voc\xEA todos os dias. Perdemos as contas de quantas as vezes j\xE1 sa\xEDmos da live com a bochecha cansanda de tanto rir. Voc\xEA pode n\xE3o botar tanta f\xE9, mas faz as noites, e agora tardes, de muita gente mais leve e divertida."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Tamb\xE9m perdemos as contas de quantas vezes j\xE1 pedimos \"ARMA NA M\xC3O YAYAH\" ou um \"\xC9 S\xD3 FREIAR\" e voc\xEA n\xE3o consegue corresponder, mas \xE9 justamente essa rela\xE7\xE3o, como a de um irm\xE3o mais velho que adora a irm\xE3 e s\xF3 tenta proteg\xEA-la, que faz a gente sempre estar l\xE1 por voc\xEA. \xC1s vezes exageramos, mas nunca na maldade."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA \xE9 a prova que com autenticidade e coragem, podemos chegar a qualquer lugar. Por mais que te taxem de esquisito(a), estranho, diferente, basta ser voc\xEA mesmo(a) que vai encontrar seu lugar no mundo. Enfim, o que n\xF3s queremos dizer \xE9: gostamos muito de ti e te apoiaremos SEMPRE, apesar de voc\xEA ser uma Judas. "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Parab\xE9ns e obrigado por tudo! Que venham muito mais momentos inesquec\xEDveis.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 87
        }, this), " A sua felicidade \xE9 a nossa."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
        children: "Ass: Grupo Dois."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.group,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Grupo 3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "AOS 22 ANOS DA MAIOR AN\xC3 DA TWITCH"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "OI! Yasmim \"Yayah\" Ingrid Larissa Souza... Tudo bem com voc\xEA? Esperamos que sim! Est\xE1 \xE9 uma pequena homenagem \xE0 nossa An\xE3zinha do chat, a esquisitinha de 1,54 M."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Em nome de todo o GRUPO 3, n\xF3s estamos aqui para lhe dar Parab\xE9ns, desejar um Feliz Anivers\xE1rio e agradecer muito, mas muito mesmo por voc\xEA existir! Gra\xE7as a voc\xEA fizemos amigos, comparsas de games, parceiros no crime organizado e tamb\xE9m uma fam\xEDlia virtual onde voc\xEA \xE9 essencial!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Desde o \u201CuuuUUuuUUU\u201D no come\xE7o da live, at\xE9 o \u201Cobrigada por hoje\u2019\u2019 no grupo, voc\xEA torna o nosso dia melhor, \xE9 isso que te transforma em uma pessoa gigante, por dentro \xF3bvio. Sempre que voc\xEA estiver para baixo lembre-se que voc\xEA criou uma comunidade fort\xEDssima e unida que vai estar l\xE1 sempre por voc\xEA, por tanto orgulhe-se disso."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Problemas sempre v\xE3o aparecer e isso \xE9 normal, o que realmente importa \xE9 seguir em busca do que te faz feliz, com coragem e com pessoas que querem o seu bem e torcem pela sua felicidade!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Nunca desista de seus sonhos, n\xF3s sabemos que voc\xEA \xE9 capaz e estaremos te apoiando em todas as suas decis\xF5es... Os seus sonhos se tornaram os nossos sonhos!!! Apesar de todas as brincadeiras, n\xF3s te amamos."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\u201CDaqui \xE0 50 anos estaremos sentados em nossas cadeiras de balan\xE7o lembrando de voc\xEA\u201D, das suas lives, das risadas que demos juntos, das pinadas do CS, dos tiros mentirosos que a Yallen acertava, dos momentos dif\xEDceis que foram superados quando o \u201Coi\u201D ecoou nos fones e nos deu a garantia de bons momentos juntos. Jamais nos esqueceremos de como voc\xEA foi e \xE9 importante para nossos dias."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Obrigado por nos proporcionar momentos incr\xEDveis em sua companhia durante \xE0s tardes e noites, obrigado por nos presentear com uma comunidade incr\xEDvel que \xE9 o grupo 3!!! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "VIVA YAYAH!!!!! "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sign,
        children: "Ass: Comparsas do Vald\xE3o, Grupo 3...."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/messages/messages.json":
/*!**************************************!*\
  !*** ./pages/messages/messages.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"nick\":\"Luki302\",\"message\":\"Não sou muito bom com textões mas vamos lá... Feliz aniversário!!!\",\"icon\":\"yayahTimida\"},{\"nick\":\"stephanieanet\",\"message\":\"feliz aniversario princesa linda esquisita <3 \",\"icon\":\"yayahBoba\"},{\"nick\":\"Juliouz_\",\"message\":\"Yayah, feliz aniversário. Tudo de bom sempre, voce eh uma pessoa incrível que alegra o dia de muito brasileirinhos. Quando conheci sua live eu estava numa época muito ruim da minha vida e você ajudou muito a superar isso, por isso hoje adoro a chance que eu tenho de ajudar essa live a crescer cada vez mais. Muita saúde e paz pra você e pra toda sua família, tmj Yasmim\",\"icon\":\"yayahBoba\"},{\"nick\":\"j0tinhaaa\",\"message\":\"Parabéns yayah!!! Obrigado por todas as lives esquisita Te amamos\",\"icon\":\"yayahCoracao\"},{\"nick\":\"guilhermee_glm\",\"message\":\"Parabéns esquisita, aproveita bastante o seu dia, você alegra o dia de milhares de brasileirinhos sua mulinha\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"baioneta2\",\"message\":\"Iasmin? Ingrid? Larissa? Enfim, seja o nome que for, obrigado pelas lives esquisitas, divertidas e cheio de bom conteúdo que você tem feito pra gente. Nesse dia, queria te desejar, primeiramente, saúde, se cuida tá! Além disso felicidades e muito sucesso tanto nas streams quanto no judô.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"BabizinhaCoachdeFerro\",\"message\":\"Oiee amiga 😚 sei que tu não gosta por isso estou aqui pra lembrar de que está ficando idosinha, espero que passe dos 55 anos e precise muito da ajuda dos outros...🖤 Brincadeiras a parte, parabéns pelo seu dia, feliz aniversário e tudo de melhor pra ti que mesmo fazendo a gente passar raiva com as jogabilidades continua sendo uma das melhores lives da twitch tanto é que tá entre as minhas 3 mais assistindas... Te amamos nossa mu?li?nha? 🖤🖤🖤 Fechados com gp3 e esfolapatos33🦆\",\"icon\":\"yayahTimida\"},{\"nick\":\"h3nriqu3l\",\"message\":\"yayahuz sua esquisita !! o jeito que voce faz tão bem para algumas pessoas, voce não tem noção, meus sinceros parabéns e feliz aniversário, que todos seus sonho se realize, continue sendo essa mina top que é, eu tenho uma enorme admirção por voce e creio que toda a tribo também, te amamos eterna esquisita !!!!!!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"narcuscupim77\",\"message\":\"Parabéns pelo seu dia yayah e por ser essa pessoa foda, mesmo sua live tendo um conteúdo precário é a melhor live, bora f1 qualquer dia desses, tmjjj\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"buttowski_\",\"message\":\"Você trouxe alegria pra minha vida quando eu não conseguia mais viver.\",\"icon\":\"yayahTimida\"},{\"nick\":\"yiogiro\",\"message\":\"O criminoso não está, muitas vezes, á altura do seu ato, no seu caso o seu tamanho n compete com tamanhas gameplays criminosas, parabéns yayah, nossa anã favorita <3\",\"icon\":\"yayahCoracao\"},{\"nick\":\"fcrfps\",\"message\":\"(Aff tá em textão) Oi Yayah feliz aniversário anãzinha, limpadora de aquário, gnoma de jardim, agricultora de Farmville, alpinista de poltrona, cantora de rádio de pilha, corretora de banco imobiliário, etc etc. Conheci sua live numa madrugada que você tava assistindo o kung fu panda e quando eu vi, já tava no terceiro filme e dando sub. Sua live me ajudou muito e sou muito grato a você por todos os momentos de felicidade que me proporcionou. Na sua live eu conheci novas pessoas, fiz novas amizades, e me ajudou a sair de um período de depressão. Gostaria de te dar um presente melhor, mas o que eu tenho pra te agradecer é essa mensagem e o meu prime, talvez te mande uns bits de aniversário rsrsrs. Muito obrigado por tudo esquisitinha mas querida do Brasil. ♥️♥️♥️\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"luis_bruxao\",\"message\":\"Feliz aniversário,Ingrid? graças a você consegui muitos amiguinhos, obrigado por estar ali com a gente mesmo nao estando nos seus dias mais alegres e mesmo assim fazer de tudo para tirar uma risada da galera, eu entrei para a comunidade tem pouco tempo mas já me sinto muito melhor, essa pandemia me destruiu e perdi muita coisa, estava querendo largar tudo, trabalho,emprego e ficar em casa até algo acontecer, mas quando cheguei vi que você não desistiu do judô mesmo depois de anos sem lutar e agora está focada nele novamente, você é inspiração pra mim menos na parte da esquisitisse, obrigado por tudo yayah, aproveite muito seu dia esquisita\",\"icon\":\"yayahTimida\"},{\"nick\":\"Detona_Pitbull\",\"message\":\"Salves yasmim. Feliz aniversário, que Deus te abençoe e te ilumine neste dia tão especial, vc tá crescendo (eu acho). Venho representando, na verdade, o grupo 0 do lindinho (33). Eu te conheci através dele e desde então tem sido minha companhia noturna (Isso até vc voltar pro judo, F). Suas lives me ajudaram bastante em um ano muito conturbado, vc foi minha companhia nas noites tristes e felizes, quando eu tava desanimado suas lives me animavam e quando meu dia estava ruim, eu ficava ansioso para sua live. Espero que vc consiga conciliar o judô com a live, pois ela ajuda a vida de muitas pessoas como a minha. Apesar de acompanhar o lindinho a mais tempo, eu dei sub na sua live (Mesmo sem ter prime) como uma forma de agradecer todas as noites incríveis e divertidas que vc me proporcionou, infelizmente o sub acabou mas futuramente quando eu tiver condições de ter prime, irei dar o resub (não se preocupe continuarei financiando as drogas kkk). É isso, curta seu dia e valorize quem ama vc, vc tem uma família incrível que aparenta te amar muito, eu espero que vc aproveite esse dia com eles. TMJ, amamos vc <3!! Anã, Esquisita, gnomo, elfo, drogada, yasmim \",\"icon\":\"yayahCoracao\"},{\"nick\":\"Maralberton\",\"message\":\"Feliz aniversário anã, continue sendo essa pessoa incrível, te amamos muito esquisita \",\"icon\":\"yayahTimida\"},{\"nick\":\"cukamongacaio\",\"message\":\"Feliz aniversário Yayah, desejo tudo de bom pra vc, continue sendo essa pessoa iluminada q vc é, deixando o dia e a vida de muitas pessoas melhor, mais feliz, vc com certeza muda as nossas vidas para melhor. Nós amamos vc! <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Sedex\",\"message\":\"Yayah, obrigado de coração por tudo, você merece tudo de melhor nessa vida, conta com a gente, tamo junto\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"mfgameplays\",\"message\":\"Parabéns esquisita!\\nDesejo tudo de bom de bom na sua vida. \\n Muito obrigado pelos momentos de diversão que vc nos proporciona, estou passando por uma barra pesada e a única coisa que ainda me traz alegrias são as suas lives. Mesmo perdendo Q.i nessa stream de qualidade precária, eu sempre vou acompanhar a anã judoca globlal que não sabe falar caxaxa. tmj yasmin \\n ps. abaixa a sensibilidade do volante no euro truck, assim vc consegue se manter na melhor na faixa, ahhhh obrigado por me capotar no euro truck online. (ESCOLTA 33)\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Cejota092\",\"message\":\"Ya?Yah? Salve esquisita. Passando pra lhe desejar os parabéns e tudo de melhor nesse mundo, pois você merece! Te conheci através do lindinho e que bom que ele apresentou você a nos. Você é mais uma boa surpresa em nosso ano e nesses tempos de pandemia,onde estamos sempre procurando um pontinho de luz e você é um desses pontinhos,com seu jeitinho tímido, estranho,mas tão encantador e fofo. Quando você não estiver bem,para e olha o tanto de pessoas que você torna os dias menos doloridos e saiba que essas mesmas pessoas estão aqui pra você também,pra quando você precisar. Somos esquisitos,mas somos família, sim somos uma família,uma família que você construiu. Abraços e tudo de bom pra você lindinha,que você continue essa pessoa linda por fora e por dentro! Bjs. Grupo 3 🤝yayah,pra sempre!\",\"icon\":\"yayahBoba\"},{\"nick\":\"Tolinha23\",\"message\":\"Tamojunto Ingrid, imagino o quão difícil deve ser ser uma mulher no mundo de streams, sofrendo preconceito, tudo que você faz acaba sendo aumentado, como o caso da Hyalla. Mas gosto muito do seu trabalho, foi a primeira stream que eu dei sub e vai ser a unica que vou continuar dando, sua esquisitisse e mulisse são únicas e fazem com que qualquer um se sinta bem na sua live, o chat é engraçado, tem pessoas maravilhosas, espero que você saiba o quanto é querida por nós. Tmj ingrid larissa, muito boa sorte no judô, nas streams, na vida, em tudo! PARABÉNS ANÃ PARAGUAIA\",\"icon\":\"yayahBoba\"},{\"nick\":\"Claysonrf\",\"message\":\"Meus parabéns anã esquisita, quem diria que essa Live iria me viciar tanto, que tenha muitos anos de vida para continuar com essa Live precária.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Viniiciusalm\",\"message\":\"Feliz aniversário Yayah, muita saúde e paz na tua vida, obrigado por todos esses dias de live trazendo alegria pra nossa tarde/noite, você pode não ter a noção mas ter suas lives traz alegria pra vida de muita gente. Você é uma pessoal muito especial, Tmj! ❤️\",\"icon\":\"yayahTimida\"},{\"nick\":\"Jymps\",\"message\":\"Oii Yayah, obrigado por ser essa streamer excepcional  <3 Sempre quando quero fugir do caos de outras lives ou de coisas da vida, eu vou para sua live, vc sempre passa uma energia boa :)\",\"icon\":\"yayahBoba\"},{\"nick\":\"uvitto\",\"message\":\"Iaeee yaya, Primeiramente queria te desejar um feliz aniversário e agradecer por você melhorar meus dias quando eu não estava me sentindo muito feliz, espero que você cresça cada dia a mais, muito sucesso e saúde ♥️\",\"icon\":\"yayahCoracao\"},{\"nick\":\"tekazin_pjl\",\"message\":\"Feliz aniversário yayas, aproveita bem, por que dos 25 você não passa. Tamo junto cerejinha do chat, você faz os nossos dias melhores.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"PauloEduardo_YT\",\"message\":\"Feliz aniversário esquisita q deus continue ti iluminando e continue sendo essa pessoa q vc é, e se ta recebendo mts critica é pq vc ta conquistando coisa q as outras pessoas ñ conseguiram. Foquete ñ tem ré A Tribo cuida da tribo\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Paulovs19\",\"message\":\"Parabéns esquisita muitos anos de vida, que você curta muito esse dia especial e que você continue sendo essa pessoa incrível que você é, e que você saiba que com toda sua esquisitice a gente te adora!!\",\"icon\":\"yayahBoba\"},{\"nick\":\"Twichtlemon\",\"message\":\"Yayah feliz aniversário, te conheci pelo lindinho e acabei preferindo sua live estava passando por problemas pessoais na época e toda vez q eu e te chamava de esquisita,anã etc sentia que estava no lugar certo com as pessoas certas, gosto muito de ser um dos esquisitos da sua live muitos anos de vida muito sucesso nessa live de qualidade duvidosa. Um abraço um bj pra vc e pra sensei e pra todos aí amo vc  <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"salamanderfps\",\"message\":\"Ya? yah? parabéns garotinha, que você ganhe ainda mais medalhas no judô e construa uma comunidade cada vez maior na twitch, vc é braba demais, te amo esquisita <3\",\"icon\":\"yayahBoba\"},{\"nick\":\"cebola182\",\"message\":\"yayah, seja muito feliz sempre, é o meu desejo para seu aniversário! muito sucesso sempre, e continue essa pessoa que nos contagia e nos alegra ♡ uma pessoa que nunca nos deixou na mão, e é algo que quero sempre fazer por ti! conte sempre comigo pra tudo, você consegue alcançar tudo que desejar! você é gigante, um beijo.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"gateu_\",\"message\":\"Parabéns yayah, muita luz e paz nesse seu dia tão especial, muitos anos de vida pra vc. Mesmo sem saber vc me ajudou muito com suas lives quando eu perdi minha mãe. N falo muito no chat, mesmo assim sei q conheci pessoas muitos especiais no chat. Vc e incrível e merece tudo q conquistou e ainda vai conseguitar. Amo vc e todos q estão no chat❤️❤️\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Hélio Arkyh4n\",\"message\":\"Opa, sou o Hélio do GP 3 e o Arkyh4n da Live, quero falar uma coisa. Muito obg, vc é uma pessoa que consegue alegrar minhas noites e tardes agora. Sou de BsB e as coisas aqui estão complicadas, assim como no país todo, por isso eu agradeço por conseguir me ajudar com suas lives, me fazer rir e tudo mais. Continue sendo essa pessoa incrível que vc é, nunca deixe ninguém falar nd ao contrário do que eu e todos os subs e o xet falamos para vc! Continue lutando pelo seus sonhos e que nos apoiamos vc sempre, sem live, treinando, cozinhando ou até tentando dirigir! Ya yah FELIZ ANIVERSÁRIO!!!! APROVEITA QUE HJ É SEU DIA!!!!!!\",\"icon\":\"yayahBoba\"},{\"nick\":\"buchechada (xetdayayah)\",\"message\":\"Eai, anãzinha corna, bom... Acho que eu sou um bom exemplo de pessoa que, além de ter te conhecido e te achado fantástica, também achei sua comunidade fantástica e fui muito acolhido por ela. Até alguns meses atrás eu realmente não tinha muitos motivos pra sorrir, e sua live era a responsável por essa magia nos meus dias. Eu sempre ri do início ao fim das suas streams, do 'OI OI OI' até a apologia a drogas, e confesso que hoje não existe uma live que eu assista mais do que a sua. Quando eu não tinha grana pra dar sub, fiz o XetDaYayah no TT, pra poder de alguma forma ajudar seu trampo mesmo que não financeiramente, e quando descobriram meu Nick na Twitch, o Luki e o chat pediram e eu ganhei um giftsub, em um dia que vi que estava no lugar certo e apoiando a streamer certa. Agora já estou melhor, consegui um estágio, voltei a ter vontade de estudar e já posso devolver pro chat o amor e os presentes rs. Você merece tudo que tá conquistando, você é grandona (apesar dos 1,54) e ajuda a colorir o dia cinza de muitas e muitas pessoas. Seu conteúdo é precário, mas é necessário para muitos, nós amamos DEMAIS. Obrigado por mostrar pra Twitch que o diferente também brilha, e obrigado por aceitar cuidar da tribo, da mesma maneira que cuidaremos de você. Você é GOD demais e vai longe, esquisita :) Feliz aniversário!!! 💜💜💜\",\"icon\":\"yayahBoba\"},{\"nick\":\"jefrinx\",\"message\":\"oi yayah, feliz aniversário anãzinha. te conheci graças ao lindinho em setembro (ou algo assim) de 2020,uma das piores épocas da minha vida, meu vô faleceu e minha vó descobriu que tem diabetes, e eu me assumi bi e sofri um preconceito do caralho no ead e em tds os lugares, e em novembro fui diagnosticado com depressão e posso dizer que vc, o lindinho, o gau e uns amg meu salvaram minha vida mano. quando conheci sua live ja me apaixonei por ela e pela sua comunidade. e em janeiro dei sub e entrei pero famoso gp 3, desde então me aproximei muito de geral de lá, principalmete o sedex. queria te parabenizar pela mulher do caralho q tu é, passar pelo que vc passou não é mesmo para qualquer um, vc é foda, inspiração demais, me incentiva a correr atras dos meus sonhos que vou consegui. apesar do seu tamanho, o mundo ainda vai ser pequeno para vc, vc vai conquistar muita coisa foda, pq tu eh foda e n deixa ngm te fazer pensar o contrario. obg por td. bjs\",\"icon\":\"yayahTimida\"},{\"nick\":\"Leo_Botteon\",\"message\":\"Ya? Ya? U? Z? É amiga? É amigona? Estou aqui para te desejar um feliz aniversário, que você tenha um ano incrível e consiga realizar todos os seus sonhos, tanto pessoais como profissionais nas lives e no judô. Estaremos sempre apoiando você. Também queria agradecer por todas as alegrias e risadas que você me trouxe, em fevereiro eu perdi o meu pai e as suas lives me fizeram rir e me deram o apoio que eu precisava para passar por isso. Você criou uma comunidade incrível, dentro do grupo 3 eu também fiz amizade com muitas pessoas, com quem eu jogo e converso diariamente. Isso realmente não tem preço. Muito obrigado, de verdade, por cada risada que eu dei em um dia que eu estava triste. Não tenho certeza do quanto os streamers sabem disso, mas vocês realmente salvam vidas. E você é GI GAN TES CA, obviamente não em altura, mas como uma pessoa incrível. Que seu dia seja especial e, principalmente, que este ano seja especial e traga muitas alegrias para você e para nós, que com certeza estaremos felizes se você estiver. Estamos sempre com você!!!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"VALETSSS\",\"message\":\"Paarabéns Yayah u? z? Que você continue sendo essa pessoa iluminada que alegra a vida te tanta gente, te desejo muitos anos de vida, saúde, alegria, paz, sucesso, amor e tudo de bom!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Kevin_wv\",\"message\":\"Oi. Desculpa, sei que era pra ter enviado a mensagem aqui, más infelizmente ela não coube aqui. Aqui tem limite de linhas, então coloquei a mensagem em um twitLonger e vou deixar o link aqui: Link da mensagem: https://www.twitlonger.com/show/n_1srksju?new_post=true\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Grunwald_Z\",\"message\":\"Oi Yayah, conheci suas lives no começo desse ano e desde então não consegui mais parar de te acompanhar. O seu jeito peculiar realmente fez eu me identificar. Agradeço demais por você alegrar meus dias e te admiro muito como streamer e como pessoa. Parabéns por tudo que já conquistou até hoje através das lives. Te desejo um feliz aniversário e que você aproveite bastante seu dia. Tmj Yayah!!! \",\"icon\":\"yayahTimida\"},{\"nick\":\"Tevinhod\",\"message\":\"Primeiramente queria agradecer por você ser quem você é, sua alegria, sua simpatia e simplicidade transformam nossos dias, te conheci através do Lindinho tem pouco tempo, mas nesse pouco tempo já foi o bastante pra ver a pessoa incrível que tu é, eu nunca tinha dado sub em nenhum canal, mas me apeguei tanto as suas lives que fiz questão de te agradecer com um pequeno gesto de carinho, que não se compara ao tanto de entretenimento e companhia que você proporciona! Tu mudou o meu ano e espero passar muito tempo ainda vendo as patetadas e esquisitices da tua live, parabéns sua mula, e que você realize muitos e muitos sonhos e que Deus te abençoe cada vez mais e mais, você merece tudo de bom!!! Tmjjjj\",\"icon\":\"yayahCoracao\"},{\"nick\":\"FLASH-ERRADA\",\"message\":\"Parabéns Yayahuz te conheci através do lindinho e hoje sigo mais você por ser essa menina especial e faz alegria de muito de nois com sua lerdeza você merece tudo de bom nessa sua carreira pela dedicação por esta fazendo duas coisas que ama ao mesmo tempo. E não abandona nois que te ama obrigado . Feliz aniversário Deus abençoe sua você e te der muitos anos de vida  Felicidades 💞\",\"icon\":\"yayahCoracao\"},{\"nick\":\"cheatzxx\",\"message\":\"Ya? Yah? U?suária de coca, salve do cheatz. Só vim aqui parabenizar e agradecer por você produzir lives tão precárias que ficam boas, continue sendo essa esquisita que o chat adora ver, e por favor poderia parar de bater no EuroTruck, minha bike já tá todo remendada de pegar carona na traseira do caminhão\",\"icon\":\"yayahTimida\"},{\"nick\":\"CarretaFuraSION\",\"message\":\"Olá Yayah, sou muito novo na live, mas quero te desejar um feliz aniversário, você é uma pessoa incrível que vêm conquistando cada vez mais o seu espaço com o seu carisma e jeito de ser, que bom que você encontrou uma comunidade acolhedora na tribo e no CS, eu por vim do lol sei como a comunidade é tóxica e desunida, principalmente com as mulheres, vc está gigante e o q vc faz é muito importante para serem representadas, continue com esse trabalho, o chat irá te apoiar independente dos seus objetivos, seja no judô , nas streams ou nas suas esquisitices, quando se sentir desanimada, principalmente por conta de comentários de alguns nerds do chat, não esqueça o quão prazeroso é mandar um morra Luki, brinks não me bane Luki, e não deixe se abalar, vc é uma mulher pica com os seus 1,40 e queixinho de bunda <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"deercheerupzinho24\",\"message\":\"Feliz aniversário yayah! Muita saúde, paz, felicidades e sucesso na sua vida. Que vc continue sendo essa menina fofa, simpática e que transborda alegria por onde passa. Sua comunidade fica muito contente em saber que vc está feliz depois de tudo que passou. A tribo cuida da tribo e  vc já faz parte dela, pode ter certeza que vc está rodeada de pessoas boas véi, um grande abraço e aproveita o seu dia!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Albi2K\",\"message\":\"Felicidades para você, por este dia tão especial que é o seu aniversário. Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados. Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim. Com todas as minhas forças, eu te desejo um feliz aniversário! Que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias. Parabéns por hoje, mas felicidades sempre.\",\"icon\":\"yayahTimida\"},{\"nick\":\"thurzlnnnnn\",\"message\":\"Oi Yayah, vim aqui desejar um feliz aniversário e apesar da mensagem curta gosto e acompanho muita suas lives e ultimamente suas lives e as do lindinho são as únicas coisas q me alegram no dia a dia e é isso, é nois e boa live.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Kioo_\",\"message\":\"Boa noite yaya, antes de mais nada queria te agradecer pela a companhia diária, esses últimos 2 meses na sua comunidade foi uma das melhores coisas que tem acontecido ultimamente. Meus mais sinceros parabéns, que seu novo ano de vida seja repleto de conquistas, seja no judô ou nas streams que vc tenha o maior sucesso do mundo. Sem prolongar muito, tu é foda, seja sempre assim, mais uma vez obrigado. <3\",\"icon\":\"yayahBoba\"},{\"nick\":\"BiscoitaoShan\",\"message\":\"Oi Yayah. Feliz aniversário, obrigado por tornar minhas noites mais felizes, eu sou muito grato por ter te conhecido, saiba que seu trabalho vai muito além de fazer lives, se trata de tornar o dia das pessoas um pouco melhor e mais leve. Você é uma mulher forte, carismática, com um sorriso lindo. Parabéns por mais esse ano de vida.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"luqtaa\",\"message\":\"yayah, nesses últimos meses eu tava preenchido por um puta vazio dentro de mim, n sabia de jeito nenhum como fazer isso ser preenchido, tentei me matar até, mas conheci sua live pelos filmes de harry potter e me apaixonei por tudo, comunidade, pessoa que vc é e representa, e acima de tudo pelo seu carisma, obrigado por existir esquisitinha, parabéns pelos 22, obrigado por me fazer esquecer de como a vida era antes, você é incrível.\",\"icon\":\"yayahTimida\"},{\"nick\":\"xJonGomesBRx\",\"message\":\"Oi Esquisitinha, meu nome é Jonathan, e vim aqui mandar uma mensagem de aniversário pra você, pois não podia deixar passar em branco essa data. Acompanho você a pouco tempo, vão fazer quatro meses, sou sub de 1 mês, e queria dizer que você se tornou uma pessoa muito especial pra mim, sempre alegrando meus dias com esse conteúdo precário que é suas lives kkkk, mas que a torna mais divertida ainda. Nunca tinha dado sub pra ninguém em anos que assisto streams, mas depois que comecei a te acompanhar, tive que escorregar o sub kkkk. Então, queria te desejar tudo de bom na sua vida, que você tenha muito sucesso, pois você merece, feliz aniversário, e tmj Yayah ❤\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Felipesantsss\",\"message\":\"Oi Ingrid Larissa vulgo Yayahuz, venho aqui te desejar um feliz aniversário, que papai do céu te abençoe sempre. Aproveite muito seu dia ❤️❤️❤️\",\"icon\":\"yayahBoba\"},{\"nick\":\"joao1331\",\"message\":\"Ya? ya? é amiga? é amigona? Talvez tu não saiba, mas sim, sentimos como se tu fosse nossa amiga. Cheguei há pouco tempo e, apesar de acompanhar muitos streamers, pela primeira vez senti que precisava participar da tua comunidade (acho que isso diz muita coisa). Aqui muitos de nós damos risadas, torcemos e ficamos feliz com o casal yadinho, falamos qualquer porcaria que vier à cabeça, aprendemos com a sensei e nos divertimos contigo. É rápido e fácil perceber a sinceridade na tua pessoa e a bondade que tu transparece. Assim como os amigos que agora te acompanham, fica difícil não criar carinho por ti. Feliz Aniversário.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"gus0712\",\"message\":\"Opa Yayah, te acompanho desde o final de Dezembro e mesmo não sendo por muito tempo depois de assistir algumas de suas lives decidi ficar, pois me divirto muito com você, o chat e a tribo. Vim aqui te desejar um feliz aniversário, muita saúde até os 55 anos, agradecer por todas as lives que me fazem mais feliz e todas as pessoas maravilhosas que eu conheci pela live, Sensei, Hyalla, Sté, Junior entre outros ai. Obrigado mesmo Yayah e parabéns!!! TMJ\",\"icon\":\"yayahTimida\"},{\"nick\":\"gus0712\",\"message\":\"Opa Yayah, te acompanho desde o final de Dezembro e mesmo não sendo por muito tempo depois de assistir algumas de suas lives decidi ficar, pois me divirto muito com você, o chat e a tribo. Vim aqui te desejar um feliz aniversário, muita saúde até os 55 anos, agradecer por todas as lives que me fazem mais feliz e todas as pessoas maravilhosas que eu conheci pela live, Sensei, Hyalla, Sté, Junior entre outros ai. Obrigado mesmo Yayah e parabéns!!! TMJ\",\"icon\":\"yayahTimida\"},{\"nick\":\"Fernandocap144\",\"message\":\"FELIZ ANIVERSÁRIO PATROAAA!!!! 🎉🎉Quero por meio desta manifestar o quão importante  você é para todos nós Ingrid, para os nossos dias. Quando nós vamos dormir abalados, com algum acontecimento que rolou durante o dia, sempre acordamos com a esperança de quando aparecer a Yayah na tela, o nosso dia melhorar... Sei que quando eu colocar meu fone e clicar no play da Twitch vou entrar no mundo da Yayah e esquecer meus problemas, minha ansiedade, todo o transtorno durante o dia, então só terei diversão e boa companhia. Ingrid, eu só tenho a agradecer por ter conhecido suas stream's, sua história e por poder fazer parte de tudo isso, dessa comunidade incrível que está sendo construída... Sinceramente nunca torci tanto para algo dar certo, nunca me preocupei tanto para que algo acontecesse... Mas você merece, cada apoio, cada mensagem positiva, todo o sucesso que está conquistando...  Quando existir vestígios de estar desanimada lembre-se do quão é importante para nós e que sempre estaremos lá esperando você aparecer para dar boas risadas juntos e para conversarmos. Somos todos amigos, quando quiser distrair e esquecer o  seus problemas,  assim como você faz, nós também estaremos lá... Obrigado Yayah, 'o aniversário é seu, mas o presente é nosso!!!' Nós te amamos esquisitinha!! Você é incrível!! Mais uma vez... Obrigado.. VIVA YAYAH!!! Ass:  Fernando (Fernandocap144), Comparsas do Valdao, Grupo 3.\",\"icon\":\"yayahBoba\"}]");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"fixed": "Home_fixed__15_A-",
	"article": "Home_article__O1Srv",
	"group": "Home_group__2_kg3",
	"sign": "Home_sign__1Un0w",
	"emote": "Home_emote__3yoM-",
	"text": "Home_text__1sCQa",
	"footer": "Home_footer__1WdhD",
	"footerEmote": "Home_footerEmote__3gEBj",
	"title": "Home_title__3DjR7",
	"nick": "Home_nick__3ClaR",
	"subtitle": "Home_subtitle__3I2yI",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"main": "Home_main__1x8gC"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZml4ZWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFpbiIsIm1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZSIsImFydGljbGUiLCJuaWNrIiwidGV4dCIsImljb24iLCJlbW90ZSIsImZvb3RlciIsImZvb3RlckVtb3RlIiwiZ3JvdXAiLCJzaWduIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQUcsaUJBQVMsRUFBRWhCLDhEQUFNLENBQUNpQixJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJFRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZml4ZWR9PlxuICAgICAgICDwn46C8J+OiPCfjoHwn4yfXG4gICAgICA8L2Rpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RmVsaXogQW5pdmVyc8OhcmlvLCBZYXlhaHV6PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIveWF5YWhDb3JhY2FvLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICDwn5KWIEZlbGl6IEFuaXZlcnPDoXJpbywgPHN0cm9uZz5ZYXlhaHV6PC9zdHJvbmc+ISDwn46JXG4gICAgICA8L2gxPlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgWWF5YWgsIGFxdWkgZXN0w6NvIGFsZ3VtYXMgZGFzIG1lbnNhZ2VucyBlc2NyaXRhcyBjb20gbXVpdG8gY2FyaW5obyBwZWxhIHN1YSBjb211bmlkYWRlLlxuICAgICAgPC9oMj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0ga2V5PXttZXNzYWdlLm5pY2t9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5pY2t9PnttZXNzYWdlLm5pY2t9PC9oMz5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICB7bWVzc2FnZS5tZXNzYWdlfVxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvJHttZXNzYWdlLmljb259LnBuZ2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmVtb3RlfS8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApKX1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGltZyBzcmM9XCIveWF5YWhDb3JhY2FvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckVtb3RlfS8+XG4gICAgICAgIEZlaXRvIGNvbSBtdWl0byBhbW9yIHBvciBhbWlnb3MsIG1vZHMgZSBncnVwb3MuXG4gICAgICAgIDxpbWcgc3JjPVwiL3lheWFoQ29yYWNhby5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJFbW90ZX0vPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwfT5cbiAgICAgICAgPGgzPkdydXBvIDEuMjwvaDM+XG4gICAgICAgIDxzdHJvbmc+IE9JLCBZYXlhaCE8L3N0cm9uZz5cbiAgICAgICAgPHA+XG4gICAgICAgICBOw7NzIGRvIGdydXBvIDEuMiBxdWVyZW1vcyBwYXJhYmVuaXrDoS1sYSBuZXNzYSBkYXRhIHTDo28gZXNwZWNpYWwgcXVlIMOpIG8gc2V1IGFuaXZlcnPDoXJpby4gQ29tbyBtZW1icm9zIGFuY2nDtWVzIGUgZnV0dXJvIGRhIGxpdmUsIGdvc3RhcsOtYW1vcyBkZSBkZXNlamFyIG11aXRvcyBhbm9zIGRlIHZpZGEsIHF1ZSB2b2PDqiBjcmVzw6dhIGFpbmRhIG1haXMgbmEgdHdpdGNoIGUgZGl6ZXIgcXVlIHNlbXByZSBlc3RhcmVtb3MgYXF1aSBwYXJhIGFwb2nDoS1sYSBlbSB0dWRvLiBBZ3JhZGVjZW1vcyBwb3IgdG9kb3Mgb3MgbW9tZW50b3MgZmVsaXplcyBxdWUgdm9jw6ogbm9zIHByb3BvcmNpb25vdSBjb20gYXMgbGl2ZXM6XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTGl2ZXppbmhhcyBkYSBjYWRlaXJhIGNvbSBhIG5ldCBkbyBob3RlbCwgam9nYW5kbyB1bSBsb2x6aW5obyBjb20gMzAgZnBzLCBsdXogaW1wcm92aXNhZGEsIGNvbSBhIGlybcOjIGRvIGxhZG8gY29udmVyc2FuZG8gZSBkZXBvaXMgb3MgZmlsbWVzIGRhIG1hZHJ1Z2FkYTtcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5HYW1lcGxheXMgZGUgcGhhc21vcGhvYmlhIGNvbSBhIE1heXVtaSwgWXVsbGEgZSBCb25uZXI7PC9wPlxuICAgICAgICA8cD5MaXZlcyBkYSBCYWQgWWF5YWggKHZ1bGdvIG1vc3F1aXRvIG91IG1lc3NpIGRlIMOzY3Vsb3MpOzwvcD5cbiAgICAgICAgPHA+Sm9nb3MgZG8gbWVsaG9yIGR1byBkbyBDUyBnbG9iYWwgKFZJVkEgWUFESU5ITyk7PC9wPlxuICAgICAgICA8cD5MaXZlcyBjdWxpbsOhcmlhcywgcXVlIGNvbnNpc3RlbSBlbSBpbnRveGljYXIgYSBmYW3DrWxpYSBpbnRlaXJhIChxdWUgbWFzc2EgY29tIHF1ZWlqbyBub2plbnRhIHBhcG9yZXRvKTs8L3A+XG4gICAgICAgIDxwPlBhcnRpY2lwYcOnw7VlcyBkYSBTZW5zZWkgKG1hcmF2aWxob3NhKSBxdWUgc2VtcHJlIHNhbHZhbSBhIHF1YWxpZGFkZSBkZXN0ZSBjYW5hbCBwcmVjw6FyaW87PC9wPlxuICAgICAgICA8cD5EZXZlbW9zIGxlbWJyYXIgdGFtYsOpbSBkYSB2ZXogcXVlIHZvY8OqIGNhcnJlZ291IG8gc2V1IHRpbWUgbm8gVHdpdGNoIFJpdmFscywgYXBvc2VudGFuZG8gbyBGZXIgZGUgdmV6IChLYXBwYSksIGUgZGFxdWVsYSB2ZXogcXVlIHZvY8OqIHNlIG1lZGl1IGNvbSBhIGNhZGVpcmEgcHJhIHZlciBxdWVtIGVyYSBtYWlvci4gQXDDs3MgcmVsZW1icmFyIGRlIHbDoXJpb3MgbW9tZW50b3MgbWVtb3LDoXZlaXMsIGRlc2VqYW1vcyBxdWUgdm9jw6ogc2Ugc2ludGEgcmVhbGl6YWRhIHBlbG8gcXVlIHZvY8OqIGVzdMOhIGZhemVuZG8sIHNhaWJhIHF1ZSBlc3RhcmVtb3MgbGhlIGFwb2lhbmRvIGluZGVwZW5kZW50ZSBkbyBxdWUgZXNjb2xoZXIgZmF6ZXIuIE11aXRvcyBkZSBuw7NzIHRlIGNvbmhlY2Vtb3MgZGFzIHByaW1laXJhcyBsaXZlcyBlIHNhYmVtb3MgbyBxdWFudG8gdm9jw6ogZXZvbHVpdSBuw6NvIHPDsyBjb21vIHN0cmVhbWVyLCBtYXMgdGFtYsOpbSBjb21vIHBlc3NvYS48L3A+XG4gICAgICAgIDxwPlBvciBmaW0sIGZlbGl6IGFuaXZlcnPDoXJpbyBZYXlhaCwgdnVsZ28gZXNxdWlzaXRhLCBjYWNoYWNlaXJhLCBhbsOjIGRlIGphcmRpbSwgY2FudG9yYSBkZSByw6FkaW8gZGUgcGlsaGEsIHNhbHZhLXZpZGFzIGRlIGFxdcOhcmlvLCBjYXJjZXJlaXJhIGRlIGdhaW9sYSwgY2hhdmVpcm8gZGUganVkb2NhLCBwbGF5bW9iaWwsIGFscGluaXN0YSBkZSBwb2x0cm9uYSwgY29ycmV0b3JhIGRlIGJhbmNvIGltb2JpbGnDoXJpbywgZXNjYWxhZG9yYSBkZSBtZWlvLWZpbywgZXNjdWx0b3JhIGRlIHN1c3Bpcm8sIGdhbmR1bGEgZGUgcGVib2xpbSwgcGludG9yYSBkZSByb2RhcMOpLCBnb2xlaXJhIGRlIGZ1dGVib2wgZGUgYm90w6NvLCBsZW5oYWRvcmEgZGUgYm9uc2FpLCBtZWPDom5pY2EgZGUgaG90IHdoZWVscywgY2FjaGFjaGVyYSwgZW5maW0uPC9wPiAgXG4gICAgICAgIDxwPkVzcGVyYW1vcyBhbnNpb3NhbWVudGUgbyBkaWEgcXVlIHZvY8OqIGRldm9sdmVyw6Egbm9zc29zIHBvbnRvcyBkZSBRLkkgcGVyZGlkb3MgZHVyYW50ZSBlc3NlIHRlbXBvIHRvZG8uIEF0w6kgbMOhLCBjb250aW51YXJlbW9zIHNlbmRvIGVzcXVpc2l0w7VlcyBkbyBjaGF0LCBqw6EgcXVlIG8gY2hhdCDDqSBvIGVzcGVsaG8gZGEgc3RyZWFtZXIuPC9wPiAgXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNpZ259PkNvbSBjYXJpbmhvLDxici8+XG4gICAgICAgICAgIEdydXBvIDEuMiAjc2VyZW1vc29mdXR1cm88L3A+IFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwfT5cbiAgICAgICAgPGgzPkdydXBvIDI8L2gzPlxuICAgICAgICA8cD5ZYXNtaW4sIHNlaSBxdWUgbsOjbyBnb3N0YSBxdWUgdGUgY2hhbWVtb3MgYXNzaW0gbWFzIGVzc2Ugw6kgbyBub3NzbyBqZWl0byBlc3F1aXNpdG8gZGUgc2VyLiBWYW1vcyBmYXplciBhcyBjb25zaWRlcmHDp8O1ZXM6IE7Ds3Mgb2RpYW1vcyBzdWEgbGl2ZTogY2hlY2suIE7Ds3MgbsOjbyBnb3N0YW1vcyBkYSBzdWEgZ2FtZXBsYXk6IGNoZWNrLiBOw6NvIGdvc3RhbW9zIGRlIHZvY8OqIHRlciB0cm9jYWRvIG8gQnJhc2lsIHBlbG8gUGFyYWd1YWk6IGNoZWNrLiBFbmZpbSwgZXhpc3RlbSBOIGNvaXNhcyBxdWUgcG9kZW1vcyB0ZSBjcml0aWNhciwgbWFzIGhvamUgcXVlcmVtb3MgZm9jYXIgZW0gZGl6ZXIgbyBxdWFudG8gdm9jw6osIHN1YSBFU1FVSVNJVEEsIMOpIElOQ1LDjVZFTCEgPC9wPlxuICAgICAgICA8cD5RdWFuZG8gdHUgbsOjbyBjYXBvdGEgY2FtaW5ow6NvLCB0dSB0YSBiYW5nYW5kbyBvIHRpbWUgdG9kbyBlIGFjYWJhbmRvIGNvbSBvcyByb3VuZHMuIEEgc3VhIGJ1cnJpY2Ugbm9zIHN1cnByZWVuZGUgY2FkYSBkaWEgbWFpcywgbWFzIG8gc2V1IGNvcmHDp8OjbyDDqSBtdWl0byBtYWlvciBlIMOpIHBvciBpc3NvIGVzdGFtb3MgYXF1aSBjb20gdm9jw6ogdG9kb3Mgb3MgZGlhcy4gUGVyZGVtb3MgYXMgY29udGFzIGRlIHF1YW50YXMgYXMgdmV6ZXMgasOhIHNhw61tb3MgZGEgbGl2ZSBjb20gYSBib2NoZWNoYSBjYW5zYW5kYSBkZSB0YW50byByaXIuIFZvY8OqIHBvZGUgbsOjbyBib3RhciB0YW50YSBmw6ksIG1hcyBmYXogYXMgbm9pdGVzLCBlIGFnb3JhIHRhcmRlcywgZGUgbXVpdGEgZ2VudGUgbWFpcyBsZXZlIGUgZGl2ZXJ0aWRhLjwvcD5cbiAgICAgICAgPHA+VGFtYsOpbSBwZXJkZW1vcyBhcyBjb250YXMgZGUgcXVhbnRhcyB2ZXplcyBqw6EgcGVkaW1vcyBcIkFSTUEgTkEgTcODTyBZQVlBSFwiIG91IHVtIFwiw4kgU8OTIEZSRUlBUlwiIGUgdm9jw6ogbsOjbyBjb25zZWd1ZSBjb3JyZXNwb25kZXIsIG1hcyDDqSBqdXN0YW1lbnRlIGVzc2EgcmVsYcOnw6NvLCBjb21vIGEgZGUgdW0gaXJtw6NvIG1haXMgdmVsaG8gcXVlIGFkb3JhIGEgaXJtw6MgZSBzw7MgdGVudGEgcHJvdGVnw6otbGEsIHF1ZSBmYXogYSBnZW50ZSBzZW1wcmUgZXN0YXIgbMOhIHBvciB2b2PDqi4gw4FzIHZlemVzIGV4YWdlcmFtb3MsIG1hcyBudW5jYSBuYSBtYWxkYWRlLjwvcD5cbiAgICAgICAgPHA+Vm9jw6ogw6kgYSBwcm92YSBxdWUgY29tIGF1dGVudGljaWRhZGUgZSBjb3JhZ2VtLCBwb2RlbW9zIGNoZWdhciBhIHF1YWxxdWVyIGx1Z2FyLiBQb3IgbWFpcyBxdWUgdGUgdGF4ZW0gZGUgZXNxdWlzaXRvKGEpLCBlc3RyYW5obywgZGlmZXJlbnRlLCBiYXN0YSBzZXIgdm9jw6ogbWVzbW8oYSkgcXVlIHZhaSBlbmNvbnRyYXIgc2V1IGx1Z2FyIG5vIG11bmRvLiBFbmZpbSwgbyBxdWUgbsOzcyBxdWVyZW1vcyBkaXplciDDqTogZ29zdGFtb3MgbXVpdG8gZGUgdGkgZSB0ZSBhcG9pYXJlbW9zIFNFTVBSRSwgYXBlc2FyIGRlIHZvY8OqIHNlciB1bWEgSnVkYXMuIDwvcD4gIFxuICAgICAgICA8cD5QYXJhYsOpbnMgZSBvYnJpZ2FkbyBwb3IgdHVkbyEgUXVlIHZlbmhhbSBtdWl0byBtYWlzIG1vbWVudG9zIGluZXNxdWVjw612ZWlzLjxici8+IEEgc3VhIGZlbGljaWRhZGUgw6kgYSBub3NzYS48L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNpZ259PkFzczogR3J1cG8gRG9pcy48L3A+IFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyb3VwfT5cbiAgICAgICAgPGgzPkdydXBvIDM8L2gzPlxuICAgICAgICA8c3Ryb25nPkFPUyAyMiBBTk9TIERBIE1BSU9SIEFOw4MgREEgVFdJVENIPC9zdHJvbmc+XG4gICAgICAgIDxwPk9JISBZYXNtaW0gXCJZYXlhaFwiIEluZ3JpZCBMYXJpc3NhIFNvdXphLi4uIFR1ZG8gYmVtIGNvbSB2b2PDqj8gRXNwZXJhbW9zIHF1ZSBzaW0hIEVzdMOhIMOpIHVtYSBwZXF1ZW5hIGhvbWVuYWdlbSDDoCBub3NzYSBBbsOjemluaGEgZG8gY2hhdCwgYSBlc3F1aXNpdGluaGEgZGUgMSw1NCBNLjwvcD5cbiAgICAgICAgPHA+RW0gbm9tZSBkZSB0b2RvIG8gR1JVUE8gMywgbsOzcyBlc3RhbW9zIGFxdWkgcGFyYSBsaGUgZGFyIFBhcmFiw6lucywgZGVzZWphciB1bSBGZWxpeiBBbml2ZXJzw6FyaW8gZSBhZ3JhZGVjZXIgbXVpdG8sIG1hcyBtdWl0byBtZXNtbyBwb3Igdm9jw6ogZXhpc3RpciEgR3Jhw6dhcyBhIHZvY8OqIGZpemVtb3MgYW1pZ29zLCBjb21wYXJzYXMgZGUgZ2FtZXMsIHBhcmNlaXJvcyBubyBjcmltZSBvcmdhbml6YWRvIGUgdGFtYsOpbSB1bWEgZmFtw61saWEgdmlydHVhbCBvbmRlIHZvY8OqIMOpIGVzc2VuY2lhbCE8L3A+XG4gICAgICAgIDxwPkRlc2RlIG8g4oCcdXV1VVV1dVVVVeKAnSBubyBjb21lw6dvIGRhIGxpdmUsIGF0w6kgbyDigJxvYnJpZ2FkYSBwb3IgaG9qZeKAmeKAmSBubyBncnVwbywgdm9jw6ogdG9ybmEgbyBub3NzbyBkaWEgbWVsaG9yLCDDqSBpc3NvIHF1ZSB0ZSB0cmFuc2Zvcm1hIGVtIHVtYSBwZXNzb2EgZ2lnYW50ZSwgcG9yIGRlbnRybyDDs2J2aW8uIFNlbXByZSBxdWUgdm9jw6ogZXN0aXZlciBwYXJhIGJhaXhvIGxlbWJyZS1zZSBxdWUgdm9jw6ogY3Jpb3UgdW1hIGNvbXVuaWRhZGUgZm9ydMOtc3NpbWEgZSB1bmlkYSBxdWUgdmFpIGVzdGFyIGzDoSBzZW1wcmUgcG9yIHZvY8OqLCBwb3IgdGFudG8gb3JndWxoZS1zZSBkaXNzby48L3A+XG4gICAgICAgIDxwPlByb2JsZW1hcyBzZW1wcmUgdsOjbyBhcGFyZWNlciBlIGlzc28gw6kgbm9ybWFsLCBvIHF1ZSByZWFsbWVudGUgaW1wb3J0YSDDqSBzZWd1aXIgZW0gYnVzY2EgZG8gcXVlIHRlIGZheiBmZWxpeiwgY29tIGNvcmFnZW0gZSBjb20gcGVzc29hcyBxdWUgcXVlcmVtIG8gc2V1IGJlbSBlIHRvcmNlbSBwZWxhIHN1YSBmZWxpY2lkYWRlITwvcD5cbiAgICAgICAgPHA+TnVuY2EgZGVzaXN0YSBkZSBzZXVzIHNvbmhvcywgbsOzcyBzYWJlbW9zIHF1ZSB2b2PDqiDDqSBjYXBheiBlIGVzdGFyZW1vcyB0ZSBhcG9pYW5kbyBlbSB0b2RhcyBhcyBzdWFzIGRlY2lzw7Vlcy4uLiBPcyBzZXVzIHNvbmhvcyBzZSB0b3JuYXJhbSBvcyBub3Nzb3Mgc29uaG9zISEhIEFwZXNhciBkZSB0b2RhcyBhcyBicmluY2FkZWlyYXMsIG7Ds3MgdGUgYW1hbW9zLjwvcD5cbiAgICAgICAgPHA+4oCcRGFxdWkgw6AgNTAgYW5vcyBlc3RhcmVtb3Mgc2VudGFkb3MgZW0gbm9zc2FzIGNhZGVpcmFzIGRlIGJhbGFuw6dvIGxlbWJyYW5kbyBkZSB2b2PDquKAnSwgZGFzIHN1YXMgbGl2ZXMsIGRhcyByaXNhZGFzIHF1ZSBkZW1vcyBqdW50b3MsIGRhcyBwaW5hZGFzIGRvIENTLCBkb3MgdGlyb3MgbWVudGlyb3NvcyBxdWUgYSBZYWxsZW4gYWNlcnRhdmEsIGRvcyBtb21lbnRvcyBkaWbDrWNlaXMgcXVlIGZvcmFtIHN1cGVyYWRvcyBxdWFuZG8gbyDigJxvaeKAnSBlY29vdSBub3MgZm9uZXMgZSBub3MgZGV1IGEgZ2FyYW50aWEgZGUgYm9ucyBtb21lbnRvcyBqdW50b3MuIEphbWFpcyBub3MgZXNxdWVjZXJlbW9zIGRlIGNvbW8gdm9jw6ogZm9pIGUgw6kgaW1wb3J0YW50ZSBwYXJhIG5vc3NvcyBkaWFzLjwvcD5cbiAgICAgICAgPHA+T2JyaWdhZG8gcG9yIG5vcyBwcm9wb3JjaW9uYXIgbW9tZW50b3MgaW5jcsOtdmVpcyBlbSBzdWEgY29tcGFuaGlhIGR1cmFudGUgw6BzIHRhcmRlcyBlIG5vaXRlcywgb2JyaWdhZG8gcG9yIG5vcyBwcmVzZW50ZWFyIGNvbSB1bWEgY29tdW5pZGFkZSBpbmNyw612ZWwgcXVlIMOpIG8gZ3J1cG8gMyEhISA8L3A+XG4gICAgICAgIDxzdHJvbmc+VklWQSBZQVlBSCEhISEhIDwvc3Ryb25nPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zaWdufT5Bc3M6IENvbXBhcnNhcyBkbyBWYWxkw6NvLCBHcnVwbyAzLi4uLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJmaXhlZFwiOiBcIkhvbWVfZml4ZWRfXzE1X0EtXCIsXG5cdFwiYXJ0aWNsZVwiOiBcIkhvbWVfYXJ0aWNsZV9fTzFTcnZcIixcblx0XCJncm91cFwiOiBcIkhvbWVfZ3JvdXBfXzJfa2czXCIsXG5cdFwic2lnblwiOiBcIkhvbWVfc2lnbl9fMVVuMHdcIixcblx0XCJlbW90ZVwiOiBcIkhvbWVfZW1vdGVfXzN5b00tXCIsXG5cdFwidGV4dFwiOiBcIkhvbWVfdGV4dF9fMXNDUWFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJmb290ZXJFbW90ZVwiOiBcIkhvbWVfZm9vdGVyRW1vdGVfXzNnRUJqXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcIm5pY2tcIjogXCJIb21lX25pY2tfXzNDbGFSXCIsXG5cdFwic3VidGl0bGVcIjogXCJIb21lX3N1YnRpdGxlX18zSTJ5SVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=