
const cardDetail = $('#card-detail');
const cardHolderName = $('#card-holder-name');

const cardNumberInput = $('#number');
const cardNumber = $('.card-number');

const monthInput = $('#month');
const cardMonth = $('.card-month');

const yearInput = $('#year');
const cardYear = $('.card-year');

const ccvInput = $('#ccv');
const cardCcv = $('.ccv-cb-text');

const validationError = $('.input');
const form = $('form');

validationError.removeAttr("data-error-number");
validationError.removeAttr("data-error-required");


cardDetail.on("input", function() {
    cardHolderName.text($(this).val());

});
cardDetail.blur(function(){
    if ($(this).val() == '') {
        cardHolderName.text("Jane Appleseed"); 
}
});


cardNumberInput.on("input", function() {

    cardNumber.text($(this).val());

});

cardNumberInput.blur(function(){
    if ($(this).val() == '') {
        cardNumber.text("0000 0000 0000 0000"); 
}
});



monthInput.on("input", function() {

    cardMonth.text($(this).val());

});

monthInput.blur(function(){
    if ($(this).val() == '') {
        cardMonth.text("00"); 
}
});

yearInput.on("input", function() {

    cardYear.text($(this).val());

});

yearInput.blur(function(){
    if ($(this).val() == '') {
        cardYear.text("00"); 
}
});

ccvInput.on("input", function() {

    cardCcv.text($(this).val());

});

ccvInput.blur(function(){
    if ($(this).val() == '') {
        cardCcv.text("000"); 
}
});

function checkIfNumber(input) {
    var pattern = /(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})/;
    if (pattern.test(number.val()) == false) {
        input.add("data-error-number");
    }
}

form.submit(function(event) {
    if (cardDetail.val() == '') {
        validationError.attr("data-error-required", "Can't be blank");
    }
    else if (cardNumberInput.val() == '') {
        validationError.attr("data-error-required", "Can't be blank");
    }
    else if (monthInput.val() == '') {
        validationError.attr("data-error-required", "Can't be blank");
    }
    else if (yearInput.val() == '') {
        validationError.attr("data-error-required", "Can't be blank");
    }
    else if (ccvInput.val() == '') {
        validationError.attr("data-error-required", "Can't be blank");
    }

    event.preventDefault();
});


