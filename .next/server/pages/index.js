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
  console.log(_messages_messages_json__WEBPACK_IMPORTED_MODULE_3__.length);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed,
      children: "\uD83C\uDF82\uD83C\uDF88\uD83C\uDF81\uD83C\uDF1F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Feliz Anivers\xE1rio, Yayahuz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/yayahCoracao.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      children: ["\uD83D\uDC96 Feliz Anivers\xE1rio, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Yayahuz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 31
      }, this), "! \uD83C\uDF89"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,
      children: "Yayah, aqui est\xE3o algumas das mensagens escritas com muito carinho pela sua comunidade."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
          lineNumber: 26,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
          children: message.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `/${message.icon}.png`,
          alt: "",
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.emote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this)]
      }, message.nick, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/yayahCoracao.png",
        alt: "",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerEmote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), "Feito com muito amor por amigos, mods e grupos.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/yayahCoracao.png",
        alt: "",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footerEmote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/messages/messages.json":
/*!**************************************!*\
  !*** ./pages/messages/messages.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"nick\":\"Luki302\",\"message\":\"Não sou muito bom com textões mas vamos lá... Feliz aniversário!!!\",\"icon\":\"yayahTimida\"},{\"nick\":\"j0tinhaaa\",\"message\":\"Parabéns yayah!!! Obrigado por todas as lives esquisita Te amamos\",\"icon\":\"yayahCoracao\"},{\"nick\":\"guilhermee_glm\",\"message\":\"Parabéns esquisita, aproveita bastante o seu dia, você alegra o dia de milhares de brasileirinhos sua mulinha\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"baioneta2\",\"message\":\"Iasmin? Ingrid? Larissa? Enfim, seja o nome que for, obrigado pelas lives esquisitas, divertidas e cheio de bom conteúdo que você tem feito pra gente. Nesse dia, queria te desejar, primeiramente, saúde, se cuida tá! Além disso felicidades e muito sucesso tanto nas streams quanto no judô.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"BabizinhaCoachdeFerro\",\"message\":\"Oiee amiga 😚 sei que tu não gosta por isso estou aqui pra lembrar de que está ficando idosinha, espero que passe dos 55 anos e precise muito da ajuda dos outros...🖤 Brincadeiras a parte, parabéns pelo seu dia, feliz aniversário e tudo de melhor pra ti que mesmo fazendo a gente passar raiva com as jogabilidades continua sendo uma das melhores lives da twitch tanto é que tá entre as minhas 3 mais assistindas... Te amamos nossa mu?li?nha? 🖤🖤🖤 Fechados com gp3 e esfolapatos33🦆\",\"icon\":\"yayahTimida\"},{\"nick\":\"h3nriqu3l\",\"message\":\"yayahuz sua esquisita !! o jeito que voce faz tão bem para algumas pessoas, voce não tem noção, meus sinceros parabéns e feliz aniversário, que todos seus sonho se realize, continue sendo essa mina top que é, eu tenho uma enorme admirção por voce e creio que toda a tribo também, te amamos eterna esquisita !!!!!!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"narcuscupim77\",\"message\":\"Parabéns pelo seu dia yayah e por ser essa pessoa foda, mesmo sua live tendo um conteúdo precário é a melhor live, bora f1 qualquer dia desses, tmjjj\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"buttowski_\",\"message\":\"Você trouxe alegria pra minha vida quando eu não conseguia mais viver.\",\"icon\":\"yayahTimida\"},{\"nick\":\"yiogiro\",\"message\":\"O criminoso não está, muitas vezes, á altura do seu ato, no seu caso o seu tamanho n compete com tamanhas gameplays criminosas, parabéns yayah, nossa anã favorita <3\",\"icon\":\"yayahCoracao\"},{\"nick\":\"fcrfps\",\"message\":\"(Aff tá em textão) Oi Yayah feliz aniversário anãzinha, limpadora de aquário, gnoma de jardim, agricultora de Farmville, alpinista de poltrona, cantora de rádio de pilha, corretora de banco imobiliário, etc etc. Conheci sua live numa madrugada que você tava assistindo o kung fu panda e quando eu vi, já tava no terceiro filme e dando sub. Sua live me ajudou muito e sou muito grato a você por todos os momentos de felicidade que me proporcionou. Na sua live eu conheci novas pessoas, fiz novas amizades, e me ajudou a sair de um período de depressão. Gostaria de te dar um presente melhor, mas o que eu tenho pra te agradecer é essa mensagem e o meu prime, talvez te mande uns bits de aniversário rsrsrs. Muito obrigado por tudo esquisitinha mas querida do Brasil. ♥️♥️♥️\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"luis_bruxao\",\"message\":\"Feliz aniversário,Ingrid? graças a você consegui muitos amiguinhos, obrigado por estar ali com a gente mesmo nao estando nos seus dias mais alegres e mesmo assim fazer de tudo para tirar uma risada da galera, eu entrei para a comunidade tem pouco tempo mas já me sinto muito melhor, essa pandemia me destruiu e perdi muita coisa, estava querendo largar tudo, trabalho,emprego e ficar em casa até algo acontecer, mas quando cheguei vi que você não desistiu do judô mesmo depois de anos sem lutar e agora está focada nele novamente, você é inspiração pra mim menos na parte da esquisitisse, obrigado por tudo yayah, aproveite muito seu dia esquisita\",\"icon\":\"yayahTimida\"},{\"nick\":\"Detona_Pitbull\",\"message\":\"Salves yasmim. Feliz aniversário, que Deus te abençoe e te ilumine neste dia tão especial, vc tá crescendo (eu acho). Venho representando, na verdade, o grupo 0 do lindinho (33). Eu te conheci através dele e desde então tem sido minha companhia noturna (Isso até vc voltar pro judo, F). Suas lives me ajudaram bastante em um ano muito conturbado, vc foi minha companhia nas noites tristes e felizes, quando eu tava desanimado suas lives me animavam e quando meu dia estava ruim, eu ficava ansioso para sua live. Espero que vc consiga conciliar o judô com a live, pois ela ajuda a vida de muitas pessoas como a minha. Apesar de acompanhar o lindinho a mais tempo, eu dei sub na sua live (Mesmo sem ter prime) como uma forma de agradecer todas as noites incríveis e divertidas que vc me proporcionou, infelizmente o sub acabou mas futuramente quando eu tiver condições de ter prime, irei dar o resub (não se preocupe continuarei financiando as drogas kkk). É isso, curta seu dia e valorize quem ama vc, vc tem uma família incrível que aparenta te amar muito, eu espero que vc aproveite esse dia com eles. TMJ, amamos vc <3!! Anã, Esquisita, gnomo, elfo, drogada, yasmim \",\"icon\":\"yayahCoracao\"},{\"nick\":\"Maralberton\",\"message\":\"Feliz aniversário anã, continue sendo essa pessoa incrível, te amamos muito esquisita \",\"icon\":\"yayahTimida\"},{\"nick\":\"cukamongacaio\",\"message\":\"Feliz aniversário Yayah, desejo tudo de bom pra vc, continue sendo essa pessoa iluminada q vc é, deixando o dia e a vida de muitas pessoas melhor, mais feliz, vc com certeza muda as nossas vidas para melhor. Nós amamos vc! <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Sedex\",\"message\":\"Yayah, obrigado de coração por tudo, você merece tudo de melhor nessa vida, conta com a gente, tamo junto\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"mfgameplays\",\"message\":\"Parabéns esquisita!\\nDesejo tudo de bom de bom na sua vida. \\n Muito obrigado pelos momentos de diversão que vc nos proporciona, estou passando por uma barra pesada e a única coisa que ainda me traz alegrias são as suas lives. Mesmo perdendo Q.i nessa stream de qualidade precária, eu sempre vou acompanhar a anã judoca globlal que não sabe falar caxaxa. tmj yasmin \\n ps. abaixa a sensibilidade do volante no euro truck, assim vc consegue se manter na melhor na faixa, ahhhh obrigado por me capotar no euro truck online. (ESCOLTA 33)\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Cejota092\",\"message\":\"Ya?Yah? Salve esquisita. Passando pra lhe desejar os parabéns e tudo de melhor nesse mundo, pois você merece! Te conheci através do lindinho e que bom que ele apresentou você a nos. Você é mais uma boa surpresa em nosso ano e nesses tempos de pandemia,onde estamos sempre procurando um pontinho de luz e você é um desses pontinhos,com seu jeitinho tímido, estranho,mas tão encantador e fofo. Quando você não estiver bem,para e olha o tanto de pessoas que você torna os dias menos doloridos e saiba que essas mesmas pessoas estão aqui pra você também,pra quando você precisar. Somos esquisitos,mas somos família, sim somos uma família,uma família que você construiu. Abraços e tudo de bom pra você lindinha,que você continue essa pessoa linda por fora e por dentro! Bjs. Grupo 3 🤝yayah,pra sempre!\",\"icon\":\"yayahBoba\"},{\"nick\":\"Tolinha23\",\"message\":\"Tamojunto Ingrid, imagino o quão difícil deve ser ser uma mulher no mundo de streams, sofrendo preconceito, tudo que você faz acaba sendo aumentado, como o caso da Hyalla. Mas gosto muito do seu trabalho, foi a primeira stream que eu dei sub e vai ser a unica que vou continuar dando, sua esquisitisse e mulisse são únicas e fazem com que qualquer um se sinta bem na sua live, o chat é engraçado, tem pessoas maravilhosas, espero que você saiba o quanto é querida por nós. Tmj ingrid larissa, muito boa sorte no judô, nas streams, na vida, em tudo! PARABÉNS ANÃ PARAGUAIA\",\"icon\":\"yayahBoba\"},{\"nick\":\"Claysonrf\",\"message\":\"Meus parabéns anã esquisita, quem diria que essa Live iria me viciar tanto, que tenha muitos anos de vida para continuar com essa Live precária.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Viniiciusalm\",\"message\":\"Feliz aniversário Yayah, muita saúde e paz na tua vida, obrigado por todos esses dias de live trazendo alegria pra nossa tarde/noite, você pode não ter a noção mas ter suas lives traz alegria pra vida de muita gente. Você é uma pessoal muito especial, Tmj! ❤️\",\"icon\":\"yayahTimida\"},{\"nick\":\"Jymps\",\"message\":\"Oii Yayah, obrigado por ser essa streamer excepcional  <3 Sempre quando quero fugir do caos de outras lives ou de coisas da vida, eu vou para sua live, vc sempre passa uma energia boa :)\",\"icon\":\"yayahBoba\"},{\"nick\":\"uvitto\",\"message\":\"Iaeee yaya, Primeiramente queria te desejar um feliz aniversário e agradecer por você melhorar meus dias quando eu não estava me sentindo muito feliz, espero que você cresça cada dia a mais, muito sucesso e saúde ♥️\",\"icon\":\"yayahCoracao\"},{\"nick\":\"tekazin_pjl\",\"message\":\"Feliz aniversário yayas, aproveita bem, por que dos 25 você não passa. Tamo junto cerejinha do chat, você faz os nossos dias melhores.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"PauloEduardo_YT\",\"message\":\"Feliz aniversário esquisita q deus continue ti iluminando e continue sendo essa pessoa q vc é, e se ta recebendo mts critica é pq vc ta conquistando coisa q as outras pessoas ñ conseguiram. Foquete ñ tem ré A Tribo cuida da tribo\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Paulovs19\",\"message\":\"Parabéns esquisita muitos anos de vida, que você curta muito esse dia especial e que você continue sendo essa pessoa incrível que você é, e que você saiba que com toda sua esquisitice a gente te adora!!\",\"icon\":\"yayahBoba\"},{\"nick\":\"Twichtlemon\",\"message\":\"Yayah feliz aniversário, te conheci pelo lindinho e acabei preferindo sua live estava passando por problemas pessoais na época e toda vez q eu e te chamava de esquisita,anã etc sentia que estava no lugar certo com as pessoas certas, gosto muito de ser um dos esquisitos da sua live muitos anos de vida muito sucesso nessa live de qualidade duvidosa. Um abraço um bj pra vc e pra sensei e pra todos aí amo vc  <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"salamanderfps\",\"message\":\"Ya? yah? parabéns garotinha, que você ganhe ainda mais medalhas no judô e construa uma comunidade cada vez maior na twitch, vc é braba demais, te amo esquisita <3\",\"icon\":\"yayahBoba\"},{\"nick\":\"cebola182\",\"message\":\"yayah, seja muito feliz sempre, é o meu desejo para seu aniversário! muito sucesso sempre, e continue essa pessoa que nos contagia e nos alegra ♡ uma pessoa que nunca nos deixou na mão, e é algo que quero sempre fazer por ti! conte sempre comigo pra tudo, você consegue alcançar tudo que desejar! você é gigante, um beijo.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"gateu_\",\"message\":\"Parabéns yayah, muita luz e paz nesse seu dia tão especial, muitos anos de vida pra vc. Mesmo sem saber vc me ajudou muito com suas lives quando eu perdi minha mãe. N falo muito no chat, mesmo assim sei q conheci pessoas muitos especiais no chat. Vc e incrível e merece tudo q conquistou e ainda vai conseguitar. Amo vc e todos q estão no chat❤️❤️\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Hélio Arkyh4n\",\"message\":\"Opa, sou o Hélio do GP 3 e o Arkyh4n da Live, quero falar uma coisa. Muito obg, vc é uma pessoa que consegue alegrar minhas noites e tardes agora. Sou de BsB e as coisas aqui estão complicadas, assim como no país todo, por isso eu agradeço por conseguir me ajudar com suas lives, me fazer rir e tudo mais. Continue sendo essa pessoa incrível que vc é, nunca deixe ninguém falar nd ao contrário do que eu e todos os subs e o xet falamos para vc! Continue lutando pelo seus sonhos e que nos apoiamos vc sempre, sem live, treinando, cozinhando ou até tentando dirigir! Ya yah FELIZ ANIVERSÁRIO!!!! APROVEITA QUE HJ É SEU DIA!!!!!!\",\"icon\":\"yayahBoba\"},{\"nick\":\"buchechada (xetdayayah)\",\"message\":\"Eai, anãzinha corna, bom... Acho que eu sou um bom exemplo de pessoa que, além de ter te conhecido e te achado fantástica, também achei sua comunidade fantástica e fui muito acolhido por ela. Até alguns meses atrás eu realmente não tinha muitos motivos pra sorrir, e sua live era a responsável por essa magia nos meus dias. Eu sempre ri do início ao fim das suas streams, do 'OI OI OI' até a apologia a drogas, e confesso que hoje não existe uma live que eu assista mais do que a sua. Quando eu não tinha grana pra dar sub, fiz o XetDaYayah no TT, pra poder de alguma forma ajudar seu trampo mesmo que não financeiramente, e quando descobriram meu Nick na Twitch, o Luki e o chat pediram e eu ganhei um giftsub, em um dia que vi que estava no lugar certo e apoiando a streamer certa. Agora já estou melhor, consegui um estágio, voltei a ter vontade de estudar e já posso devolver pro chat o amor e os presentes rs. Você merece tudo que tá conquistando, você é grandona (apesar dos 1,54) e ajuda a colorir o dia cinza de muitas e muitas pessoas. Seu conteúdo é precário, mas é necessário para muitos, nós amamos DEMAIS. Obrigado por mostrar pra Twitch que o diferente também brilha, e obrigado por aceitar cuidar da tribo, da mesma maneira que cuidaremos de você. Você é GOD demais e vai longe, esquisita :) Feliz aniversário!!! 💜💜💜\",\"icon\":\"yayahBoba\"},{\"nick\":\"jefrinx\",\"message\":\"oi yayah, feliz aniversário anãzinha. te conheci graças ao lindinho em setembro (ou algo assim) de 2020,uma das piores épocas da minha vida, meu vô faleceu e minha vó descobriu que tem diabetes, e eu me assumi bi e sofri um preconceito do caralho no ead e em tds os lugares, e em novembro fui diagnosticado com depressão e posso dizer que vc, o lindinho, o gau e uns amg meu salvaram minha vida mano. quando conheci sua live ja me apaixonei por ela e pela sua comunidade. e em janeiro dei sub e entrei pero famoso gp 3, desde então me aproximei muito de geral de lá, principalmete o sedex. queria te parabenizar pela mulher do caralho q tu é, passar pelo que vc passou não é mesmo para qualquer um, vc é foda, inspiração demais, me incentiva a correr atras dos meus sonhos que vou consegui. apesar do seu tamanho, o mundo ainda vai ser pequeno para vc, vc vai conquistar muita coisa foda, pq tu eh foda e n deixa ngm te fazer pensar o contrario. obg por td. bjs\",\"icon\":\"yayahTimida\"},{\"nick\":\"Leo_Botteon\",\"message\":\"Ya? Ya? U? Z? É amiga? É amigona? Estou aqui para te desejar um feliz aniversário, que você tenha um ano incrível e consiga realizar todos os seus sonhos, tanto pessoais como profissionais nas lives e no judô. Estaremos sempre apoiando você. Também queria agradecer por todas as alegrias e risadas que você me trouxe, em fevereiro eu perdi o meu pai e as suas lives me fizeram rir e me deram o apoio que eu precisava para passar por isso. Você criou uma comunidade incrível, dentro do grupo 3 eu também fiz amizade com muitas pessoas, com quem eu jogo e converso diariamente. Isso realmente não tem preço. Muito obrigado, de verdade, por cada risada que eu dei em um dia que eu estava triste. Não tenho certeza do quanto os streamers sabem disso, mas vocês realmente salvam vidas. E você é GI GAN TES CA, obviamente não em altura, mas como uma pessoa incrível. Que seu dia seja especial e, principalmente, que este ano seja especial e traga muitas alegrias para você e para nós, que com certeza estaremos felizes se você estiver. Estamos sempre com você!!!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"VALETSSS\",\"message\":\"Paarabéns Yayah u? z? Que você continue sendo essa pessoa iluminada que alegra a vida te tanta gente, te desejo muitos anos de vida, saúde, alegria, paz, sucesso, amor e tudo de bom!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Kevin_wv\",\"message\":\"Oi. Desculpa, sei que era pra ter enviado a mensagem aqui, más infelizmente ela não coube aqui. Aqui tem limite de linhas, então coloquei a mensagem em um twitLonger e vou deixar o link aqui: Link da mensagem: https://www.twitlonger.com/show/n_1srksju?new_post=true\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Grunwald_Z\",\"message\":\"Oi Yayah, conheci suas lives no começo desse ano e desde então não consegui mais parar de te acompanhar. O seu jeito peculiar realmente fez eu me identificar. Agradeço demais por você alegrar meus dias e te admiro muito como streamer e como pessoa. Parabéns por tudo que já conquistou até hoje através das lives. Te desejo um feliz aniversário e que você aproveite bastante seu dia. Tmj Yayah!!! \",\"icon\":\"yayahTimida\"},{\"nick\":\"Tevinhod\",\"message\":\"Primeiramente queria agradecer por você ser quem você é, sua alegria, sua simpatia e simplicidade transformam nossos dias, te conheci através do Lindinho tem pouco tempo, mas nesse pouco tempo já foi o bastante pra ver a pessoa incrível que tu é, eu nunca tinha dado sub em nenhum canal, mas me apeguei tanto as suas lives que fiz questão de te agradecer com um pequeno gesto de carinho, que não se compara ao tanto de entretenimento e companhia que você proporciona! Tu mudou o meu ano e espero passar muito tempo ainda vendo as patetadas e esquisitices da tua live, parabéns sua mula, e que você realize muitos e muitos sonhos e que Deus te abençoe cada vez mais e mais, você merece tudo de bom!!! Tmjjjj\",\"icon\":\"yayahCoracao\"},{\"nick\":\"FLASH-ERRADA\",\"message\":\"Parabéns Yayahuz te conheci através do lindinho e hoje sigo mais você por ser essa menina especial e faz alegria de muito de nois com sua lerdeza você merece tudo de bom nessa sua carreira pela dedicação por esta fazendo duas coisas que ama ao mesmo tempo. E não abandona nois que te ama obrigado . Feliz aniversário Deus abençoe sua você e te der muitos anos de vida  Felicidades 💞\",\"icon\":\"yayahCoracao\"},{\"nick\":\"cheatzxx\",\"message\":\"Ya? Yah? U?suária de coca, salve do cheatz. Só vim aqui parabenizar e agradecer por você produzir lives tão precárias que ficam boas, continue sendo essa esquisita que o chat adora ver, e por favor poderia parar de bater no EuroTruck, minha bike já tá todo remendada de pegar carona na traseira do caminhão\",\"icon\":\"yayahTimida\"},{\"nick\":\"CarretaFuraSION\",\"message\":\"Olá Yayah, sou muito novo na live, mas quero te desejar um feliz aniversário, você é uma pessoa incrível que vêm conquistando cada vez mais o seu espaço com o seu carisma e jeito de ser, que bom que você encontrou uma comunidade acolhedora na tribo e no CS, eu por vim do lol sei como a comunidade é tóxica e desunida, principalmente com as mulheres, vc está gigante e o q vc faz é muito importante para serem representadas, continue com esse trabalho, o chat irá te apoiar independente dos seus objetivos, seja no judô , nas streams ou nas suas esquisitices, quando se sentir desanimada, principalmente por conta de comentários de alguns nerds do chat, não esqueça o quão prazeroso é mandar um morra Luki, brinks não me bane Luki, e não deixe se abalar, vc é uma mulher pica com os seus 1,40 e queixinho de bunda <3\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"deercheerupzinho24\",\"message\":\"Feliz aniversário yayah! Muita saúde, paz, felicidades e sucesso na sua vida. Que vc continue sendo essa menina fofa, simpática e que transborda alegria por onde passa. Sua comunidade fica muito contente em saber que vc está feliz depois de tudo que passou. A tribo cuida da tribo e  vc já faz parte dela, pode ter certeza que vc está rodeada de pessoas boas véi, um grande abraço e aproveita o seu dia!\",\"icon\":\"yayahCoracao\"},{\"nick\":\"Albi2K\",\"message\":\"Felicidades para você, por este dia tão especial que é o seu aniversário. Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados. Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim. Com todas as minhas forças, eu te desejo um feliz aniversário! Que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias. Parabéns por hoje, mas felicidades sempre.\",\"icon\":\"yayahTimida\"},{\"nick\":\"thurzlnnnnn\",\"message\":\"Oi Yayah, vim aqui desejar um feliz aniversário e apesar da mensagem curta gosto e acompanho muita suas lives e ultimamente suas lives e as do lindinho são as únicas coisas q me alegram no dia a dia e é isso, é nois e boa live.\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Kioo_\",\"message\":\"Boa noite yaya, antes de mais nada queria te agradecer pela a companhia diária, esses últimos 2 meses na sua comunidade foi uma das melhores coisas que tem acontecido ultimamente. Meus mais sinceros parabéns, que seu novo ano de vida seja repleto de conquistas, seja no judô ou nas streams que vc tenha o maior sucesso do mundo. Sem prolongar muito, tu é foda, seja sempre assim, mais uma vez obrigado. <3\",\"icon\":\"yayahBoba\"},{\"nick\":\"BiscoitaoShan\",\"message\":\"Oi Yayah. Feliz aniversário, obrigado por tornar minhas noites mais felizes, eu sou muito grato por ter te conhecido, saiba que seu trabalho vai muito além de fazer lives, se trata de tornar o dia das pessoas um pouco melhor e mais leve. Você é uma mulher forte, carismática, com um sorriso lindo. Parabéns por mais esse ano de vida.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"stephanieanet\",\"message\":\"feliz aniversario princesa linda esquisita <3 \",\"icon\":\"yayahBoba\"},{\"nick\":\"luqtaa\",\"message\":\"yayah, nesses últimos meses eu tava preenchido por um puta vazio dentro de mim, n sabia de jeito nenhum como fazer isso ser preenchido, tentei me matar até, mas conheci sua live pelos filmes de harry potter e me apaixonei por tudo, comunidade, pessoa que vc é e representa, e acima de tudo pelo seu carisma, obrigado por existir esquisitinha, parabéns pelos 22, obrigado por me fazer esquecer de como a vida era antes, você é incrível.\",\"icon\":\"yayahTimida\"},{\"nick\":\"xJonGomesBRx\",\"message\":\"Oi Esquisitinha, meu nome é Jonathan, e vim aqui mandar uma mensagem de aniversário pra você, pois não podia deixar passar em branco essa data. Acompanho você a pouco tempo, vão fazer quatro meses, sou sub de 1 mês, e queria dizer que você se tornou uma pessoa muito especial pra mim, sempre alegrando meus dias com esse conteúdo precário que é suas lives kkkk, mas que a torna mais divertida ainda. Nunca tinha dado sub pra ninguém em anos que assisto streams, mas depois que comecei a te acompanhar, tive que escorregar o sub kkkk. Então, queria te desejar tudo de bom na sua vida, que você tenha muito sucesso, pois você merece, feliz aniversário, e tmj Yayah ❤\",\"icon\":\"yayahAYAYA\"},{\"nick\":\"Felipesantsss\",\"message\":\"Oi Ingrid Larissa vulgo Yayahuz, venho aqui te desejar um feliz aniversário, que papai do céu te abençoe sempre. Aproveite muito seu dia ❤️❤️❤️\",\"icon\":\"yayahBoba\"},{\"nick\":\"joao1331\",\"message\":\"Ya? ya? é amiga? é amigona? Talvez tu não saiba, mas sim, sentimos como se tu fosse nossa amiga. Cheguei há pouco tempo e, apesar de acompanhar muitos streamers, pela primeira vez senti que precisava participar da tua comunidade (acho que isso diz muita coisa). Aqui muitos de nós damos risadas, torcemos e ficamos feliz com o casal yadinho, falamos qualquer porcaria que vier à cabeça, aprendemos com a sensei e nos divertimos contigo. É rápido e fácil perceber a sinceridade na tua pessoa e a bondade que tu transparece. Assim como os amigos que agora te acompanham, fica difícil não criar carinho por ti. Feliz Aniversário.\",\"icon\":\"yayahCoracao\"},{\"nick\":\"gus0712\",\"message\":\"Opa Yayah, te acompanho desde o final de Dezembro e mesmo não sendo por muito tempo depois de assistir algumas de suas lives decidi ficar, pois me divirto muito com você, o chat e a tribo. Vim aqui te desejar um feliz aniversário, muita saúde até os 55 anos, agradecer por todas as lives que me fazem mais feliz e todas as pessoas maravilhosas que eu conheci pela live, Sensei, Hyalla, Sté, Junior entre outros ai. Obrigado mesmo Yayah e parabéns!!! TMJ\",\"icon\":\"yayahTimida\"}]");

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
	"main": "Home_main__1x8gC",
	"article": "Home_article__O1Srv",
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
	"logo": "Home_logo__1YbrH"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJIb21lIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwibGVuZ3RoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZml4ZWQiLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFpbiIsIm1hcCIsIm1lc3NhZ2UiLCJhcnRpY2xlIiwibmljayIsInRleHQiLCJpY29uIiwiZW1vdGUiLCJmb290ZXIiLCJmb290ZXJFbW90ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBRTdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0RBQVEsQ0FBQ0MsTUFBckI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVFFO0FBQUksZUFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF0QjtBQUFBLHFFQUN3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVdFO0FBQUksZUFBUyxFQUFFSCw4REFBTSxDQUFDSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBY0U7QUFBTSxlQUFTLEVBQUVKLDhEQUFNLENBQUNLLElBQXhCO0FBQUEsZ0JBQ0dQLG9EQUFRLENBQUNRLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWjtBQUFTLGlCQUFTLEVBQUVQLDhEQUFNLENBQUNRLE9BQTNCO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFUiw4REFBTSxDQUFDUyxJQUF0QjtBQUFBLG9CQUE2QkYsT0FBTyxDQUFDRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFFVCw4REFBTSxDQUFDVSxJQUF4QjtBQUFBLG9CQUNHSCxPQUFPLENBQUNBO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFO0FBQUssYUFBRyxFQUFHLElBQUdBLE9BQU8sQ0FBQ0ksSUFBSyxNQUEzQjtBQUFrQyxhQUFHLEVBQUMsRUFBdEM7QUFBeUMsbUJBQVMsRUFBRVgsOERBQU0sQ0FBQ1k7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBLFNBQXlDTCxPQUFPLENBQUNFLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQXlCRTtBQUFRLGVBQVMsRUFBRVQsOERBQU0sQ0FBQ2EsTUFBMUI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUMsRUFBakM7QUFBb0MsaUJBQVMsRUFBRWIsOERBQU0sQ0FBQ2M7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGtFQUdFO0FBQUssV0FBRyxFQUFDLG1CQUFUO0FBQTZCLFdBQUcsRUFBQyxFQUFqQztBQUFvQyxpQkFBUyxFQUFFZCw4REFBTSxDQUFDYztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zb2xlLmxvZyhtZXNzYWdlcy5sZW5ndGgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXhlZH0+XG4gICAgICAgIPCfjoLwn46I8J+OgfCfjJ9cbiAgICAgIDwvZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GZWxpeiBBbml2ZXJzw6FyaW8sIFlheWFodXo8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi95YXlhaENvcmFjYW8ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIPCfkpYgRmVsaXogQW5pdmVyc8OhcmlvLCA8c3Ryb25nPllheWFodXo8L3N0cm9uZz4hIPCfjolcbiAgICAgIDwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxuICAgICAgICBZYXlhaCwgYXF1aSBlc3TDo28gYWxndW1hcyBkYXMgbWVuc2FnZW5zIGVzY3JpdGFzIGNvbSBtdWl0byBjYXJpbmhvIHBlbGEgc3VhIGNvbXVuaWRhZGUuXG4gICAgICA8L2gyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcbiAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfSBrZXk9e21lc3NhZ2Uubmlja30+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubmlja30+e21lc3NhZ2Uubmlja308L2gzPlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgIHttZXNzYWdlLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8aW1nIHNyYz17YC8ke21lc3NhZ2UuaWNvbn0ucG5nYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuZW1vdGV9Lz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi95YXlhaENvcmFjYW8ucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyRW1vdGV9Lz5cbiAgICAgICAgRmVpdG8gY29tIG11aXRvIGFtb3IgcG9yIGFtaWdvcywgbW9kcyBlIGdydXBvcy5cbiAgICAgICAgPGltZyBzcmM9XCIveWF5YWhDb3JhY2FvLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckVtb3RlfS8+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiZml4ZWRcIjogXCJIb21lX2ZpeGVkX18xNV9BLVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiYXJ0aWNsZVwiOiBcIkhvbWVfYXJ0aWNsZV9fTzFTcnZcIixcblx0XCJlbW90ZVwiOiBcIkhvbWVfZW1vdGVfXzN5b00tXCIsXG5cdFwidGV4dFwiOiBcIkhvbWVfdGV4dF9fMXNDUWFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJmb290ZXJFbW90ZVwiOiBcIkhvbWVfZm9vdGVyRW1vdGVfXzNnRUJqXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcIm5pY2tcIjogXCJIb21lX25pY2tfXzNDbGFSXCIsXG5cdFwic3VidGl0bGVcIjogXCJIb21lX3N1YnRpdGxlX18zSTJ5SVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9