// Data for the "HTML Images" Page
//Name:           SADDAM FAISAL
// Student Number: 118406198
// Email:          sfaisal6@myseneca.ca
// Date:           19/07/2020
const images = [
  {
    caption: 'Red Slate Mountain',
    alt: 'Mountain',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Red_Slate_Mountain_1.jpg/320px-Red_Slate_Mountain_1.jpg'
  },
  {
    caption: 'St. Petersburg River',
    alt: 'River',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Saint-petersburg-river-march-24-2016.jpg/320px-Saint-petersburg-river-march-24-2016.jpg'
  },
  {
    caption: 'Lybian Desert',
    alt: 'Desert',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Libyan_Desert_-_2006.jpg/320px-Libyan_Desert_-_2006.jpg'
  },
  {
    caption: 'Azerbaijan Forest',
    alt: 'Forest',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Azerbaijan_forest_3.JPG/320px-Azerbaijan_forest_3.JPG'
  },
  {
    caption: 'Indonesian Jungle',
    alt: 'Jungle',
    url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Indonesian_jungle3%2C_Zoo_Prague.jpg/320px-Indonesian_jungle3%2C_Zoo_Prague.jpg'
  }
];

function img (subt, object){
  var result = "";
  for (var i = 0 ; i < object.length ;i ++){
      result += ( "<a href = '" + object[i].url +"'> " + "<img src = '"
      + object[i].url + "' alt='" + object[i].alt + "'>" + "</a> <figcaption> " + object[i].caption + "</figcaption> <br>" );
  }
  subt.innerHTML += "<figure>" + result + "</figure>";
}

window.onload = function () {
  var images_ = document.getelementbyid("img");
  img (images_, images);
} 