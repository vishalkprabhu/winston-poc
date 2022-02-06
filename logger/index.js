const stageLogger = require('./stage')
const productionLogger = require('./prod')

let logger = null;

if (process.env.NODE_ENV === "dev") {
    logger = stageLogger()
}

if (process.env.NODE_ENV === "production") {
    logger = productionLogger()
}

module.exports = logger;