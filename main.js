$(document).ready(() => {

    let variants = [
        'rgb(170,58,58)',
        'rgb(211,48,48)',
        'rgb(237,64,64)',
        'rgb(229,22,22)',
        'rgb(239,101,98)'
    ]

    let red = 1;
    let percent = 0;
    $('#more-red').on('click', e => {
        $('body').animate({
            backgroundColor: variants[red]
        }, 3000);
        let target = percent + 20;
        let interval = setInterval(() => {
            $('#level').text(`${percent}%`);
            if (percent >= target) clearInterval(interval);
            percent++;
        }, 100);
        red ++;
        if(red > variants.length) red = 0;
    });
});