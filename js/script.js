function openNav() {
  document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0px";
}


$(document).ready(()=>{
  $(() => {
    $("#unidad2").addClass("hidden");
    $("#unidad3").addClass("hidden");
    $("#unidad4").addClass("hidden");
    $("#practicas").addClass("hidden");
  });
  const nav = $('[data-page]');

  for (let i = 0; i < nav.length; i++) {
    let tab = nav[i]
    tab.addEventListener('click',()=>{
      switchTab(tab)
    })
  }

  let navBtn = $('#nav-btn')[0];

  navBtn.addEventListener('click',()=>{
    openNav()
  })
})

$('#side-nav__close-btn').on('click',()=>{
  closeNav()
})

function switchTab(tab){
  let current = $('[data-current="active"]')[0]
  let numPage = tab.dataset.page
  if(current.dataset.div === numPage) return;
  current.dataset.current = 'false';
  current.classList.add('hidden')
  $(`[data-div='${numPage}'`)[0].dataset.current = 'active'
  console.log(current)
  console.log(tab)
  console.log(numPage)
  switch(parseInt(numPage)){
    case 1:
      $("#unidad1").removeClass('hidden')
          break;
    case 2:
      $("#unidad2").removeClass('hidden')
          break;
    case 3:
      $("#unidad3").removeClass('hidden')
          break;
    case 4:
      $("#unidad4").removeClass('hidden')
          break;
    case 5:
      $("#practicas").removeClass('hidden')
          break;
  }
}