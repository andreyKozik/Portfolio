
document.querySelector('.button_mobile').addEventListener('click', function () {
    if (document.querySelector('.button_mobile').value === 'Mobile') {
        document.querySelector('iframe').width = ('640');
        document.querySelector('iframe').height = ('1553');
        document.querySelector('.button_mobile').value = 'Desktop';
    } else {
        document.querySelector('iframe').width = ('1300');
        document.querySelector('iframe').height = ('1847');
        document.querySelector('.button_mobile').value = 'Mobile';
    }
});
