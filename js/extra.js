/*************** 
CUSTOM SELECT
****************/
window.onload = function() {
    let selectElement = document.querySelectorAll('.custom-select');
    let arr_selects = Array.from(selectElement);
    arr_selects.forEach(function(item, i, arr) {
        const btn = item.querySelector('button');
        const options = item.querySelector('.cs-options');
        let inputs = item.querySelectorAll('input');
        let name = inputs[0].name;

        let cur_inp; //выбранный input radio
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                cur_inp = inputs[i];
            }
        }

        if (cur_inp) {
            let label_content = cur_inp.nextElementSibling.innerHTML; //содержимое label следующего после выбранного input
            btn.innerHTML = label_content;
        } else {
            btn.innerHTML = "Не выбрано";
        }

        const toggleMenu = function() {
            // открываем/закрываем окно навигации, добаляя/удаляя активный класс
            options.classList.toggle('opened');
        }

        btn.addEventListener('click', () => { // при клике на кнопку
            toggleMenu();
        });

        //скрываем опции при клике вне селекта
        document.addEventListener('click', function(e) {
            const target = e.target;
            const current_sel = target == item || item.contains(target);
            const sel_is_opened = options.classList.contains('opened');
            if (!current_sel && sel_is_opened) {
                toggleMenu();
            }
        });

        let arr_radio = Array.from(inputs);
        arr_radio.forEach(function(item, i, arr) {
            item.addEventListener('change', (event) => {
                changeValueLabel(item);
            });
        });


        function changeValueLabel(el) {
            let label_content = el.nextElementSibling.innerHTML;
            btn.innerHTML = label_content;
            toggleMenu();
        }
    });
}

/************  
SEARCH / FILTER 
*************/
let searchEl = document.querySelectorAll('.search-in-list');
let arr_search = Array.from(searchEl);
arr_search.forEach(function(item, i, arr) {
    item.addEventListener('keyup', (event) => {
        listSearch(item);
    });
});

function listSearch(elem) {
    let phrase = elem.value.trim();
    let arr = elem.closest('.search-list').querySelectorAll('.search-item');
    let regPhrase = new RegExp(phrase, 'i');

    console.log('phrase = ' + phrase);

    if (phrase.length == 0) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('overlap');
            arr[i].classList.remove('diff');
        }
    } else {
        let flag = false;
        for (let i = 0; i < arr.length; i++) {
            flag = regPhrase.test(arr[i].innerHTML);
            if (flag) {
                arr[i].classList.add('overlap');
            } else {
                arr[i].classList.add('diff');
            }
            // if (flag) break;
        }
    }
}