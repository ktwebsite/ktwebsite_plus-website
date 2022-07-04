if(typeof(Storage) !== "undefined") {
    sessionStorage.setItem("volume_slider_value", volume_slider.value);
    sessionStorage.setItem("volume_value", volume_value.innerText);

    volume_slider.value = sessionStorage.getItem("volume_slider_value");
    volume_value.innerText = sessionStorage.getItem("volume_value");
} else {
    console.warn("%cThere was an error while running cookies. Learn more at https://ktwebsite-support.glitch.me/", "font-weight: bold; color: red;");
}