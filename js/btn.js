document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')

    document.getElementById('txt').style.display = 'none';
    setTimeout(() => {
      evt.target.classList.remove('loading')
    }, 4000);
})