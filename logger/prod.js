const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, json } = format;

const prodLogger = () => {

return createLogger({
    level: 'error',
    format: combine(
        timestamp(),
        json()
      ),
    //defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
      new transports.Console(),
    ],
  });
}
  
module.exports = prodLogger;