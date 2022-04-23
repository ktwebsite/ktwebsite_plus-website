const search = document.getElementById('search');
const search_box = document.getElementById('search-box');
const close_btn = document.getElementById('close_btn');

search.onclick = () => {
    if (search_box.style.display == 'none') {
        search_box.style.display = 'block';
    } else {
        search_box.classList.add('search-box-animateleft');
        setTimeout(() => {
            search_box.classList.remove("search-box-animateleft");
            search_box.style.display = 'none';
        }, 400);
    }
}

close_btn.onclick = () => {
    search_box.style.display = 'none';
}