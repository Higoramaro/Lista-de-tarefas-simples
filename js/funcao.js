
function adicionar(){

        let text = document.getElementById("mensagem").value;
        let list = document.getElementById("listas").innerHTML; //Adicionar coisas do html no javascript

        list +="<li>" +text+ "</li>"

        document.getElementById("listas").innerHTML = list;

        document.getElementById("texto").value = null;
 }
        
        