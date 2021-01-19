const puppeteer = require('puppeteer')


    const getBookingCode = async (bookiefrom, bookieto, bookingCode) => {
        console.log('puppeteer started');
        const broswer = await puppeteer.launch({ args: ['--no-sandbox']})
        const page = await broswer.newPage()
        await page.goto(`https://www.${bookiefrom}.com`,  {waitUntil: 'load', timeout: 0})
        await page.type('#mtSearch', bookingCode)
        await page.click('#searchIconBetslip')
        await page.waitForNavigation()
        await page.screenshot({ path: screenshot })

        console.log('done') 
        
        await broswer.close()
        console.log('See screenshot: ' + screenshot)
    }
   

exports.getBookingCode = getBookingCode