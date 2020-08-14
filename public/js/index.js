const track = document.querySelector('.track');
const playBtn = document.querySelector('#play-button');

const TRACKSTATUSES = Object.freeze({ playing: 'playing', paused: 'paused' });

let trackStatus = TRACKSTATUSES.paused;


playBtn.addEventListener('click', event => {
    if (trackStatus === TRACKSTATUSES.paused) {
        track.play();
        trackStatus = TRACKSTATUSES.playing;
    }
    else if (trackStatus === TRACKSTATUSES.playing) {
        track.pause();
        trackStatus = TRACKSTATUSES.paused;
    }
})
    