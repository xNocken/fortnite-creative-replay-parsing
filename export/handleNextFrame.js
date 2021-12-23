const handleNextFrame = ({ timeSeconds, states, result }) => {
  if (!states.performances) {
    states.performances = {
      framerates: [],
      pings: [],
      lastFrameTime: timeSeconds,
      countedFrames: 0,
    };

    result.performances = states.performances;
  }

  if (states.performances.lastFrameTime + 1 > timeSeconds) {
    states.performances.countedFrames += 1;

    return;
  }

  states.performances.framerates.push(states.performances.countedFrames);

  states.performances.countedFrames = 1;
  states.performances.lastFrameTime = timeSeconds;
};

module.exports = handleNextFrame;
