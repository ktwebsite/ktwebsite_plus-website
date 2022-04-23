

var information_box_1 = document.getElementById('information-box1');

information_box_1.oncontextmenu = () => {
    return false;
}

var play_pause_btn = document.getElementById('play-pause-btn');
var seekslider = document.getElementById("seekslider");

var play_btn = `
<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
`
var pause_btn = `
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

function audioSeek () {
    var seekto = audio.duration * (seekslider.value / 100);
    audio.currentTime = seekto;
}

seekslider.addEventListener("change", audioSeek, false);

var time_current = document.getElementById("time-current");
var time_duration = document.getElementById("time-duration");

function currentTime() {
    var nt = audio.currentTime * (100 / audio.duration);
    seekslider.value = nt;
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

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.keyCode === 32) {
        if (play_pause_btn.innerHTML == play_btn) {
            play_pause_btn.innerHTML = pause_btn;
            audio.pause();
        } else {
            play_pause_btn.innerHTML = play_btn;
            audio.play();
        }
    }
});

var speed_2x = document.getElementById("2x");
var speed_1_half = document.getElementById("1.5x");
var speed_1x = document.getElementById("1.0x");
var speed_zero_half = document.getElementById("0.5x");
var speed_zero_25x = document.getElementById("0.25x");
var speed_btn = document.getElementById('speed-btn');
var speed_panel_box = document.getElementById('speed-panel-box');

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

var speed_value = document.getElementById('speed-value');
var speed_panel_alert_box = document.getElementById('speed-panel-alert-box');

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

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.keyCode == 27) {
        speed_panel_box.style.display = 'none';
    }
});

/** Responsive Page */

var speed_panel_alert_box_responsive = document.getElementById('speed-panel-alert-box-responsive-wrapper');

var speed_value_responsive = document.getElementById('speed-value-responsive');


var volume_btn = document.getElementById('volume-btn');
var volume_panel_box = document.getElementById('volume-panel-box');
var volume_oncontextmenu_box = document.getElementById('volume_oncontextmenu_box');

volume_btn.oncontextmenu = () => {
    if(volume_oncontextmenu_box.style.display == 'none') {
        volume_oncontextmenu_box.style.display = 'block';
        volume_panel_box.style.display = 'none';
    } else {
        volume_oncontextmenu_box.style.display = 'none';
    }
}

volume_btn.onclick = () => {
    if(volume_panel_box.style.display == 'none') {
        volume_panel_box.style.display = 'block';
        volume_oncontextmenu_box.style.display = 'none';
    } else {
        volume_panel_box.style.display = 'none';
    }
}

var volume_value = document.getElementById('volume-value');
var volume_slider = document.getElementById('volume-slider');

document.addEventListener("keydown", event => {
    if (event.ctrlKey && event.keyCode === 27) {
        volume_panel_box.style.display = 'none';
        volume_oncontextmenu_box.style.display = 'none';
    }
});

volume_slider.oninput = () => {
    volume_value.innerText = `${volume_slider.value}%`;
}

var volume_mute_icon = `
    <path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path>
`

var volume_unmute_icon = `
    <path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"></path>
`

volume_slider.onchange = () => {
    audio.volume = volume_slider.value / 100;
    if(volume_slider.value == 0) {
        volume_btn.innerHTML = volume_mute_icon;
    } else {
        volume_btn.innerHTML = volume_unmute_icon;
    }
}
var mute = document.getElementById('mute');
var mute_text = document.getElementById('mute-text');

mute.onclick = () => {
    if(audio.volume != 0) {
        audio.volume = 0;
        volume_oncontextmenu_box.style.display = 'none';
        volume_slider.value = 0;
        volume_value.innerText = `${volume_slider.value}%`;
        mute_text.innerText = 'Unmute';
        volume_btn.innerHTML = volume_mute_icon;
    } else {
        audio.volume = 0.8;
        volume_oncontextmenu_box.style.display = 'none';
        volume_slider.value = 80;
        volume_value.innerText = `${volume_slider.value}%`;
        mute_text.innerText = 'Mute';
        volume_btn.innerHTML = volume_unmute_icon;
    }
}

document.addEventListener("keydown", event => {
    if (event.ctrlKey && event.keyCode === 77) {
        if(audio.volume != 0) {
            audio.volume = 0;
            volume_oncontextmenu_box.style.display = 'none';
            volume_slider.value = 0;
            volume_value.innerText = `${volume_slider.value}%`;
            mute_text.innerText = 'Unmute';
            volume_btn.innerHTML = volume_mute_icon;
        } else {
            audio.volume = 0.8;
            volume_oncontextmenu_box.style.display = 'none';
            volume_slider.value = 80;
            volume_value.innerText = `${volume_slider.value}%`;
            mute_text.innerText = 'Mute';
            volume_btn.innerHTML = volume_unmute_icon;
        }
    }
});

var alert_panel_box = document.getElementById('alert-panel-box');
var alert_panel_box_responsive = document.getElementById('alert-panel-box-responsive');
var loop = document.getElementById('loop');
var true_false = document.getElementById('true-false');

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.keyCode === 76){
        if(audio.loop == false){
            audio.loop = true;
            loop.style.display = 'block';
            true_false.innerText = 'Enabled';
            alert_panel_box.style.display = 'block';

            setTimeout(() => {
                alert_panel_box.style.display = 'none';
            }, 2000);
        } else {
            audio.loop = false;
            loop.style.display = 'none';
            true_false.innerText = 'Disabled';
            alert_panel_box.style.display = 'block';

            setTimeout(() => {
                alert_panel_box.style.display = 'none';
            }, 2000);
        }
    }
});

var notify_box = document.getElementById('notify-box');
var notify_text_area = document.getElementById('notify-text-area');
var svg_like_btn = document.getElementById('svg-like-btn');
var like_text = document.getElementById('like-text');
var svg_like_btn_html = `
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
    </svg>
