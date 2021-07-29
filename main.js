var fileLoader = document.getElementById('fileLoader');
var image = document.getElementById('image');
var canvas = document.getElementById('image-canvas');
var context = null;

let loadFromFile = function(){
    fileLoader.click();
    fileLoader.addEventListener('input', ()=>{
        image.src = fileLoader.files[0].name;
    });
}

let load = function (){
    
    context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

let desfoqueGaussiano = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    var imgori= new MatrixImage(imageData);
    /*
    for (var i = 2; i < img.width-2; i++) {
        for (var j = 2; j < img.height-2; j++) {
            
            var soma=0;
            var ajuda;
            
            ajuda=RGBParaHSL(img.getPixel(i-1,j-1).red,img.getPixel(i-1,j-1).green,img.getPixel(i-1,j-1).blue)[0];
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i-1,j).red,img.getPixel(i-1,j).green,img.getPixel(i-1,j).blue)[0];
            ajuda=ajuda*2;
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i,j-1).red,img.getPixel(i,j-1).green,img.getPixel(i,j-1).blue)[0];  
            ajuda=ajuda*2;
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i+1,j-1).red,img.getPixel(i+1,j-1).green,img.getPixel(i+1,j-1).blue)[0];     
            soma=soma+ajuda;   
            ajuda=RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[0];
            ajuda=ajuda*4;
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i-1,j+1).red,img.getPixel(i-1,j+1).green,img.getPixel(i-1,j+1).blue)[0];
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i,j+1).red,img.getPixel(i,j+1).green,img.getPixel(i,j+1).blue)[0];
            ajuda=ajuda*2;
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i+1,j).red,img.getPixel(i+1,j).green,img.getPixel(i+1,j).blue)[0];
            ajuda=ajuda*2;
            soma=soma+ajuda;
            ajuda=RGBParaHSL(img.getPixel(i+1,j+1).red,img.getPixel(i+1,j+1).green,img.getPixel(i+1,j+1).blue)[0];
            soma=soma+ajuda;
            var hsldividido =soma/12;
            var rgb = HSLToRGB(hsldividido,RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[1],RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[2]);
            
            
            img.setPixel(i, j, new RGBColor(rgb[0], rgb[1], rgb[2]));
        }
        */
        for (var i = 2; i < img.width-2; i++) {
            for (var j = 2; j < img.height-2; j++) {
                
                var soma=0;
                var ajuda;
                
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j-1).red,imgori.getPixel(i-1,j-1).green,imgori.getPixel(i-1,j-1).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j).red,imgori.getPixel(i-1,j).green,imgori.getPixel(i-1,j).blue)[0];
                ajuda=ajuda*2;
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i,j-1).red,imgori.getPixel(i,j-1).green,imgori.getPixel(i,j-1).blue)[0];  
                ajuda=ajuda*2;
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j-1).red,imgori.getPixel(i+1,j-1).green,imgori.getPixel(i+1,j-1).blue)[0];     
                soma=soma+ajuda;   
                ajuda=RGBParaHSL(imgori.getPixel(i,j).red,imgori.getPixel(i,j).green,imgori.getPixel(i,j).blue)[0];
                ajuda=ajuda*4;
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j+1).red,imgori.getPixel(i-1,j+1).green,imgori.getPixel(i-1,j+1).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i,j+1).red,imgori.getPixel(i,j+1).green,imgori.getPixel(i,j+1).blue)[0];
                ajuda=ajuda*2;
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j).red,imgori.getPixel(i+1,j).green,imgori.getPixel(i+1,j).blue)[0];
                ajuda=ajuda*2;
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j+1).red,imgori.getPixel(i+1,j+1).green,imgori.getPixel(i+1,j+1).blue)[0];
                soma=soma+ajuda;
                var hsldividido =soma/12;
                var rgb = HSLToRGB(hsldividido,RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[1],RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[2]);
                
                
                img.setPixel(i, j, new RGBColor(rgb[0], rgb[1], rgb[2]));
            }
    }
    context.putImageData(img.imageData, 0, 0);
}

