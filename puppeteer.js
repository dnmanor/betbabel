const puppeteer = require('puppeteer')


    const getBookingCode = async (bookiefrom, bookieto, bookingCode) => {
        console.log('puppeteer started');
        const broswer = await puppeteer.launch({ args: ['--no-sandbox']})
        const page = await broswer.newPage()
        await page.goto(`https://www.${bookiefrom}.com`,  {waitUntil: 'load', timeout: 0})
        console.log('done') 

        await broswer.close()
    }
   

exports.getBookingCode = getBookingCode