var a = {
    init: function () {
        'use strict';
        /**/
        var myregexp = /href="([^"]+)"/ig,
            mystring = 'nyuNYU<a title="katt ide" HREF="http://kocsan.hu">Cica</a>kedsadas <a href="www.index.hu">Hello</a>',
            result;

        do {
            result = myregexp.exec(mystring)
            console.log(result);
        } while(result);
    }
};

a.init();