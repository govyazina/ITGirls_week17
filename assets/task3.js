function formatDate(date) {
    let diffDate = new Date() - date;
    if(diffDate < 1000){
        return "прямо сейчас"
    }
    else if (diffDate < 1000*60){
        return diffDate/1000 + ' сек. назад';
    }
    else if (diffDate < 1000*60*60){
        return diffDate/1000/60 + ' мин. назад';
    }
    else {
        return date.getDate() + '.' + (date.getMonth() + 1) + '.' + (date.getFullYear() % 100) + ' ' + date.getHours() + ':' + date.getMinutes();
    }
}

module.exports = formatDate;