const removeAd = () => {
    const vlogad = document.querySelector('.vlog-ad');
    if (vlogad) {
        console.log('removed');
        vlogad.remove();
    } else {
        setTimeout(removeAd, 1000);
    }
};

document.querySelector('body').addEventListener('DOMNodeInserted', (e) => {
    if (e.target.tagName === 'IFRAME') {
        if (e.target.src.indexOf('https://multicanais.com/player.php') > -1) {
            return;
        }

        if (e.target.src.indexOf('https://futemax.fm/') > -1) {
            return;
        }

        if (e.target.src.indexOf('http://www.superflix.net/') > -1) {
            return;
        }
    }

    switch (e.target.tagName) {
        case 'IFRAME':
        case 'SCRIPT':
            e.target.remove();
            break;
    }
});

removeAd();