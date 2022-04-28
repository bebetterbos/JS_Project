// Read event from database and add to agenda table when refresh page
let agendaTableRows = document.getElementById("agenda-table-rows");
agendaTableRows.addEventListener("load", readEvent());

// Create event to database when submit
let formCreate = document.getElementById("myForm");
formCreate.addEventListener("submit", (e) => {
    // get form values
    let dateBooking = document.getElementById("inputDate").value;
    let startHour = document.getElementById("inputStartTimeHour").value;
    let startMinute = document.getElementById("inputStartTimeMinute").value;
    let endHour = document.getElementById("inputEndTimeHour").value;
    let endMinute = document.getElementById("inputEndTimeMinute").value;
    let roomType = document.querySelector('input[name="roomType"]:checked').value;
    let eventName = document.getElementById("textAreaEvent").value;
    // set time format
    let startTime = `${startHour}:${startMinute}`;
    let endTime = `${endHour}:${endMinute}`;

    e.preventDefault();
    // create event to database
    createEvent(dateBooking, roomType, eventName, startTime, endTime);
    // read event from database and add to agenda table
    readEvent();
    formCreate.reset();
});