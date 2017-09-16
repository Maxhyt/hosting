// ==UserScript==
// @name         Captcha Auto
// @namespace    auto.captcha
// @version      1.0
// @description  try to take over the world!
// @author       Maxhyt
// @match        http://vmoney.site/showadv.php*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var get = /chs\/([0-9])\.png/;
    var target1 = document.getElementById("cimg1").getElementsByTagName("img")[0].getAttribute("src");
    var match1 = get.exec(target1);

    var target2 = document.getElementById("cimg2").getElementsByTagName("img")[0].getAttribute("src");
    var match2 = get.exec(target2);

    var target3 = document.getElementById("cimg3").getElementsByTagName("img")[0].getAttribute("src");
    var match3 = get.exec(target3);

    var target4 = document.getElementById("cimg4").getElementsByTagName("img")[0].getAttribute("src");
    var match4 = get.exec(target4);

    var answer = match1[1] + match2[1] + match3[1] + match4[1];

    $("input[name=capcha]").val(answer);
    $("input[value=CONTINUE]").click();
    location.href="";
})();