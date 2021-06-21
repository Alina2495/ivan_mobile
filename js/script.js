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

// write review on user page
$(".write-review-btn").on('click', function() {
    $(".write-review-btn").prop('disabled', 'true');
    $(".write-review-block").removeClass('d-none');
    $(".bg-block").removeClass('d-none');
});

$(".write-review-close").on('click', function() {
    $(".write-review-btn").removeAttr('disabled');
    $(".write-review-block").addClass('d-none');
    $(".bg-block").addClass('d-none');
});

// send message on user page
$(".write-message-btn").on('click', function() {
    $(".write-message-block").removeClass('d-none');
    $(".bg-block").removeClass('d-none');
});

$(".write-message-close").on('click', function() {
    $(".write-message-block").addClass('d-none');
    $(".bg-block").addClass('d-none');
});


// delete dialogue on user page
$(".dialogue-delete-btn").on('click', function() {
    $(".write-message-block").removeClass('d-none');
});