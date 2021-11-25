const fs = require('fs');
const parse = require('fortnite-replay-parser');
const setListener = require('./export/setListener');
const enums = require('./enums');
const classes = require('./classes');
const NetFieldExports = require('./netFieldExports');

(async () => {
  const replayBuffer = fs.readFileSync('replays/test2.replay');

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
  });
  console.timeEnd();

  fs.writeFileSync('replay.json', JSON.stringify(parsedReplay, null, 2));
})().catch((err) => {
  console.error(err.stack);
});
