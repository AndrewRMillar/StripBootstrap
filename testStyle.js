var testStyle = ".aaa{bbb:ccc;ddd:fff;eee:ggg;}.aab{bbc:ccd;ddf:ffe;eeg:ggh;}@media screen and (min-width:1100){.aaa{bbb:ccc;ddd:fff;eee:ggg;}.aab{bbc:ccd;ddf:ffe;eeg:ggh;}}@media screen and (min-width:900){.aaa{bbb:ccc;ddd:fff;eee:ggg;}.aab{bbc:ccd;ddf:ffe;eeg:ggh;}}@media screen and (min-width:700){.aaa{bbb:ccc;ddd:fff;eee:ggg;}.aab{bbc:ccd;ddf:ffe;eeg:ggh;}}@media screen and (min-width:500){.aaa{bbb:ccc;ddd:fff;eee:ggg;}.aab{bbc:ccd;ddf:ffe;eeg:ggh;}}"
// var regex = new RegExp("/(@media[^{]+{)(.+?\}\})", "g");
// var results = testStyle.match(regex);

// // variable = "aaa";
// // regex = new RegExp("((?:@media[^\{]+\{)?\." + variable + "\{[^\}]+\})", "g");
// // first put all the media queries for the three different resulutions in variable then remove them all
// // >768px extra small
// var regexxs = new RegExp("(\."+ +"[^{]+{.+?\})", "g");
// //  768px small
// var regexsm = new RegExp("@media.\(min-width:768px\){(.+?)\}\}", "g");
// //  992px medium
// var regexmd = new RegExp("@media.\(min-width:992px\){(.+?)\}\}", "g");
// // 1200px large
// var regexlg = new RegExp("@media.\(min-width:1200px\){(.+?)\}\}", "g");
