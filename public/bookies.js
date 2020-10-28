const bookies = ['betway', 'soccabet', 'betpawa', 'sportybet']



bookies.forEach(bookie =>{
    
    const filler = `<option value= ${bookie}> ${bookie} </option>`
    document.getElementsByClassName('bookies')[0].innerHTML += filler
    document.getElementsByClassName('bookies')[1].innerHTML += filler
    // console.log(filler);
})

