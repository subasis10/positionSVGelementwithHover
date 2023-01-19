let svgArray = [
  /*  {
    path: "./assets/Postgresql_elephant.svg",
    type: "image/svg+xml",
    cx: "150",
    cy: "150",
    r: "200",
    viewbox: "-13600 -5700 28000 7000",
    circleClass: "normal",
  }, */
  /* {
    path: "./assets/Django.svg",
    type: "image/svg+xml",
    viewbox: "-2300 -2700 8000 5000",
    circleClass: "normal",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /* {
    path: "./assets/Node.js_logo .svg",
    type: "image/svg+xml",
    viewbox: "-2900 -900 8000 5000",
    circleClass: "normal",
  }, */
  /*  {
    path: "./assets/Adobe_Illustrator_CC_icon.svg",
    type: "image/svg+xml",
    cx: "120",
    cy: "130",
    r: "240",
    viewbox: "-7800 -730 15000 5000",
    circleClass: "normal",
  }, */
  /* {
    path: "./assets/PHPlogo.svg",
    type: "image/svg+xml",
    cx: "150",
    cy: "150",
    r: "200",
    viewbox: "-2800 -3500 15000 5000",
    circleClass: "normal",
  }, */
  /*  {
    path: "./assets/MySQL_logo.svg",
    type: "image/svg+xml",
    documentId: "mySqlDoc",
    viewbox: "-9050 -2850 18000 3500",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /* {
    path: "./assets/docker.svg",
    type: "image/svg+xml",
    cx: "150",
    cy: "150",
    r: "200",
    viewbox: "-4750 -3150 14000 3505",
    circleClass: "normal",
  }, */
  /* {
    path: "./assets/Wordpress-Logo.svg",
    type: "image/svg+xml",
    documentId: "wordpressDoc",
    cx: "150",
    cy: "150",
    r: "200",
    viewbox: "-2200 -1600 5000 2500 ",
    circleClass: "normal",
  }, */
  /* {
    path: "./assets/laravel.svg",
    type: "image/svg+xml",
    cx: "40",
    cy: "30",
    r: "70",
    viewbox: "-2950 -500 4000 5000 ",
    circleClass: "normal",
  }, */
  /* {
    path: "./assets/Git-logo.svg",
    type: "image/svg+xml",
    documentId: "gitDoc",
    viewbox: "-8050 -1700 10000 5000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /*  {
    path: "./assets/kubernetes.svg",
    type: "image/svg+xml",
    documentId: "kubernetesDoc",
    viewbox: "-8000 -4600 18000 5000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  {
    path: "./assets/Figma-logo.svg",
    type: "image/svg+xml",
    viewbox: "-2600 -3500 18000 5000 ",
    cx: "90",
    cy: "150",
    r: "280",
    x: " 100",
    y: "100",
    viewbox: "-2500 -3500 18000 5000 ",
    circleClass: "normal",
  },
  /* {
    path: "./assets/Adobe_Photoshop_CC_icon.svg",
    type: "image/svg+xml",
    documentId: "photoDoc",
    viewbox: "-4500 -1400 15000 5000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /*  {
    path: "./assets/Oracle_logo.svg",
    type: "image/svg+xml",
    documentId: "oracleDoc",
    viewbox: "-4900 -2400 12000 5000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /* {
    path: "./assets/Typescript_logo_2020.svg",
    type: "image/svg+xml",
    documentId: "typescriptDoc",
    viewbox: "-15500 -4200 35000 15000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /* {
    path: "./assets/Trello_logo.svg",
    type: "image/svg+xml",
    documentId: "trelloDoc",
    viewbox: "-5500 -3500 10000 5000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /* {
    path: "./assets/Power_bi_logo_black (3).svg",
    type: "image/svg+xml",
    documentId: "biDoc",
    viewbox: "-1500 -150 2000 2000 ",
    cx: "150",
    cy: "150",
    r: "200",
  }, */
  /*  {
    path: "./assets/React-icon.svg",
    type: "image/svg+xml",
    cx: "150",
    cy: "150",
    r: "100",
    circleClass: "normal",
    viewbox: "-1050 -350 1500 2000 ",
  }, */
  /*   {
    path: "./assets/swift-vertical.svg",
    type: "image/svg+xml",
    cx: "-160",
    cy: "405",
    r: "70",
    viewbox: "-2550 -800 4500 2000 ",
    circleClass: "normal",
  }, */
  /*  {
    path: "./assets/google_cloud-ar21.svg",
    type: "image/svg+xml",
    documentId: "cloudDoc",
    viewbox: "-2100 -500 3500 2000 ",
  },
  {
    path: "./assets/Tensorflow_logo.svg",
    type: "image/svg+xml",
    documentId: "tensorDoc",
    viewbox: "-900 -720 2500 2000 ",
  },
  {
    path: "./assets/Gsuite_logo.svg",
    type: "image/svg+xml",
    documentId: "gsuiteDoc",
    viewbox: "-7200 -7620 20000 10000 ",
  }, */
  /* {
    path: "./assets/Java-Logo.svg",
    type: "image/svg+xml",
    cx: "120",
    cy: "130",
    r: "240",
    viewbox: "-12400 -5320 20000 10000 ",
    circleClass: "normal",
  }, */
];
function renderSVG() {
  svgArray.map((svgItem) => {
    var wrapperCircle = document.createElement("div");

    wrapperCircle.className = svgItem.circleClass;

    var objectTag = document.createElement("object");
    wrapperCircle.appendChild(objectTag);
    var svgWithWrapper = document.body.appendChild(wrapperCircle);
    var objectDocument = svgWithWrapper.getElementsByTagName("object")[0];

    console.log(svgWithWrapper);
    objectDocument.setAttribute("data", svgItem.path);
    objectDocument.setAttribute("type", svgItem.type);
    console.log(objectDocument);

    objectDocument.addEventListener("load", function () {
      var svgDoc = this.contentDocument;
      console.log(svgDoc);
      var element = svgDoc.getElementsByTagName("svg")[0];
      console.log(element);

      var circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      circle.setAttribute("cx", svgItem.cx);
      circle.setAttribute("cy", svgItem.cy);
      circle.setAttribute("r", svgItem.r);
      /*  circle.appendChild(element); */

      element.appendChild(circle);

      /*svgDoc.appendChild(circle); */

      console.log(circle);

      element.insertBefore(circle, element.firstChild);

      element.setAttribute("viewBox", svgItem.viewbox);

      element.setAttribute("x", svgItem.x);
      element.setAttribute("y", svgItem.y);

      var styles = window.getComputedStyle(element);
      console.log(styles);

      /*   },
      false
    ); */

      /* objectDocument.addEventListener("load", function (e) {
      var svgDoc = objectDocument.contentDocument; */

      loadimage(svgDoc);

      circle.addEventListener("mouseout", function (e) {
        var svgDoc = objectDocument.contentDocument;
        restoreColor(svgDoc);
      });

      circle.addEventListener("mouseover", function () {
        var svgDoc = objectDocument.contentDocument;
        changeColor(svgDoc);
      });
    });
  });
}

