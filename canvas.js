var espacoTela = document.querySelector('#forca');
var pincel = espacoTela.getContext('2d');


function desenhaForca() {

	pincel.fillStyle = 'black';
	pincel.lineWidth = 7;
	pincel.beginPath();
  
  	// desenhando chao
  	pincel.moveTo(0, 550);
	pincel.lineTo(550, 550);

	// desenhando base da forca
	pincel.moveTo(100, 150);
	pincel.lineTo(70, 550);

  	// desenhando suporte da forca
  	pincel.moveTo(100, 200);
	pincel.lineTo(400, 200);

	// desenhando haste entre base e suporte
	pincel.moveTo(90, 300);
  	pincel.lineTo(200, 200);

	pincel.fill();
	pincel.stroke();
  
}

function desenhaCabeca() {
	
	// Referente a linha que envolve o circulo(cabeça)
	pincel.lineWidth = 4
	pincel.beginPath()
	// Referente ao que esta dentro da área (interna) demarcada
	pincel.arc(350, 255, 50, 0, 2 * Math.PI);
	pincel.fillStyle = '#DEB887'  
	pincel.strokeStyle = '#DEB887'
	pincel.fill()
	pincel.stroke()
	
}

function desenhaTronco() {

	pincel.lineWidth = 15
	pincel.fillStyle = '#DEB887'
	pincel.strokeStyle = 'DEB887'
	pincel.beginPath()
	pincel.moveTo(350, 305)
	pincel.lineTo(350, 430)
	pincel.fill()
	pincel.stroke()


  }

  function desenhaBracoEsquerdo() {
	  
	pincel.lineWidth = 8
	pincel.beginPath()
	pincel.moveTo(250, 275)
	pincel.lineTo(350, 350)
	pincel.fill()
	pincel.stroke()

  }

  function desenhaPernaEsquerda() {
	  
	pincel.lineWidth = 8
	pincel.beginPath()
	pincel.moveTo(345, 430)
	pincel.lineTo(220, 500)
	pincel.fill()
	pincel.stroke()

  }

  function desenhaBracoDireito() {
	  
	pincel.lineWidth = 8
	pincel.beginPath()
	pincel.moveTo(450, 275)
	pincel.lineTo(350, 350)
	pincel.fill()
	pincel.stroke()

  }

  function desenhaPernaDireita() {
	  
	pincel.lineWidth = 8
	pincel.beginPath()
	pincel.moveTo(355, 430)
	pincel.lineTo(460, 500)
	pincel.fill()
	pincel.stroke()

  }

function limparCanvas() {
	pincel.clearRect(0, 0, espacoTela.width, espacoTela.height);
  }
  
limparCanvas();