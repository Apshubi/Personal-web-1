// video.js
document.getElementById('play-video').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接的默认跳转行为
    var videoUrl = this.getAttribute('data-video-url'); // 获取视频链接
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoUrl; // 设置视频源
    videoPlayer.style.display = 'block'; // 显示视频播放器
    videoPlayer.play(); // 播放视频
});