renderSVG();

//  var svgElements = document.querySelectorAll(""section#tech-stack svg"");
// var icon_group = document.getElementById("icon_group");
// var svgElements = icon_group.querySelectorAll("postgressql");

// console.log(svgElements);
// for (var i = 0; i < svgElements.length; i++) {
//   svgElements[i].addEventListener('load', function (e) {
//     loadimage(this);
//   });

//   svgElements[i].addEventListener('mouseover', function (e) {
//     changeColor(this);
//   });

//   svgElements[i].addEventListener('mouseout', function (e) {
//     loadimage(this);
//   });
// }

function loadimage(selectedSvg) {
  var innerElements = selectedSvg.getElementsByTagName("svg")[0];
  console.log(innerElements);

  var svgInnerElements = innerElements.getElementsByTagName("*");
  console.log(svgInnerElements);

  for (var i = 1; i < svgInnerElements.length; i++) {
    var element = svgInnerElements[i];
    console.log(element);
    var styles = window.getComputedStyle(element);
    if (styles.fill && styles.stroke) {
      element.style.originalFill = styles.fill;
      element.style.originalStroke = styles.stroke;
    }
    if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255, 255)";
      element.style.stroke = "rgb(255, 255, 255 )";
    } else if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke == "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255 ,255)";
      element.style.stroke = "rgb(0 ,0 ,0 )";
    } else if (
      styles.fill == "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 255, 255 ,255 )";
    } else {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 0, 0, 0 )";
    }
  }
  if (styles.fill) {
    element.style.originalFill = styles.fill;
    if (styles.fill !== "rgb(255, 255, 255)") {
      element.style.fill = "rgb(255, 255, 255)";
    } else {
      element.style.fill = "rgb(0 , 0 , 0)";
    }
  } else if (styles.stroke) {
    element.style.originalStroke = styles.stroke;
    if (element.style.stroke !== "rgb(255, 255, 255)") {
      element.style.stroke = "rgb(255, 255, 255)";
    } else {
      element.style.stroke = "rgb(0, 0 , 0 )";
    }
  }
}
function changeColor(selectedSvg) {
  var innerElements = selectedSvg.getElementsByTagName("svg")[0];

  var svgInnerElements = innerElements.getElementsByTagName("*");
  console.log(svgInnerElements);

  for (var i = 1; i < svgInnerElements.length; i++) {
    var element = svgInnerElements[i];

    if (element.style.originalFill && element.style.originalStroke) {
      element.style.fill = element.style.originalFill;
      element.style.stroke = element.style.originalStroke;
    } else if (element.style.originalFill) {
      element.style.fill = element.style.originalFill;
    } else if (element.style.originalStroke) {
      element.style.stroke = element.style.originalStroke;
    }
  }
}

