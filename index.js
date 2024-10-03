const logger = require('./logger');

const obj = { nome: 'Pedro Geromel' }

try {
    console.log(obj.nome);
    
    
    logger.error("Error message");
    logger.warn("Warning message");
    logger.info("Info message");
} catch (error) {
    logger.error(error)
}