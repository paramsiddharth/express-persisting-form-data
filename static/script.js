window.addEventListener('load', () => {
    console.log('asdads')
    document.getElementById('submit-form').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('msg').hidden = false;
        setTimeout(() => {
            document.getElementById('form').submit();
        }, 300);
    });
});