`

var svg_like_btn_fill = `
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path>
    </svg>
`;

var svg_dislike_btn = document.getElementById('svg-dislike-btn');
var dislike_text = document.getElementById('dislike-text');
var svg_dislike_btn_html = `
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
    </svg>
`
var svg_dislike_btn_fill = `
    <svg viewBox="0 0 24 24" width="20" height="20">
        <path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path>
    </svg>
`;

svg_like_btn.onclick = () => {
    if(svg_like_btn.innerHTML != svg_like_btn_fill) {
        svg_like_btn.innerHTML = svg_like_btn_fill;
        like_text.innerText = parseInt(like_text.innerText) + 1;

        if(notify_box.style.display == "none") {
            notify_box.style.display = "block";
            notify_text_area.innerText = 'Saved to \'Liked Music\'.';
            setTimeout(() => {
                notify_box.style.display = "none";
            }, 3000);
        }
    } else {
        if(notify_box.style.display == "none") {
            notify_box.style.display = "block";
            notify_text_area.innerText = 'Removed from \'Liked Music\'.';
            setTimeout(() => {
                notify_box.style.display = "none";
            }, 3000);
        }
        svg_like_btn.innerHTML = svg_like_btn_html;
        like_text.innerText = parseInt(like_text.innerText) - 1;
    }
}

svg_dislike_btn.onclick = () => {
    if(svg_dislike_btn.innerHTML != svg_dislike_btn_fill) {
        svg_dislike_btn.innerHTML = svg_dislike_btn_fill;
        dislike_text.innerText = parseInt(dislike_text.innerText) + 1;
        if(notify_box.style.display == "none") {
            notify_box.style.display = "block";
            notify_text_area.innerText = 'Dislike added.';
            setTimeout(() => {
                notify_box.style.display = "none";
            }, 3000);
        }
    } else {
        svg_dislike_btn.innerHTML = svg_dislike_btn_html;
        dislike_text.innerText = parseInt(dislike_text.innerText) - 1;
    }
}

var mute_box_responsive_btn = document.getElementById('mute-box-responsive-btn');

var black_screen_alpha = document.getElementById('black-screen-alpha');
var embed_code_copy_box = document.getElementById('embed-code-copy-box-wrapper');

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.keyCode === 69){
        if(black_screen_alpha.style.display == 'none' && embed_code_copy_box.style.display == 'none') {
            black_screen_alpha.style.display = 'block';
            embed_code_copy_box.style.display = 'flex';
        } else {
            black_screen_alpha.style.display = 'none';
            embed_code_copy_box.style.display = 'none';
        }
    }
});

var embed_code_close_btn = document.getElementById('embed-code-close-btn');

embed_code_close_btn.onclick = () => {
    black_screen_alpha.style.display = 'none';
    embed_code_copy_box.style.display = 'none';
}

var embed_copy_btn = document.getElementById('embed-copy-btn');
var embed_code_box = document.getElementById('embed-code-box');
var embed_copy_btn_clicked = document.getElementById('embed-copy-btn-clicked');

embed_copy_btn.onclick = () => {
    if(embed_copy_btn_clicked.style.display == 'none') {
        navigator.clipboard.writeText(embed_code_box.innerText);
        embed_copy_btn_clicked.style.display = 'block';
        embed_copy_btn.style.display = 'none';

        setTimeout(() => {
            embed_copy_btn_clicked.style.display = 'none';
            embed_copy_btn.style.display = 'block';
        }, 4000);
    }
}

document.addEventListener("keydown", event => {
    if(event.ctrlKey && event.keyCode === 27){
        black_screen_alpha.style.display = 'none';
        embed_code_copy_box.style.display = 'none';
    }
});

var icon_box_responsive = document.getElementById('icon-box-responsive');
var box_responsive = document.getElementById('box-responsive-wrapper');
var close_icon_box_responsive = document.getElementById('close-icon-box-responsive');
var volume_responsive_box = document.getElementById('volume-responsive-box');
var volume_range_responsive = document.getElementById('volume-range-responsive');
var dislike_response_box_wrapper = document.getElementById('dislike-response-box-wrapper');

icon_box_responsive.onclick = () => {
    if(box_responsive.style.display == 'none') {
        mute_box_responsive_btn.style.display = 'none';
        volume_responsive_box.style.display = 'none';
        dislike_response_box_wrapper.style.display = "none";
        black_screen_alpha.style.display = 'block';
        box_responsive.style.display = 'flex';
    } else {
        black_screen_alpha.style.display = 'none';
        box_responsive.style.display = 'none';
    }
}

var embed_code_box_responsive_btn = document.getElementById('embed-code-box-responsive-btn');
var loop_box_responsive_btn = document.getElementById('loop-box-responsive-btn');
var embed_code_copy_box_responsive = document.getElementById('embed-code-copy-box-responsive');
var box_responsive_inside = document.getElementById('box-responsive-inside');
var embed_copy_btn_responsive = document.getElementById('embed-copy-btn-responsive');
var embed_copy_btn_clicked_responsive = document.getElementById('embed-copy-btn-clicked-responsive');
embed_code_box_responsive_btn.onclick = () => {
    if(embed_code_copy_box_responsive.style.display == 'none') {
        
        box_responsive_inside.classList.add("box-responsive-fadeout");
        setTimeout(() => {  
            embed_code_box_responsive_btn.style.display = 'none';
            loop_box_responsive_btn.style.display = 'none';
            embed_code_copy_box_responsive.style.display = 'block';
            box_responsive_inside.classList.remove("box-responsive-fadeout");
            box_responsive_inside.classList.add("box-responsive-fadein");
        }, 100);
    }
}

embed_copy_btn_responsive.onclick = () => {
    if(embed_copy_btn_clicked.style.display == 'none') {
        navigator.clipboard.writeText(embed_code_box.innerText);
        embed_copy_btn_clicked_responsive.style.display = 'block';
        embed_copy_btn_responsive.style.display = 'none';

        setTimeout(() => {
            embed_copy_btn_clicked_responsive.style.display = 'none';
            embed_copy_btn_responsive.style.display = 'block';
        }, 4000);
    }
}

close_icon_box_responsive.onclick = () => {
    box_responsive.style.display = 'none';
    embed_code_copy_box_responsive.style.display = 'none';
    embed_code_box_responsive_btn.style.display = 'block';
    loop_box_responsive_btn.style.display = 'block';
    black_screen_alpha.style.display = 'none';
}

var alert_panel_box_responsive_wrapper = document.getElementById('alert-panel-box-responsive-wrapper');
var true_false_loop = document.getElementById('true-false-loop');
var loop_box_responsive_btn_text = document.getElementById('loop-box-responsive-btn-text');

loop_box_responsive_btn.onclick = () => {
    if(audio.loop == false){
        audio.loop = true;
        loop.style.display = 'block';
        true_false_loop.innerText = 'Enabled';
        box_responsive.style.display = 'none';
        black_screen_alpha.style.display = 'none';
                alert_panel_box_responsive_wrapper.style.display = 'flex';
                loop_box_responsive_btn.classList.add("loop-box-responsive-btn-clicked");
                loop_box_responsive_btn_text.innerText = 'Disable Loop';

                setTimeout(() => {
                    alert_panel_box_responsive_wrapper.style.display = 'none';
                }, 2000);
            } else {
                audio.loop = false;
                loop_box_responsive_btn.classList.remove("loop-box-responsive-btn-clicked");
                loop_box_responsive_btn_text.innerText = 'Loop';
                box_responsive.style.display = 'none';
                black_screen_alpha.style.display = 'none';
                loop.style.display = 'none';
                true_false_loop.innerText = 'Disabled';
                alert_panel_box_responsive_wrapper.style.display = 'flex';

                setTimeout(() => {
                    alert_panel_box_responsive_wrapper.style.display = 'none';
                }, 2000);
        }
    }

    var volume_value_responsive = document.getElementById('volume-value-responsive');
    
    volume_range_responsive.onchange = () => {
        audio.volume = volume_range_responsive.value / 100;
        if(volume_range_responsive.value == 0) {
            volume_btn.innerHTML = volume_mute_icon;
        } else {
            volume_btn.innerHTML = volume_unmute_icon;
        }
    }

    volume_range_responsive.oninput = () => {
        volume_value_responsive.innerText = `${volume_range_responsive.value}%`;
    }

// Responsive Page


function Responsive (mq) {
    if(mq.matches){
        speed_2x.onclick = () => {
            if(speed_panel_alert_box_responsive.style.display == 'none') {
                speed_panel_box.style.display = 'none';
                speed_panel_alert_box_responsive.style.display = 'flex';
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
                speed_panel_alert_box_responsive.style.display = 'flex';
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
                speed_panel_alert_box_responsive.style.display = 'flex';
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
                speed_panel_alert_box_responsive.style.display = 'flex';
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
                speed_panel_alert_box_responsive.style.display = 'flex';
                audio.playbackRate = 0.25;
                speed_value_responsive.innerText = speed_zero_25x.innerText;
                setTimeout(() => {
                    speed_panel_alert_box_responsive.style.display = 'none';
                }, 2000);
            }
        }
        volume_btn.onclick = () => {
            if(box_responsive.style.display == 'none') {
                mute_box_responsive_btn.style.display = 'block';
                volume_responsive_box.style.display = 'flex';
                volume_panel_box.style.display = 'none';
                embed_code_box_responsive_btn.style.display = 'none';
                loop_box_responsive_btn.style.display = 'none';
                box_responsive.style.display = 'flex';
                black_screen_alpha.style.display = 'block';
            } else {
                box_responsive.style.display = 'none';
                black_screen_alpha.style.display = 'none';
            }
        }
        var mute_responsive_btn_text = document.getElementById('mute-responsive-btn-text');
        var mute_box_responsive_icon = document.getElementById('mute-box-responsive-icon');
        mute_box_responsive_btn.onclick = () => {
            if(audio.volume != 0){
                audio.volume = 0;
                embed_code_box_responsive_btn.style.display = 'block';
                loop_box_responsive_btn.style.display = 'block';
                volume_range_responsive.value = 0;
                volume_value_responsive.innerText = `${volume_range_responsive.value}%`;
                box_responsive.style.display = 'none';
                black_screen_alpha.style.display = 'none';
                volume_btn.innerHTML = volume_mute_icon;
                mute_box_responsive_icon.innerHTML = volume_unmute_icon;
                mute_responsive_btn_text.innerText = 'Unmute';
            } else {
                audio.volume = 0.8;
                volume_range_responsive.value = 80;
                embed_code_box_responsive_btn.style.display = 'block';
                loop_box_responsive_btn.style.display = 'block';
                volume_value_responsive.innerText = `${volume_range_responsive.value}%`;
                box_responsive.style.display = 'none';
                black_screen_alpha.style.display = 'none';
                volume_btn.innerHTML = volume_unmute_icon;
                mute_box_responsive_icon.innerHTML = volume_mute_icon;
                mute_responsive_btn_text.innerText = 'Mute';
            }
        }
    }
    }
    
    var mq = window.matchMedia("(max-width: 800px)");
    Responsive(mq);
    mq.addListener(Responsive);

var textarea = document.getElementById('textarea');

document.onmouseup = (e) => {
    textarea.classList.add('textarea-highlight');
    if(!textarea.contains(e.target)) {
        textarea.classList.remove('textarea-highlight');
    }
}

var dislike_times = "0";
var close_icon_dislike_response_box = document.getElementById('close-icon-dislike-response-box');

svg_dislike_btn.addEventListener('click', (e) => {
    e.preventDefault();
    dislike_times++;

    if(dislike_times == "20") {
        black_screen_alpha.style.display = 'block';
        dislike_response_box_wrapper.style.display = 'flex';
        dislike_times = "0";
    }
});

close_icon_dislike_response_box.onclick = () => {
    black_screen_alpha.style.display = 'none';
    dislike_response_box_wrapper.style.display = 'none';
}

var response_box = document.getElementById('response-box');
var maxCharacterCount = document.getElementById('maxCharacterCount');
var maxCharacterNotify = document.getElementById('maxCharacterNotify');

var max = 300;
response_box.onkeyup = () => {
    if(response_box.innerText.length > max) {
        response_box.innerText = response_box.innerText.substring(0, max);
    } else {
        textarea.classList.remove('textarea-highlight-maximum-characters-reached');
        maxCharacterNotify.innerText = '';
    }

    if(response_box.innerText.length == max) {
        textarea.classList.add('textarea-highlight-maximum-characters-reached');
        maxCharacterNotify.innerText = 'Maximum characters reached.';
    } else {
        textarea.classList.remove('textarea-highlight-maximum-characters-reached');
        maxCharacterNotify.innerText = '';
    }

    maxCharacterCount.innerText = `${response_box.innerText.length}/300`;
}

var dislike_form_submit = document.getElementById('dislike-form-submit');

document.getElementById("dislike-form").addEventListener("keydown", (e) => {
    if(e.ctrlKey && e.keyCode == 13) {
        e.preventDefault();
        dislike_form_submit.click();
    }
})