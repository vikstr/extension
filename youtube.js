var url = window.location.href;
function getCurrentTime(){
	var elemCurrentTime = document.getElementsByClassName("ytp-time-current");
	return elemCurrentTime[0].textContent;
};
function getDurationTime(){
	var elemDurationTime = document.getElementsByClassName("ytp-time-duration");
	return elemDurationTime[0].textContent;
};
while(url.search('youtube.com')!=null && url.search('watch')!=null){
	url = window.location.href;
	var elemButtonPlay = document.getElementsByClassName('ytp-play-button');
	elemButtonPlay[0].addEventListener("click", function(){
		var currentTime = getCurrentTime();
		alert(currentTime);
		var durationTime = getDurationTime();
		alert(durationTime);
	});
	url = window.location.href;
	if (url.search('youtube.com')!=null && url.search('watch')!=null){
		var elemFullScreen = document.getElementsByClassName('ytp-fullscreen-button');
		var div = document.createElement('div');
		var circle = document.createElement('div');
		var flag = 1;
		elemFullScreen[0].addEventListener("click", function(){
			if (document.querySelector('[aria-label="Проигрыватель YouTube"]')!=null){
				if(flag>0){
					document.body.appendChild( div );
					document.body.appendChild(circle);
					div.style.position = 'absolute';
					div.style.display = 'inline';
					div.style.width = '364px';
					div.style.height = '62px';
					div.style.top = '82%';
					div.style.left = '15.02%';
					div.style.right = '0%';
					div.style.bottom = '0%';
					div.style.backgroundColor = 'rgba(14, 14, 14, 0.4)';
					div.style.borderRadius = '25px';
					div.style.zindex = '1';
					div.style.cursor = 'pointer';
					circle.style.position = 'absolute';
					circle.style.display = 'inline';
					circle.style.width = '62px';
					circle.style.height = '62px';
					circle.style.top = '82%';
					circle.style.left = '2.02%';
					circle.style.right = '0%';
					circle.style.bottom = '0%';
					circle.style.backgroundColor = 'rgba(14, 14, 14, 0.4)';
					circle.style.borderRadius = '35px';
					circle.style.zindex = '1';
					circle.style.cursor = 'pointer';
					flag = 0;
				}
				else {
					div.style.display = 'inline';
				}
			}
			else {
				if(flag == 0){
					div.style.display = 'none';
				}
			}
		});
	}
	url = window.location.href;
};



