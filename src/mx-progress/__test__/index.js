/*
    generate by magix-combine@3.7.0: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-progress/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
ver:1.3.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-progress</h2><h3>默认情形</h3><div class=\"B ag\"><div class=\"Z\" mx-view=\"mx-progress/index?value=0.36\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.36\"\n    class=\"fl\"/&gt;</pre></div><h3 class=\"f\">禁用</h3><div class=\"B ag\"><div class=\"Z\" mx-view=\"mx-progress/index?value=0.05&disabled=true\"></div></div><div class=\"B\"><div>HTML Code:</div><pre>&lt;mx-progress\n    value=\"0.05\"\n    disabled=\"true\"\n    class=\"fl\"/&gt;</pre></div>","subs":[]},
    render: function () {
        var me = this;
        me.updater.digest();
    }
});

});