function buttonClicked(buttonName) {
    alert(buttonName + ' clicked!');
}

function downloadVideo() {
    const videoSource = document.getElementById('videoSource').src;
    const link = document.createElement('a');
    link.href = videoSource;
    link.download = 'downloaded-video.mp4'; // You can change the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function changeIcon() {
    const icon = document.getElementById('like-icon');
    icon.classList.toggle('material-symbols-outlined'); // Toggle the active class
    icon.classList.toggle('material-symbols-filled'); // Toggle the default class
}