function openNav() {
  document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0px";
}

$(document).ready(() => {
  $("#unidad2").addClass("hidden");
  $("#unidad3").addClass("hidden");
  $("#unidad4").addClass("hidden");
  $("#practicas").addClass("hidden");
});

$("#nav-btn").on("click", () => {
  openNav();
});

$("#side-nav__close-btn").on("click", () => {
  closeNav();
});

$("#u1").on("click", () => {
  if ($("#unidad1").hasClass("hidden")) {
    $("#unidad1").removeClass("hidden");
  }
  if (!$("#unidad2").hasClass("hidden")) {
    $("#unidad2").addClass("hidden");
  }
  if (!$("#unidad3").hasClass("hidden")) {
    $("#unidad3").addClass("hidden");
  }
  if (!$("#unidad4").hasClass("hidden")) {
    $("#unidad4").addClass("hidden");
  }
  if (!$("#practicas").hasClass("hidden")) {
    $("#practicas").addClass("hidden");
  }
});

$("#u2").on("click", () => {
  if ($("#unidad2").hasClass("hidden")) {
    $("#unidad2").removeClass("hidden");
  }
  if (!$("#unidad1").hasClass("hidden")) {
    $("#unidad1").addClass("hidden");
  }
  if (!$("#unidad3").hasClass("hidden")) {
    $("#unidad3").addClass("hidden");
  }
  if (!$("#unidad4").hasClass("hidden")) {
    $("#unidad4").addClass("hidden");
  }
  if (!$("#practicas").hasClass("hidden")) {
    $("#practicas").addClass("hidden");
  }
});

$("#u3").on("click", () => {
  if ($("#unidad3").hasClass("hidden")) {
    $("#unidad3").removeClass("hidden");
  }
  if (!$("#unidad1").hasClass("hidden")) {
    $("#unidad1").addClass("hidden");
  }
  if (!$("#unidad2").hasClass("hidden")) {
    $("#unidad2").addClass("hidden");
  }
  if (!$("#unidad4").hasClass("hidden")) {
    $("#unidad4").addClass("hidden");
  }
  if (!$("#practicas").hasClass("hidden")) {
    $("#practicas").addClass("hidden");
  }
});

$("#u4").on("click", () => {
  if ($("#unidad4").hasClass("hidden")) {
    $("#unidad4").removeClass("hidden");
  }
  if (!$("#unidad1").hasClass("hidden")) {
    $("#unidad1").addClass("hidden");
  }
  if (!$("#unidad2").hasClass("hidden")) {
    $("#unidad2").addClass("hidden");
  }
  if (!$("#unidad3").hasClass("hidden")) {
    $("#unidad3").addClass("hidden");
  }
  if (!$("#practicas").hasClass("hidden")) {
    $("#practicas").addClass("hidden");
  }
});

$("#practicas").on("click", () => {
  if ($("#practicas").hasClass("hidden")) {
    $("#practicas").removeClass("hidden");
  }
  if (!$("#unidad1").hasClass("hidden")) {
    $("#unidad1").addClass("hidden");
  }
  if (!$("#unidad2").hasClass("hidden")) {
    $("#unidad2").addClass("hidden");
  }
  if (!$("#unidad3").hasClass("hidden")) {
    $("#unidad3").addClass("hidden");
  }
  if (!$("#unidad4").hasClass("hidden")) {
    $("#unidad4").addClass("hidden");
  }
});
