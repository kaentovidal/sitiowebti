document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });


//ejecutando SEARCH
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//SEARCH
bars_search      = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch      = document.getElementById("inputSearch");
box_search       = document.getElementById("box-search");

//creando funciones SEARCH
function mostrar_buscador(){
  bars_search.style.top="62px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();
}

//funcion para ocultar SEARCH
function ocultar_buscador(){
  bars_search.style.top="-100px";
  cover_ctn_search.style.display ="none";
  inputSearch.value = "";
  box_search.style.display = "none"
}

//funcion filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno)

function buscador_interno(){
  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  //recoriendo elements a filtrar med li
  for (i=0; i<li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if(textValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display="";
      box_search.style.display="block";
    }else{
      li[i].style.display = "none";
    }
  }

}