function restoreColor(selectedSvg) {
  var innerElements = selectedSvg.getElementsByTagName("svg")[0];
  console.log(innerElements);

  var svgInnerElements = innerElements.getElementsByTagName("*");
  console.log(svgInnerElements);

  for (var i = 1; i < svgInnerElements.length; i++) {
    var element = svgInnerElements[i];
    console.log(element);
    var styles = window.getComputedStyle(element);
    if (styles.fill && styles.stroke) {
      element.style.originalFill = styles.fill;
      element.style.originalStroke = styles.stroke;
    }
    if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255, 255)";
      element.style.stroke = "rgb(255, 255, 255 )";
    } else if (
      styles.fill !== "rgb(255, 255, 255)" &&
      styles.stroke == "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(255, 255 ,255)";
      element.style.stroke = "rgb(0 ,0 ,0 )";
    } else if (
      styles.fill == "rgb(255, 255, 255)" &&
      styles.stroke !== "rgb(255, 255, 255)"
    ) {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 255, 255 ,255 )";
    } else {
      element.style.fill = "rgb(0, 0, 0)";
      element.style.stroke = "rgb( 0, 0, 0 )";
    }
  }
  if (styles.fill) {
    element.style.originalFill = styles.fill;
    if (styles.fill !== "rgb(255, 255, 255)") {
      element.style.fill = "rgb(255, 255, 255)";
    } else {
      element.style.fill = "rgb(0 , 0 , 0)";
    }
  } else if (styles.stroke) {
    element.style.originalStroke = styles.stroke;
    if (element.style.stroke !== "rgb(255, 255, 255)") {
      element.style.stroke = "rgb(255, 255, 255)";
    } else {
      element.style.stroke = "rgb(0, 0 , 0 )";
    }
  }
}
