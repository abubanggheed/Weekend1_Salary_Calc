
$(document).ready(onReady);

let monthlyPayout;

function onReady() {
    console.log('ready');
    $('#addEmployeeButton').on('click', handleAddEmployee);
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
    monthlyPayout = (monthlyPayout / 12).toFixed(2);
    $('#totalMonthly').text(monthlyPayout)
}//end updateMonthlyPayout