// Delete event in database and update event to agenda table
function deleteEvent(id) {
    // detlet event from database
    let event = firebase.database().ref("Your Reference Database" + id);
    event.remove();

    readEvent();
}