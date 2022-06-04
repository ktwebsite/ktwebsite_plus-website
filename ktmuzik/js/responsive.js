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
            if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('iPad') > 0){
                notify_text_area.style.display = "block";
                notify_text_area.innerText = "Please note that on iOS devices, the audio level is always under the user’s physical control. The volume property is not settable in JavaScript.";
                console.log("iOS");
            }
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