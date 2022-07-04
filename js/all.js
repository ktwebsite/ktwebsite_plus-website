if(navigator.onLine){
  console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "Operational");
}else{
  console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "Not Operational");
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

var user = document.getElementById("user");
var profile_img = document.getElementById("profile");

var profile_box = document.getElementById("profile-box");
var profile_name = document.getElementById("profile-name");
var profile_img_in_profile_box = document.getElementById("profile-img-in-profile-box");

// var username = "KhangTeo0001";
// user.innerText = username;
// profile_name.innerText = username;

profile_img.onclick = () => {
  if(profile_box.style.display == "none"){
    profile_box.style.display = "flex";
  }else{
    profile_box.style.display = "none";
  }
}

// if(profile_img.src != null && profile_img.src != null){
//   console.log("%c[GET 200]:", "color: #8000ff; font-weight: bold;", "Profile Image");
//   profile_img.src = "./img/ktwebsite_plus.JPG";
//   profile_img_in_profile_box.src = "./img/ktwebsite_plus.JPG";
// } else {
//   console.log("%c[ERROR]:", "color: #ff0000; font-weight: bold;", "Profile Image");
//   profile_img.src = "./img/profile.jpg";
//   profile_img_in_profile_box.src = "./img/profile.jpg";
// }

// var profile_img_in_profile_box_responsive = document.getElementById("profile-img-in-profile-box-responsive");
// var profile_name_responsive = document.getElementById("profile-name-responsive");
// var profile_id_responsive = document.getElementById("profile-id-responsive");

// if(profile_img_in_profile_box_responsive.src != null){
//   profile_img_in_profile_box_responsive.src = "./img/ktwebsite_plus.JPG";
// }

// profile_name_responsive.innerText = username;

document.onload = () => {
  console.log("%c[LOADED]:", "color: #8000ff; font-weight: bold;", "All");
}