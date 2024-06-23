document.querySelectorAll("#featureImg").forEach(item => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll("#featureImg").forEach(otherItem => {
            if (item === otherItem) {
                otherItem.classList.add('scale-up');
            } else {
                otherItem.classList.add('scale-down');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll("#featureImg").forEach(otherItem => {
            otherItem.classList.remove('scale-down');
            otherItem.classList.remove('scale-up');
        });
    });
});


document.querySelectorAll(".menuItem").forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.remove('menu-hover-down')
        item.classList.add('menu-hover-up')
    })

    item.addEventListener('mouseleave', () => {
        item.classList.add('menu-hover-down')
        item.classList.remove('menu-hover-up')

    })
})