let media = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    let imgori = new MatrixImage(imageData);
    //*
    for (var i = 2; i < img.width-2; i++) {
        for (var j = 2; j < img.height-2; j++) {
            
            var soma=0;
            var ajuda;
            
            var red;
            var green;
            var blue;
            red= img.getPixel(i-1,j-1).red+img.getPixel(i-1,j).red+img.getPixel(i,j-1).red+img.getPixel(i+1,j-1).red+img.getPixel(i,j).red+img.getPixel(i-1,j+1).red+img.getPixel(i,j+1).red+img.getPixel(i+1,j).red;
            
            green=img.getPixel(i-1,j-1).green+img.getPixel(i-1,j).green+img.getPixel(i,j-1).green+img.getPixel(i+1,j-1).green+img.getPixel(i,j).green+img.getPixel(i-1,j+1).green+img.getPixel(i,j+1).green+img.getPixel(i+1,j).green;
            
            blue= img.getPixel(i-1,j-1).blue+img.getPixel(i-1,j).blue+img.getPixel(i,j-1).blue+img.getPixel(i+1,j-1).blue+img.getPixel(i,j).blue+img.getPixel(i-1,j+1).blue+img.getPixel(i,j+1).blue+img.getPixel(i+1,j).blue;
           
            red= red/9;
            green=green/9;
            blue=blue/9;
            
            
            img.setPixel(i, j, new RGBColor(red, green, blue));
        }
    }
        //*/
       /*
        for (var i = 2; i < img.width-2; i++) {
            for (var j = 2; j < img.height-2; j++) {
                
                var soma=0;
                var ajuda;
                
                
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j-1).red,imgori.getPixel(i-1,j-1).green,imgori.getPixel(i-1,j-1).blue)[0];
                
                soma=soma+ajuda;
                /
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j).red,imgori.getPixel(i-1,j).green,imgori.getPixel(i-1,j).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i,j-1).red,imgori.getPixel(i,j-1).green,imgori.getPixel(i,j-1).blue)[0];  
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j-1).red,imgori.getPixel(i+1,j-1).green,imgori.getPixel(i+1,j-1).blue)[0];     
                soma=soma+ajuda;   
                ajuda=RGBParaHSL(imgori.getPixel(i,j).red,imgori.getPixel(i,j).green,imgori.getPixel(i,j).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i-1,j+1).red,imgori.getPixel(i-1,j+1).green,imgori.getPixel(i-1,j+1).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i,j+1).red,imgori.getPixel(i,j+1).green,imgori.getPixel(i,j+1).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j).red,imgori.getPixel(i+1,j).green,imgori.getPixel(i+1,j).blue)[0];
                soma=soma+ajuda;
                ajuda=RGBParaHSL(imgori.getPixel(i+1,j+1).red,imgori.getPixel(i+1,j+1).green,imgori.getPixel(i+1,j+1).blue)[0];
                soma=soma+ajuda;
                var hsldividido =soma/9;
                
                var rgb = HSLToRGB(hsldividido,RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[1],RGBParaHSL(img.getPixel(i,j).red,img.getPixel(i,j).green,img.getPixel(i,j).blue)[2]);
                
                red = rgb[0];
                green=rgb[1];
                blue=rgb[2];
                
                img.setPixel(i, j, new RGBColor(red, green, blue));
            }
    }   */
    
    context.putImageData(img.imageData, 0, 0);
}

let binarizacao = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = img.getPixel(i,j);
            var gray = (pixel.red + pixel.green + pixel.blue) / 3; 
            if(gray> 127){
                img.setPixel(i, j, new RGBColor(255, 255, 255));
            }
            if(gray< 127){
                img.setPixel(i, j, new RGBColor(0, 0, 0));
            }
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let grayScale = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = img.getPixel(i,j);
            var gray = (pixel.red + pixel.green + pixel.blue) / 3; 
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let mean = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 2; i < img.width-2; i++) {
        for (var j = 2; j < img.height-2; j++) {
            var pixel = Array();
            pixel.push(img.getPixel(i-1,j-1).red);
            pixel.push(img.getPixel(i-1,j).red);
            pixel.push(img.getPixel(i,j-1).red);
            pixel.push(img.getPixel(i+1,j-1).red);
            pixel.push(img.getPixel(i,j).red);
            pixel.push(img.getPixel(i-1,j+1).red);
            pixel.push(img.getPixel(i,j+1).red);
            pixel.push(img.getPixel(i+1,j).red);
            pixel.push(img.getPixel(i+1,j+1).red);
            var gray = pixel.reduce((a, b) => a + b, 0) / 9;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

class RGBColor {
    constructor(r, g, b) {
      this.red = r;
      this.green = g; 
      this.blue = b;
    }
}

class MatrixImage {
    constructor(imageData) {
      this.imageData = imageData;
      this.height = imageData.height; 
      this.width = imageData.width;
    }

    getPixel(x, y) {
        let position = ((y * (this.width * 4)) + (x * 4));

        return new RGBColor(
             this.imageData.data[position],   //red
             this.imageData.data[position+1], //green
             this.imageData.data[position+2], //blue
        );
    }

    setPixel(x, y, color) {
        let position = ((y * (this.width * 4)) + (x * 4));
        this.imageData.data[position] = color.red;
        this.imageData.data[position+1] = color.green;
        this.imageData.data[position+2] = color.blue;
    }
}

function RGBParaHSL(r,g,b) {

    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0){
        h = 0;
    }   
    else if (cmax == r){
        h = ((g - b) / delta) % 6;
    }
    else if (cmax == g){
        h = (b - r) / delta + 2;
    }
    else{
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);

    if (h < 0){
        h += 360;
    }

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    var hsl = Array();
    hsl.push(h);
    hsl.push(s);
    hsl.push(l);

    return hsl;
}

function HSLToRGB(h,s,l) {

    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;  
          } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
          } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
          } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
          } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
          } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
          }
          r = Math.round((r + m) * 255);
          g = Math.round((g + m) * 255);
          b = Math.round((b + m) * 255);
          
    var rgb = Array();
    rgb.push(r);
    rgb.push(g);
    rgb.push(b);

    return rgb;

  }

document.getElementById('btnCarregar').addEventListener('click', load);
document.getElementById('btnDesfoqueGaussiano').addEventListener('click', desfoqueGaussiano);
document.getElementById('btnMedia').addEventListener('click', media);
document.getElementById('btnMediana').addEventListener('click', mean);
document.getElementById('btnNTSC').addEventListener('click', mean);
document.getElementById('btnConversaomedia').addEventListener('click', mean);
document.getElementById('btnBinarizacao').addEventListener('click',binarizacao);
document.getElementById('btndireita90').addEventListener('click', mean);
document.getElementById('btndireta180').addEventListener('click', mean);
document.getElementById('btndireta270').addEventListener('click', mean);
document.getElementById('btnesquerda90').addEventListener('click', mean);
document.getElementById('btnesquerda180').addEventListener('click', mean);
document.getElementById('btnesquerda270').addEventListener('click', mean);
document.getElementById('Redimensionar4').addEventListener('click', mean);
document.getElementById('btnRedimensionar2').addEventListener('click', mean);
document.getElementById('btnRedimensionar12').addEventListener('click', mean);
document.getElementById('btnRedimensionar14').addEventListener('click', mean);