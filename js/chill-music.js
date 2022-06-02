
const sort_by_value_box = document.getElementById('sort-by-value-box');
const sort_by_selection_box = document.getElementById('sort-by-selection-box');
const svg = document.getElementById('svg');
const most_popular = document.getElementById('most-popular');
const all_music = document.getElementById('all-music');
const value = document.getElementById('value');

sort_by_value_box.onclick = () => {
    if (sort_by_selection_box.style.display == 'none') {
        sort_by_selection_box.style.display = 'block';
        svg.classList.remove('svg-rotateout');
        svg.classList.add('svg-rotatein');
        svg.style.transform = 'rotate(180deg)';
    } else {
        sort_by_selection_box.classList.add('sort-by-selection-box-out');
        setTimeout(() => {
            sort_by_selection_box.style.display = 'none';
            sort_by_selection_box.classList.remove('sort-by-selection-box-out');
        }, 200);
        svg.classList.remove('svg-rotatein');
        svg.classList.add('svg-rotateout');
        svg.style.transform = 'rotate(360deg)';
    }
}

most_popular.onclick = () => {
    value.innerText = most_popular.innerText;
    sort_by_selection_box.classList.add('fade');
    setTimeout(() => {
        sort_by_selection_box.classList.remove('fade');
        sort_by_selection_box.style.display = 'none';
    }, 200);
    svg.classList.remove('svg-rotatein');
    svg.classList.add('svg-rotateout');
    svg.style.transform = 'rotate(360deg)';


}

all_music.onclick = () => {
    value.innerText = all_music.innerText;
    sort_by_selection_box.classList.add('fade');
    setTimeout(() => {
        sort_by_selection_box.classList.remove('fade');
        sort_by_selection_box.style.display = 'none';
    }, 200);
    svg.classList.remove('svg-rotatein');
    svg.classList.add('svg-rotateout');
    svg.style.transform = 'rotate(360deg)';
}


const number_views = document.getElementById('number-views');

const play_pause_btn = document.getElementById('play-pause-btn');

const play_btn = `
    <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
`
const pause_btn = `
    <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
`

play_pause_btn.onclick = () => {
    if (play_pause_btn.innerHTML == play_btn) {
        play_pause_btn.innerHTML = pause_btn;
        audio.pause();
    } else {
        play_pause_btn.innerHTML = play_btn;
        audio.play();
    }
}

const time_current = document.getElementById("time-current");
const time_duration = document.getElementById("time-duration");

function currentTime() {
    audio.currentTime * (100 / audio.duration);
    var curmins = Math.floor(audio.currentTime / 60);
    var cursecs = Math.floor(audio.currentTime - curmins * 60);
    var durmins = Math.floor(audio.duration / 60);
    var dursecs = Math.floor(audio.duration - durmins * 60);
    if (cursecs < 10) { cursecs = "0" + cursecs; }
    if (dursecs < 10) { dursecs = "0" + dursecs; }
    if (curmins < 10) { curmins = "0" + curmins; }
    if (durmins < 10) { durmins = "0" + durmins; }
    time_current.innerHTML = curmins + ":" + cursecs;
    time_duration.innerHTML = durmins + ":" + dursecs;
}

audio.addEventListener("timeupdate", currentTime);

audio.onended = () => {
    play_pause_btn.innerHTML = pause_btn;
}

const speed_2x = document.getElementById("2x");
const speed_1_half = document.getElementById("1.5x");
const speed_1x = document.getElementById("1.0x");
const speed_zero_half = document.getElementById("0.5x");
const speed_zero_25x = document.getElementById("0.25x");
const speed_btn = document.getElementById('speed-btn');
const speed_panel_box = document.getElementById('speed-panel-box');

speed_btn.onclick = () => {
    if (speed_panel_box.style.display == 'none') {
        speed_panel_box.style.display = 'block';
        speed_btn.classList.add("speed-btn-animation");
        setTimeout(() => {
            speed_btn.classList.remove("speed-btn-animation");
        }, 500);
    } else {
        speed_panel_box.style.display = 'none';
    }
}

const speed_value = document.getElementById('speed-value');
const speed_panel_alert_box = document.getElementById('speed-panel-alert-box');

speed_2x.onclick = () => {
    if(speed_panel_alert_box.style.display == 'none') {
        speed_panel_box.style.display = 'none';
        speed_panel_alert_box.style.display = 'block';
        audio.playbackRate = 2;
        speed_value.innerText = speed_2x.innerText;
        setTimeout(() => {
            speed_panel_alert_box.style.display = 'none';
        }, 2000);
    }
}

speed_1_half.onclick = () => {
    if(speed_panel_alert_box.style.display == 'none') {
        speed_panel_box.style.display = 'none';
        speed_panel_alert_box.style.display = 'block';
        audio.playbackRate = 1.5;
        speed_value.innerText = speed_1_half.innerText;
        setTimeout(() => {
            speed_panel_alert_box.style.display = 'none';
        }, 2000);
    }
}

speed_1x.onclick = () => {
    if(speed_panel_alert_box.style.display == 'none') {
        speed_panel_box.style.display = 'none';
        speed_panel_alert_box.style.display = 'block';
        audio.playbackRate = 1;
        speed_value.innerText = speed_1x.innerText;
        setTimeout(() => {
            speed_panel_alert_box.style.display = 'none';
        }, 2000);
    }
}

speed_zero_half.onclick = () => {
    if(speed_panel_alert_box.style.display == 'none') {
        speed_panel_box.style.display = 'none';
        speed_panel_alert_box.style.display = 'block';
        audio.playbackRate = 0.5;
        speed_value.innerText = speed_zero_half.innerText;
        setTimeout(() => {
            speed_panel_alert_box.style.display = 'none';
        }, 2000);
    }
}

speed_zero_25x.onclick = () => {
    if(speed_panel_alert_box.style.display == 'none') {
        speed_panel_box.style.display = 'none';
        speed_panel_alert_box.style.display = 'block';
        audio.playbackRate = 0.25;
        speed_value.innerText = speed_zero_25x.innerText;
        setTimeout(() => {
            speed_panel_alert_box.style.display = 'none';
        }, 2000);
    }
}

/** Responsive Page */

const speed_panel_alert_box_responsive = document.getElementById('speed-panel-alert-box-responsive');

const speed_value_responsive = document.getElementById('speed-value-responsive');

function speed (mq) {
    if(mq.matches){
        speed_2x.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'block';
                audio.playbackRate = 2;
                speed_value_responsive.innerText = speed_2x.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
        speed_1_half.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'block';
                audio.playbackRate = 1.5;
                speed_value_responsive.innerText = speed_1_half.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
        speed_1x.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'block';
                audio.playbackRate = 1;
                speed_value_responsive.innerText = speed_1x.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
        speed_zero_half.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'block';
                audio.playbackRate = 0.5;
                speed_value_responsive.innerText = speed_zero_half.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
        speed_zero_25x.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'block';
                audio.playbackRate = 0.25;
                speed_value_responsive.innerText = speed_zero_25x.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
    }
}

var mq = window.matchMedia("(max-width: 800px)");
speed(mq);
mq.addListener(speed);