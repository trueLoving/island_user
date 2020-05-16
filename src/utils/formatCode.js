import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";


/**
 * 格式化JavaScript代码
 * @param {String} stringValue JavaScript代码
 */
function formatJavaScript(stringValue) {
    return prettier.format(stringValue, {
        parser: "babel",
        plugins: [parserBabel],
    });
}

/**
 * 格式化C代码
 * @param {String} stringValue C代码
 */
function formatC(stringValue) {
    return "";
}

/**
 * 格式化HTML代码
 * @param {String} stringValue HTML代码
 */
function formatHTML(stringValue) {
    return ""
}

/**
 * 格式化Java代码
 * @param {String} stringValue Java代码
 */
function formatJava(stringValue) {
    return "";
}

/**
 * 格式化CSS代码
 * @param {String} stringValue CSS代码
 */
function formatCSS(stringValue) {
    return "";
}

export default (mode, stringValue) => {

    mode = mode.toLowerCase();

    let result = "";

    switch (mode) {
        case 'html': break;
        case 'css': break;
        case 'javascript':
            result = formatJavaScript(stringValue);
            break;
        case 'x-c':
            result = formatC(stringValue);
            break;
        case 'x-java': break
        default:
            break;
    }

    return result;

}