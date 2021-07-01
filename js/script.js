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



function toggleDiv(elem) {
    // открываем/закрываем окно, добаляя/удаляя активный класс
    elem.classList.toggle('d-none');
}
//скрываем опции при клике вне селекта
let item = document.getElementById('unverified_window');
document.addEventListener('click', function(e) {
    const target = e.target;
    const currentDiv = target == item || item.contains(target);
    const div_is_closed = options.classList.contains('d-none');
    if (!currentDiv && !div_is_closed) {
        toggleDiv(item);
    }
});