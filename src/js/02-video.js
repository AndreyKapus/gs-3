var throttle = require('lodash.throttle');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

const lastSavedTime = localStorage.getItem('seconds');


if (lastSavedTime) {
  player.setCurrentTime(lastSavedTime);
}

player.on('timeupdate', throttle(function (timeObj) {
    localStorage.setItem('seconds', JSON.stringify(timeObj.seconds)
    );
  }, 1000)
);