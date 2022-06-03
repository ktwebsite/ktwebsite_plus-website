function Responsive (mq) {
    if(mq.matches){
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
    }
}
    
var mq = window.matchMedia("(max-width: 800px)");
Responsive(mq);
mq.addListener(Responsive);