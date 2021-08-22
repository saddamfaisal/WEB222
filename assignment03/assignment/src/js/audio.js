// Data for the "HTML Audio" Page
//Name:           SADDAM FAISAL
// Student Number: 118406198
// Email:          sfaisal6@myseneca.ca
// Date:           19/07/2020
const audio = {
  controls: true,
  source: [
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
      type: 'audio/mpeg'
    },
    {
      src: 'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
      type: 'audio/ogg'
    }
  ]
};
function Audio (play, object){
  var result = "";
  for ( var i = 0 ; i < object.source.length ; i ++){
      if (object.controls)
      result += "<audio controls> <source src ='" + object.source[i].src 
      + "' type = '" + object.source[i].type + "'> Your browser does not support the audio tag used. </audio> <br> <br>";
  }
  play.innerHTML += "<figure>" + result + "</figure>";
}

window.onload = function () {
  var audio_ = document.getElementById("audio");
  Audio(audio_, audio);
} 
