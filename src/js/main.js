// scholl Button event listener
document.getElementById('scrollButton').addEventListener('click', function () {
    const targetSection = document.getElementById('targetSection');

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
