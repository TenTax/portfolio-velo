const anchors = () => {
    const anchor = document.querySelectorAll('a[href*="#"]')

    anchor.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();

            const blockID = item.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        });
    });

};

export default anchors;