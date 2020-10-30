$(document).ready(function () {
    $('select').formSelect();

    $("#employmentStatus").on("change", function () {

        let value = parseInt($(this).val());

        if (value === 1) {
            $("#paidHourly").removeClass("hidden");
        };
    });

    $("#paidHourlyChoice").on("change", function () {
        let value = parseInt($(this).val());

        if (value === 1) {
            $("#payAmmountContainer").empty();
            $("#payAmmountContainer").append(hourlyIncomeForm)
        } else if (value === 2) {
            $("#payAmmountContainer").empty();
            $("#payAmmountContainer").append(annualIncomeForm)
        };
    });


});

let annualIncomeForm = `
<div id="annualIncome" class="input-field col s6">
    <input placeholder="" type="text" class="validate">
    <label for="first_name">What is your annual salary?</label>
</div>`;

let hourlyIncomeForm = `
<div id="hourlyIncome" class="input-field col s6">
    <input placeholder="" type="text" class="validate">
    <label for="first_name">What is your hourly rate?</label>
</div>`;