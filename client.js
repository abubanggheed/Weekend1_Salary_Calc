
$(document).ready(onReady);

let monthlyPayout;

function onReady() {
    console.log('ready');
    $('#addEmployeeButton').on('click', handleAddEmployee);
    $('#employeeList').on('click', '.removeEmployeeButton', handleRemoveEmployee);
    updateMonthlyPayout();
}//end onReady

function handleAddEmployee() {
    let fName = $('#firstNameIn').val();
    let lName = $('#lastNameIn').val();
    let ID = $('#employeeIDIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    if(fName && lName && ID && title && salary){
        $('#employeeList').append(`
            <tr>
                <td>${fName}</td>
                <td>${lName}</td>
                <td>${ID}</td>
                <td>${title}</td>
                <td class="findSalary">${salary}</td>
                <td><button class="removeEmployeeButton">Remove</button></td>
            </tr>
        `);
        $('#inputDiv').children('input').val('');
        updateMonthlyPayout();
    }

}//end handleAddEmployee

function updateMonthlyPayout(){
    monthlyPayout = 0;
    let salaries = $('.findSalary');
    for(salary of salaries){
        monthlyPayout += parseInt(salary.textContent);
    }
    monthlyPayout = (monthlyPayout / 12);
    if(monthlyPayout > 20000){
        $('#totalMonthlyLine').css('color', 'red');
    }
    monthlyPayout = monthlyPayout.toFixed(2);
    $('#totalMonthly').text(monthlyPayout);
}//end updateMonthlyPayout

function handleRemoveEmployee(){
    $(this).closest('tr').remove();
    updateMonthlyPayout();
    if(monthlyPayout <= 20000){
        $('#totalMonthlyLine').css('color', 'black');
    }
}