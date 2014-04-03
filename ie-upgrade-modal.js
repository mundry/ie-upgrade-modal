(function(imagesPath){
  'use strict';
  var browsers = [
        "Internet Explorer",
        "Firefox",
        "Chrome",
        "Opera",
        "Safari"
      ],
      urls = [
        "http://www.microsoft.com/windows/Internet-explorer/default.aspx",
        "http://www.mozilla.com/firefox/",
        "http://www.google.com/chrome",
        "http://www.opera.com/download/",
        "http://www.apple.com/safari/download/"
      ],
      logos = [
        "ie",
        "ff",
        "cr",
        "o",
        "sf"
      ],
      d = document,
      newTag = function(name) { return d.createElement(name); },
      htmlTag = d.documentElement,
      clientWidth = htmlTag.clientWidth,
      clientHeight = htmlTag.clientHeight,
      body = d.getElementsByTagName("body")[0],
      warningContainer = newTag("div"),
      wcs = warningContainer.style,
      containerWidth = 650,
      containerHeight = 260,
      bg = newTag("div"),
      bgs = bg.style,
      heading = newTag("h1"),
      hs = heading.style,
      explainationParagraph = newTag("p"),
      eps = explainationParagraph.style,
      instructionParagraph = newTag("p"),
      ips = instructionParagraph.style,
      choicesList = newTag("ul"),
      cls = choicesList.style,
      white = "#fff",
      pixelUnit = "px",
      absolutePosition = "absolute",
      pxAutoMargin = "1px auto";

  // Add white background with 50% opacity.
  bgs.width = clientWidth + pixelUnit;
  // Make sure the background fills the entire page (scrollHeight) not
  // just the viewport (clientHeight).
  bgs.height = Math.max(htmlTag.scrollHeight, clientHeight) + pixelUnit;
  bgs.position = absolutePosition;
  bgs.top = bgs.left = "0";
  bgs.filter = "alpha(opacity=50)";
  bgs.background = white;
  body.appendChild(bg);

  // Style warning container
  wcs.width = containerWidth + pixelUnit;
  wcs.height = containerHeight + pixelUnit;
  wcs.position = absolutePosition;
  wcs.top = ((clientHeight - containerHeight - 20) / 2) + pixelUnit; // Subtract extra 20px from the container height for 20px padding at the top.
  wcs.left = ((clientWidth - containerWidth - 40) / 2) + pixelUnit;  // Subtract extra 40px from the container width for 20px padding on either side.
  wcs.padding = "20px 20px 0";
  wcs.background = white;
  wcs.border = "1px solid #ccc";
  wcs.fontFamily = "'Lucida Grande','Lucida Sans Unicode',Arial,Verdana,sans-serif";
  wcs.listStyleType = "none";
  wcs.color = "#555";
  wcs.fontSize = "12px";
  body.appendChild(warningContainer);

  // Style warning heading
  heading.innerHTML = "Did you know that your Internet Explorer is out of date?";
  hs.display = "block";
  hs.fontSize = "1.3em";
  hs.marginBottom = "0.5em";
  hs.color = "#333";
  hs.fontFamily = "Helvetica,Arial,sans-serif";
  hs.fontWeight = "bold";

  // Style explaination paragraph
  explainationParagraph.innerHTML = "To get the best possible experience using our website we recommend that you upgrade to a newer version or other web browser. A list of the most popular web browsers can be found below.";
  eps.marginBottom = "1em";
  eps.textAlign = "justify";

  // Style instruction paragraph
  instructionParagraph.innerHTML = "Just click on the icons to get to the download page";
  ips.marginBottom = "1em";

  // Style choices list
  cls.listStylePosition = "outside";
  cls.listStyleType = cls.listStyleImage = "none";
  cls.margin = "0 auto";
  cls.padding = "0";

  // Add browser choices
  for (var i = 0; i < browsers.length; i++) {
    var choice = newTag("li"),
        cst = choice.style,
        logo = newTag("img"),
        ls = logo.style,
        choiceName = newTag("p"),
        cns = choiceName.style,
        choiceLink = newTag("a"),
        chls = choiceLink.style;

    // Style browser choice
    cst.background = "transparent url('" + imagesPath + "bg.gif') no-repeat scroll left top";
    cst.cursor = "pointer";
    cst.styleFloat = cst.cssFloat = "left";
    cst.width = "120px";
    cst.height = "122px";
    // Space elements via left margin except for the first element.
    cst.margin = i === 0 ? "0" : "0 0 0 12px";

    choiceLink.href = urls[i];
    chls.textDecoration = "none";

    // Style
    logo.src = imagesPath + logos[i] + ".gif";
    logo.width = logo.height = "100";
    logo.border = "0";
    ls.display = "block";
    ls.margin = pxAutoMargin;

    // Style choice name
    choiceName.innerHTML = browsers[i];
    cns.color = "#888";
    cns.fontSize = "0.8em";
    cns.lineHeight = "18px";
    cns.margin = pxAutoMargin;
    cns.textAlign = "center";

    // Assemble choice
    choice.appendChild(choiceLink);
    choiceLink.appendChild(logo);
    choiceLink.appendChild(choiceName);
    choicesList.appendChild(choice);
  }

  // Assemble warning container
  warningContainer.appendChild(heading);
  warningContainer.appendChild(explainationParagraph);
  warningContainer.appendChild(instructionParagraph);
  warningContainer.appendChild(choicesList);
}("/images/ie-upgrade-modal/"));
