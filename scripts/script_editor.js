//chamada e estilização do ace editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/sqlserver");
editor.getSession().setMode("ace/mode/sqlserver");
editor.setShowPrintMargin(false);
document.getElementById('editor').style.fontSize='16px';

function tamanhoFonte(){
	var tam = document.getElementById("fonte").value;
	document.getElementById('editor').style.fontSize=tam;
}

//função de teste da interação dos botoes com o editor
function teste(){
	var i = editor.getValue();  
	alert(i);
}

function confirmarSaida(){ 
	return "Deseja realmente sair?";
}

//função que ativa ou não o collapse de acordo com a largura da viewport
const tam = window.matchMedia( "(min-width: 768px)" );
tam.addListener(tamanhoDaViewport);
tamanhoDaViewport(tam);
function tamanhoDaViewport(tam){
	if (tam.matches) {
		$('.collapse').collapse('show');
	} else {
		$('.collapse').collapse('hide');
	}
}


        