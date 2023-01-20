const burger = document.querySelector('.btn-burger');
const navigation = document.querySelector('.navigation__list');

burger?.addEventListener('click', () => {
    navigation?.classList.toggle('active-nav');

    burger.classList.toggle('burger-active');
});

