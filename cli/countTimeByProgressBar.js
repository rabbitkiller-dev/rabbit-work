const fs = require('fs');
const path = require('path');
const ProgressBar = require('progress');

function CountTimeByProgressBar() {
}
CountTimeByProgressBar.prototype.start = function () {
  const startTime = new Date().getTime();
  const endTime = new Date('2019-01-20 18:00:00').getTime() - startTime;
  let lastTime = new Date().getTime() - startTime;
  const bar = new ProgressBar(':bar :current / :surplus | :percent 还剩:h 小时 还剩:s 分', { total: endTime , width: '30'});
  bar.tick(lastTime);
  const timer = setInterval(function () {
    const currentTime = new Date().getTime() - startTime;
    if (currentTime > endTime) {
      bar.tick(endTime - currentTime);
      clearInterval(timer);
    }
    bar.tick(currentTime - lastTime, {
      surplus: endTime - currentTime,
      h: ((endTime - currentTime) / 1000 / 60 / 60).toFixed(),
      s: ((endTime - currentTime) / 1000 / 60).toFixed(),
    });
    lastTime = currentTime;
  }, 200);
};
CountTimeByProgressBar.prototype.front = function () {
}

const count = new CountTimeByProgressBar();
count.start();
