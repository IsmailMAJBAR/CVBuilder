// kendo.pdf.defineFont({
//   "DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
//   "DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
//   "DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
//   "DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
//   "WebComponentsIcons": "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
// });

// function genPDF() {
//   kendo.drawing
//     .drawDOM("#page")
//     .then(function (group) {
//       kendo.drawing.pdf.saveAs(group, "CV1P2020FR.pdf")
//     });
//href="javascript:genPDF()"
// };

window.onload = function () {
  document.getElementById("btnCmd").addEventListener("click", function () {
    html2canvas(document.querySelector('#page')).then(function (canvas) {
      console.log(canvas);
      saveAs(canvas.toDataURL(), 'CV1P2020FR.png');
    });
  });

  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      //Firefox requires the link to be in the body
      document.body.appendChild(link);
      //simulate click
      link.click();
      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }
}



// $('#btnCmd').click(function () {
//   html2canvas($('#page'),
//     {
//       onrendered: function (canvas) {
//         var a = document.createElement('a');
//         // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
//         a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
//         a.download = 'CV1P2020FR.jpg';
//         a.click();
//       }
//     });
// });

