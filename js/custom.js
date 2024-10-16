$(document).ready(function () {

    // update

    document.getElementById('subscribeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email').value;
        var thanksMessage = document.getElementById('thanksMessage');

        if (emailInput) {
            thanksMessage.style.display = 'block';
            document.getElementById('email').value = '';
        } else {
            thanksMessage.style.display = 'none';
        }
    });

});
