/* password button state change */
let passBtn = Array.from(document.querySelectorAll('.pass_btn'));
passBtn.forEach(function(item, i, arr) {
    item.addEventListener('click', () => {
        let state = item.getAttribute('data-state');
        if (state == 'invisible') {
            item.previousElementSibling.type = 'text';
            item.dataset.state = 'visible';
        } else {
            item.previousElementSibling.type = 'password';
            item.dataset.state = 'invisible';
        }
    });
});


/* adding new parametres inputs */
function addInput(elem) {
    let cloneInput = elem.previousElementSibling.cloneNode(true);
    elem.before(cloneInput);
}


// on account page show unverified email window
$(".unverified_trigger").on('click', function() {
    $(".unverified_window").removeClass('d-none');
});

// открываем/закрываем блок, добаляя/удаляя класс 'd-none'
function closeDiv(elem) {
    elem.classList.add('d-none');
}
//скрываем опции при клике вне селекта
let item = document.querySelector('.unverified_window');
let btn = document.querySelector('.unverified_trigger');
document.addEventListener('click', function(e) {
    const target = e.target;
    const currentBtn = target == btn || btn.contains(target);
    const currentDiv = target == item || item.contains(target);
    if (!currentDiv && !currentBtn) {
        closeDiv(item);
    }
});

// forum page show topic description
$('.btn_desc').on('click', function() {
    $(this).addClass('d-none');
    $(this).next(".topic_link").removeClass('d-none');
    $(this).closest(".br_10").children(".topic_desc").removeClass('d-none');
});