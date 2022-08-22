/*

                                                    INSPEÇÃO DO SITE DA W3C SCHOOL

Link: https://www.w3schools.com/                                                    

Código HTML que faz interação com Javascript:                                                     
<div id="darkmodemenu" class="ws-grey w3-hide-small" onmouseover="mouseoverdarkicon()" onmouseout="mouseoutofdarkicon()" style="top: 5px;">
    <input id="radio_darkpage" type="checkbox" name="radio_theme_mode" onclick="click_darkpage()"><label for="radio_darkpage"> Dark mode</label>
    <br>
    <input id="radio_darkcode" type="checkbox" name="radio_theme_mode" onclick="click_darkcode()"><label for="radio_darkcode"> Dark code</label>
</div>

Explicação: Elemento div, que funciona como um cointainer, para 2 checkboxs (e suas 2 labels), para selecionar um tema escuro para a página ou um 
tema escuro para as cores utilizadas no código-fonte, caso o usuário queria usar no site (por padrão, o tema é sempre claro).

Código Javascript que interage com o código HTML acima: 

function mouseoverdarkicon() {
  var a = document.getElementById("darkmodemenu");
  a.style.top = "75px";
}
function mouseoutofdarkicon() {
  var a = document.getElementById("darkmodemenu");
  a.style.top = "5px";
}
function changepagetheme(n) {
  var a = document.getElementById("radio_darkcode");
  var b = document.getElementById("radio_darkpage");
  document.body.className = document.body.className.replace("darktheme", "");
  document.body.className = document.body.className.replace("darkpagetheme", "");    
  document.body.className = document.body.className.replace("  ", " ");
  if (a.checked && b.checked) {
    localStorage.setItem("preferredmode", "light");
    localStorage.setItem("preferredpagemode", "light");
    a.checked = false;
    b.checked = false;    
    document.getElementById("wavepath").style.fill = "#282A35";    
  } else {
    document.body.className += " darktheme";
    document.body.className += " darkpagetheme";  
    localStorage.setItem("preferredmode", "dark");
    localStorage.setItem("preferredpagemode", "dark");
    a.checked = true;
    b.checked = true;    
    document.getElementById("wavepath").style.fill = "rgb(13,23,33)"; 
  }
}

function click_darkpage() {
  var b = document.getElementById("radio_darkpage");
  if (b.checked) {
    document.body.className += " darkpagetheme";
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredpagemode", "dark");
    document.getElementById("wavepath").style.fill = "rgb(13,23,33)";
    
  } else {
    document.body.className = document.body.className.replace("darkpagetheme", "");
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredpagemode", "light");
    document.getElementById("wavepath").style.fill = "#282A35";    
  }
}

function click_darkcode() {
  var a = document.getElementById("radio_darkcode");
  if (a.checked) {
    document.body.className += " darktheme";
    document.body.className = document.body.className.replace("  ", " ");    
    localStorage.setItem("preferredmode", "dark");
  } else {
    document.body.className = document.body.className.replace("darktheme", "");
    document.body.className = document.body.className.replace("  ", " ");
    localStorage.setItem("preferredmode", "light");
  }
}

function changecodetheme() {
  var cc = document.body.className;
  if (cc.indexOf("darktheme") > -1) {
    document.body.className = cc.replace("darktheme", "");
    localStorage.setItem("preferredmode", "light");
  } else {
    document.body.className += " darktheme";
    localStorage.setItem("preferredmode", "dark");
  }
}

Funcionalidade: Ao selecionado um dos dois chekboxs, o tema ou da página inteira ou apenas das cores dos códigos-fonte utilizados na página 
para exemplos é trocado para o tema escuro. 

------------------------------------------------------------------------------------------------------------------------------------------------

                                                    INSPEÇÃO DO SITE DA LIVRARIA LEITURA

Link: https://leitura.com.br/index.php?route=common/home

Código HTML que faz a intereação com Javascript: 
<div id="slideshow0" class="swiper-container swiper-container-horizontal">
    <div class="swiper-wrapper" style="transform: translate3d(-3856px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide text-center swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="6" style="width: 452px; margin-right: 30px;">
          <a href="https://leitura.com.br/livros/quadrinhos-e-graphic-novels"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Julho-2022-1170x300-A-1170x300.png" alt="Permanente HQ" class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 452px; margin-right: 30px;">
	  	  <img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Agosto-2022-1170x300-A-1170x300.png" alt="Cupom" class="img-responsive">
	  	  </div>
            <div class="swiper-slide text-center" data-swiper-slide-index="1" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/mar-calmo-nao-faz-bom-marinheiro-L999-9786584839052"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/WhatsApp%20Image%202022-08-03%20at%2015.57.17-1170x300.jpeg" alt="Mar calmo" class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center" data-swiper-slide-index="2" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/promocao-dia-dos-pais--000122"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Julho-2022-1170x300-G-1170x300.png" alt="Dia dos pais " class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center" data-swiper-slide-index="3" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/a-hipotese-do-amor-sucesso-do-tiktok-L999-9786555653304?search=a%20hipotese%20do%20amor"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/hipotese-do-amor-1170x300.jpeg" alt="Sextante" class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center" data-swiper-slide-index="4" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/promocao-record--000123"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Julho-2022-1170x300-D-1170x300.png" alt="Record" class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center" data-swiper-slide-index="5" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/promocao-compra-e-ganhe---paulo-coelho-000124"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Na%20compra%20de%2002%20livros%20do%20Paulo%20Coelho%20(Selo%20PARALELA),%20ganhe%20uma%20ecobag%20exclusiva.-1170x300.png" alt="Paulo Coelho" class="img-responsive"></a>
			  
	  	  </div>
            <div class="swiper-slide text-center swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="6" style="width: 452px; margin-right: 30px;">
	  				<a href="https://leitura.com.br/livros/quadrinhos-e-graphic-novels"><img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Julho-2022-1170x300-A-1170x300.png" alt="Permanente HQ" class="img-responsive"></a>
			  
	  	  </div>
          <div class="swiper-slide text-center swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 452px; margin-right: 30px;">
	  	  <img width="1170" height="300" src="https://leitura.com.br/image/cache/catalog/Agosto-2022-1170x300-A-1170x300.png" alt="Cupom" class="img-responsive">
	  	  </div></div>
  </div>

Explicação: Monta a estrutura HTML para o carrossel. A interação com o carrossel é feita pelo Javascript.  

Código Javascript que interage com o código HTML acima: 

$('#slideshow0').swiper({
mode: 'horizontal',
slidesPerView: 1,
pagination: '.slideshow0',
paginationClickable: true,
nextButton: '.slideshow .swiper-button-next',
prevButton: '.slideshow .swiper-button-prev',
spaceBetween: 30,
autoplay: $('#slideshow0 img').length > 1 ? 5000 : 0,
autoplayDisableOnInteraction: true,
loop: true
});


Funcionalidade: Faz a movimentação do carrossel, permitindo ir para frente ou voltar para item anterior, no corpo do site.  

-------------------------------------------------------------------------------------------------------------------------------------------------


*/