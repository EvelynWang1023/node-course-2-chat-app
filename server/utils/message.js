var moment = require('moment');

var generateMessage = (from, text) => {
    return {
        from, 
        text,
        createdAt: moment().valueOf() //new Date().getTime()
    };
};

var generateLocationMessage = (from, latitude, longtitude) => {
    return {
        from,
        url: `https://www.google.com/maps?=${latitude},${longtitude}`,
        createdAt: moment().valueOf() //new Date().getTime()
    }
}
module.exports ={generateMessage, generateLocationMessage};