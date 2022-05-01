const fs = require('fs');
const { parse } = require('fortnite-replay-parser');
const setListener = require('./export/setListener');
const enums = require('./enums');
const classes = require('./classes');
const NetFieldExports = require('./netFieldExports');

(async () => {
  const replayBuffer = fs.readFileSync('C:/Users/marcm/AppData/Local/FortniteGame/Saved/Demos/2022.03.00-18.38.replay');

  console.time();
  const parsedReplay = await parse(replayBuffer, {
    parseLevel: 10,
    customNetFieldExports: NetFieldExports,
    customClasses: classes,
    customEnums: enums,
    onlyUseCustomNetFieldExports: true,
    debug: true,
    handleEventEmitter: setListener,
    parseEvents: false,
    useCheckpoints: false,
  });
  console.timeEnd();

  const { framerates, pings } = parsedReplay.performances;

  const avgFramerate = framerates.reduce((tot, cur) => tot + cur, 0) / framerates.length;
  const avgPing = pings.reduce((tot, cur) => tot + cur, 0) / pings.length;

  console.log(avgFramerate, avgPing);

  fs.writeFileSync('replay.json', JSON.stringify(parsedReplay, null, 2));
})().catch((err) => {
  console.error(err.stack);
});
