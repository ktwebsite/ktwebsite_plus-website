if(navigator.onLine){
    console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "ONLINE");
}else{
    console.log("%c[INTERNET STATUS]:", "color: #8000ff; font-weight: bold;", "OFFLINE");
    console.error("Cannot load data from server. Please check your internet connection.");
}