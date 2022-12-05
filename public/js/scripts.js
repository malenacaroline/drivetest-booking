var $ = function (id) {
  return document.getElementById(id);
};

if ($("form_signUp")) {
  $("form_signUp").style.display = "none";
}

if ($("btn_login")) {
  $("btn_login").addEventListener("click", () => {
    $("form_login").style.display = "block";
    $("form_signUp").style.display = "none";
  });
} 

if ($("btn_signUp")) {
  $("btn_signUp").addEventListener("click", () => {
    $("form_signUp").style.display = "block";
    $("form_login").style.display = "none";
  });
}
