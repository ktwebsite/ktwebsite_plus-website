const body = document.getElementById("body");
    const targetDiv = document.getElementById("otherbox");
    const btn = document.getElementById("other");
    btn.onclick = function () {
        if (targetDiv.style.display !== "block") {
            targetDiv.style.display = "block";
            body.style.overflow = "hidden";
        } else {
            targetDiv.style.display = "none";
            body.style.overflow = "scroll";
            body.style.overflowX = "hidden";
        }
    };