(function (document, window) {
    'use strict';
    var a = {
        init: function () {
            var myregexp = /href="([^"]+)"/ig,
                mystring = document.body.innerHTML,
                result;

            for (result = false; result = myregexp.exec(mystring);) {
                window.console.log(result);
            } while (result);
        }
    };

    a.init();
}(document, window))