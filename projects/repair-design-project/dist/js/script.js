document.querySelector('.button_mobile').addEventListener('click', function () {
    if (document.querySelector('.button_mobile').value === 'Mobile') {
        document.querySelector('iframe').width = ('375');
        document.querySelector('iframe').height = ('8970');
        document.querySelector('.button_mobile').value = 'Desktop';
    } else {
        document.querySelector('iframe').width = ('1440');
        document.querySelector('iframe').height = ('10395');
        document.querySelector('.button_mobile').value = 'Mobile';
    }
});