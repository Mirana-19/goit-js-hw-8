import Player from '@vimeo/player';

const STORAGE_KEY = 'videoplayer-current-time';
const videoPlayerEl = document.querySelector('#vimeo-player');
const player = new Player(videoPlayerEl);
const throttle = require('lodash.throttle');

onPageLoad();

player.on('timeupdate', throttle(getVideoTimestamp, 1000));

function getVideoTimestamp(time) {
  saveToLS(STORAGE_KEY, time.seconds);
}

function onPageLoad() {
  if (loadFromLS(STORAGE_KEY)) {
    player.setCurrentTime(loadFromLS(STORAGE_KEY));
  }
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
