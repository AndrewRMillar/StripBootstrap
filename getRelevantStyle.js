$("#run").click(function() {
  console.log("version 1.1");
  var checkbox = document.getElementById("checkbox").checked;
  var checkbox = document.getElementById("checkbox").checked;
  if (checkbox2) {
    var classs = ["a", "abbr", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "colgroup", "dd", "details", "dfn", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "header", "hr", "html", "i", "iframe", "img", "input", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "optgroup", "output", "p", "pre", "progress", "q", "samp", "section", "select", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul", "video"]
  }
  if (checkbox) {
    var Classes = getClasses();
    for (var i = 0; i < getClasses.length; i++) {
      classs.push(Classes[i]);
    }
    var classs = getClasses();
  } else {
    var classs = "" + document.getElementById("classs").value;
    classs = classs.replace(/\./g, "").replace(/\s+/g, " ");
    classs = classs.split(/ |,/);
  } 
  var style = "", stylexs = [], style768 = [], style992 = [], style1200 = [], 
      matches = [], res768 = [], res992 = [], res1200 = [],  
      re, bootxs = bsString, bootsm, bootmd, bootlg, classNotation = [], classsTexta;

  for (var i = 0; i < classs.length; i++) {
    classNotation.push("."+classs[i]);
  }
  classsTexta = document.getElementById("classs");
  classsTexta.value = classNotation.join(", ");
  console.log(classs);
  
  // first I'll all the media queries for the three different resulutions in 
  // three difierent arrays and remove them all from the library.

  //  768px small
  re = new RegExp("@media.\\(min-width:768px\\){(.+?\\})\\}", "g");
  while((m = re.exec(bootxs)) !== null){
    if (res768.indexOf(m[1]) === -1){
      res768.push(m[1]);
    }
  }
  bootxs = bootxs.replace(re, "");
  //  992px medium
  re = new RegExp("@media.\\(min-width:992px\\){(.+?\\})\\}", "g");
  while((m = re.exec(bootxs)) !== null){
    if (res992.indexOf(m[1]) === -1){
      res992.push(m[1]);
    }
  }
  bootxs = bootxs.replace(re, "");
  // 1200px large
  re = new RegExp("@media.\\(min-width:1200px\\){(.+?\\})\\}", "g");
  while((m = re.exec(bootxs)) !== null){
    if (res1200.indexOf(m[1]) === -1){
      res1200.push(m[1]);
    }
  }
  bootxs = bootxs.replace(re, "");

  res768 = res768.join("");
  res992 = res992.join("");
  res1200 = res1200.join("");

  // Now get the style for every class from all the css strings and put them in a resulting string 
  // when applicable inside their respective media queries 
  // @media (min-width:768px){}
  // @media (min-width:992px){}
  // @media (min-width:1200px){}


  style = getStyle(bootxs, classs);
  if (getStyle(res768, classs)) {
    style += "@media (min-width:768px){" + getStyle(res768, classs) + "}";
  }
  if (getStyle(res992, classs)) {
    style += "@media (min-width:992px){" + getStyle(res992, classs) + "}";
  }
  if (getStyle(res1200, classs)) {
    style += "@media (min-width:1200px){" + getStyle(res1200, classs) + "}";
  }

  // console.log(style);
  var result = document.getElementById("to_style");
  result.value = style;
});

// 
function getClasses() {
  // Get the html
  var html = "" + document.getElementById("classs").value, 
  res = [], re = /class="([^"]+)"/g
  // Get all the classes from the inserted html
  while((m = re.exec(html)) !== null){
    m[1] = m[1].trim();
    if (m[1].indexOf(" ") != -1) {
      m1 = m[1].split(" ");
      for (var i = 0; i < m1.length; i++) {
        if (res.indexOf(m1[i]) === -1){
          res.push(m1[i]);
        }
      }
      continue;
    }
    if (res.indexOf(m[1]) === -1){
      res.push(m[1]);
    }
  }
  return res;
}

// function for returning the style
function getStyle(styleStr, classes) {
  var res = [];
  for (var i = 0; i < classes.length; i++) {
  // TODO: adjust the regex to allow for comma seperated selectors: .some, .thing, .else {do:something;}

    // var re = new RegExp("\\." + classes[i] + "\\{[^\\}]+\\}", "g"), 
    var re = new RegExp("(?:\\.\\w*,)*(\\." + classes[i] + ")(?:,\\.\\w*)*(\\{[^\\}]+\\})", "g");
    if (styleStr.match(re) === null){
      continue;
    }
    while(m = re.exec(styleStr) !== null) {
      var m = m[1] + m[2];
      if (res.indexOf(m) === -1){
        res.push(m);
      }
    }

    // console.log("matches.length:", matches.length, "classes[i]:", classes[i]);
    // for (var j = 0; j < matches.length; j++) {
    //    // console.log("matches[j]", matches[j]);
    //    if (res.indexOf(matches[j]) === -1){
    //     res.push(matches[j]);
    //   }
    // }
  }
  return res.join("");
}
