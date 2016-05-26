/**
 * Created by Yuval.b on 4/11/2016.
 */
function tinyLogger(spec) {
    let basicLogger = function(){
        for(let i in arguments) {
            console.log(arguments[i]);
        }
    };

    // set default option values
    let options = $.extend({
        globalFunctions: {
            'lg' : basicLogger
        }
    }, spec);

    function registerToGlobal(functionName, functionReference){
        window[functionName] = functionReference;
    };

    (function init() {
        for(let functionName in options.globalFunctions) {
            if(options.globalFunctions.hasOwnProperty(functionName)) {
                registerToGlobal(functionName, options.globalFunctions[functionName]);
            }
        }
    })();
}

export default tinyLogger;
