var search = document.getElementById('search');
var search_box = document.getElementById('search-box');
var close_btn = document.getElementById('close_btn');
var profile = document.getElementById("profile-img-box");

search.onclick = () => {
    if (search_box.style.display == 'none') {
        search_box.style.display = 'block';
        profile.style.display = 'none';
    } else {
        search_box.classList.add('search-box-animateleft');
        setTimeout(() => {
            search_box.classList.remove("search-box-animateleft");
            search_box.style.display = 'none';
            profile.style.display = 'block';
        }, 400);
    }
}

close_btn.onclick = () => {
    profile.style.display = 'block';
    search_box.style.display = 'none';
    document.querySelector("#search_input_box").value = '';
}