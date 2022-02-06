const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json } = format;


const stageLogger = () => {
return createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        json()
      ),
    //defaultMeta: { service: 'user-service' },
    transports: [
      //
      // For monitoring log is written directly to console
      //
      new transports.Console(),
    ],
  });
}
  
module.exports = stageLogger;