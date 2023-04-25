let myImages = document.querySelectorAll('.container div.image');

myImages.forEach(img => {
    img.addEventListener('click', (e) => {
        myImages.forEach(img => {
            img.classList.remove('flex');
        })
        e.currentTarget.classList.add('flex');
    })
})

