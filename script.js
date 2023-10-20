function processData(input) {
    let dates = input.split(' ');
    for(let i = 0; i < dates.length; i++) {
        let p = dates[i].split('-');
        let day = p[0];
        let month = p[1];
        let year = p[2];
        dates[i] = month + '-' + day + '-' + year
    }
    let[startDate, endDate] = dates;
    let start = new Date(startDate);
    let end = new Date(endDate);
    
    let numLuckyDays = 0;
    let currDate = start;
    while(currDate.getTime() <= end.getTime()) {
        let dateToNum = parseInt(`${currDate.getDate()}${currDate.getMonth()}${currDate.getFullYear()}`);
        let checkLucky = dateToNum % 4 === 0 || dateToNum % 7 === 0;
        if(checkLucky) numLuckyDays++;
        currDate.setDate(currDate.getDate() + 1);
    }
  
    console.log(numLuckyDays);
    return numLuckyDays;
} 
