var canvas;
var ctx;
var FPS = 50;

//dimensiones del canvas en pixels

var canvasAncho = 500;
var canvasAlto = 500;

var escenario;

const paredColor = "#000";
const sueloColor = "#666";

//--------------------------------------------------------------------------------------

//nivel 1

var nivel1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1],
]

//------------------------------------------------------------------------------------------
//clase escenario

class level{
    constructor(can,con,arr){
        this.canvas = can;
        this.ctx = con;
        this.matriz = arr;

        //dimensiones matriz
        this.altoM = this.matriz.length;
        this.anchoM = this.matriz[0].length;

        //dimensiones reales del canvas
        this.altoC = this.canvas.height;
        this.anchoC = this.canvas.width;

        //dimesiones de los tiles
        this.altoT = parseInt(this.altoC / this.altoM);
        this.anchoT = parseInt(this.anchoC / this.anchoM);
    }
    dibujar(){
        var color;
        
        for(var y=0; y<this.altoM; y++){
            for(var x=0; x<this.anchoM; x++){
                if(this.matriz[y][x] == 1)
                    color = paredColor;
                else
                    color = sueloColor;
                
                this.ctx.fillStyle = color;
                this.ctx.fillRect(x * this.anchoT, y * this.altoT, this.anchoT, this.altoT);
            }
        }
    }

}

//---------------------------------------------------------------------------------------
function inicializa(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    //modificamos el tamanho del canva
    canvas.width = canvasAncho;
    canvas.height = canvasAlto;

    escenario = new level(canvas,ctx,nivel1);

    //iniciamos el bucle principal del juego
    setInterval(function(){principal();},1000/FPS);
}

function borraCanvas(){
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}




function principal(){
    borraCanvas();
    escenario.dibujar();
}