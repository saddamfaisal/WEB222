// Data for the "HTML Video" Page
//Name:           SADDAM FAISAL
// Student Number: 118406198
// Email:          sfaisal6@myseneca.ca
// Date:           19/07/2020
const video = {
  controls: true,
  width: 320,
  height: 240,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
      type: 'video/mp4'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
      type: 'video/ogg'
    }
  ]
};

function Video(subt, object) {
  var result = "", inner = "";
  for (var i = 0; i < object.source.length; i++) {
      if (object.controls)
          inner += "<source src = '" + object.source[i].src + "' type = '" + object.source[i].type + "'>   Your browser does not support the video tag / type";
  } 
  result = "<video width = '" + object.width + "' height = '" + object.height +
  "' controls>" + inner + " </video>" ;
  subt.innerHTML += "<figure> " +  result + "</figure>";
}
window.onload = function (){
  var video_ = document.getElementById("video");
  Video (video_, video);
}

