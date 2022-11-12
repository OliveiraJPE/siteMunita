    
   /* var h = window.document.querySelector("h1#paragr");
    
    var largura = window.innerWidth; //window.screen.width - valor total da tela;
    //h.innerHTML=`${largura}`;
   if(largura<600){
    //h.innerHTML=`${largura}`;
    h.innerHTML=`<h1 id="paragr" style="font-size:0.5em;">Coisas de fissurada</h1>`
    }*/


    function entrar(){
        var foto= window.document.querySelector("img#right");
        foto.src=`/_imagens/MunitaUp.png`
        }
    function saiu(){
            var foto= window.document.querySelector("img#right");
            foto.src=`/_imagens/MunitaRight2.png`
        }
    function clicou(){
            var foto= window.document.querySelector("img#right");
            foto.src=`/_imagens/MunitaUpUp.png`
        }       
