if(navigator.onLine){
  console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "ONLINE");
  console.log("GET 200");
}else{
  console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "OFFLINE");
  console.error("Cannot load data from server. Please check your internet connection.");
}

var black_screen_alpha = document.getElementById("black-screen-alpha");
var selection_block = document.getElementById("Selection-block");
var selection_block_responsive = document.getElementById("selection-box-responsive");

selection_block.onclick = () => {
  if(selection_block_responsive.style.display == "none"){
    black_screen_alpha.style.display = "block";
    selection_block_responsive.style.display = "block";
  }
}

var close_btn_selection = document.getElementById("close-btn");

close_btn_selection.onclick = () => {
  black_screen_alpha.classList.add("black-screen-alpha-opac-out");
    selection_block_responsive.classList.add("Selection-box-responsive-out");
    setTimeout(() => {
      black_screen_alpha.style.display = "none";
      selection_block_responsive.style.display = "none";
      black_screen_alpha.classList.remove("black-screen-alpha-opac-out");
      selection_block_responsive.classList.remove("Selection-box-responsive-out");
    }, 450);
}