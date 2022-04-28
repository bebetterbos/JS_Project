function reset() {
    let form = document.getElementById("form");
    form.innerHTML = `
        <!-- Start form content -->
        <form
          id="myForm"
          action="#agenda"
          method=""
          autocomplete="on"
          validate
        >
          <!-- Start input date -->
          <div class="form-group">
            <label for="inputDate">Date</label>
            <input
              type="date"
              class="form-control"
              id="inputDate"
              name="date"
              required
            />
          </div>
          <!-- End input date -->
          <!-- Start input start time -->
          <div class="form-group">
            <label>Start Time</label>
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <select
                class="form-control mr-1"
                id="inputStartTimeHour"
                name="startHour"
                required
              >
                <option value="" disabled selected>Hour</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
              <div class="pl-1 pr-2">:</div>
              <select
                class="form-control"
                id="inputStartTimeMinute"
                name="startMinute"
                required
              >
                <option value="" disabled selected>Min</option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <!-- End input start time -->
          <!-- Start input end time -->
          <div class="form-group">
            <label>End Time</label>
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <select
                class="form-control mr-1"
                id="inputEndTimeHour"
                name="endHour"
                required
              >
                <option value="" disabled selected>Hour</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
              <div class="pl-1 pr-2">:</div>
              <select
                class="form-control"
                id="inputEndTimeMinute"
                name="endMinute"
                required
              >
                <option value="" disabled selected>Min</option>
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <!-- End input end time -->
          <!-- Start check room type -->
          <div class="form-group">
            <legend class="col-form-label pt-0">Choose a Room</legend>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                id="inlineRadioType1"
                name="roomType"
                value="Room 1"
                required
              />
              <label class="form-check-label" for="inlineRadioType1"
                >Room 1 (10 People)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                id="inlineRadioType2"
                name="roomType"
                value="Room 2"
                required
              />
              <label class="form-check-label" for="inlineRadioType2"
                >Room 2 (20 People)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                id="inlineRadioType3"
                name="roomType"
                value="Room 3"
                required
              />
              <label class="form-check-label" for="inlineRadioType3"
                >Room 3 (30 People)</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                type="radio"
                class="form-check-input"
                id="inlineRadioType4"
                name="roomType"
                value="Room 4"
                required
              />
              <label class="form-check-label" for="inlineRadioType4"
                >Room 4 (40 People)</label
              >
            </div>
          </div>
          <!-- End check room type -->
          <!-- Start input event -->
          <div class="form-group">
            <label for="textAreaEvent">Event</label>
            <textarea
              class="form-control"
              name="event"
              id="textAreaEvent"
              rows="2"
              placeholder="Tell us your event name..."
            ></textarea>
          </div>
          <!-- End input event -->
          <!-- Start submit button -->
          <button
            class="btn btn-primary btn-block"
            type="submit"
            id="btnSubmit"
          ><i class="fas fa-paper-plane"></i>
            Submit
          </button>
          <!-- End submit button -->
        </form>
        <!-- End form content -->
      `;
    let formCreate = document.getElementById("myForm");
    formCreate.addEventListener("submit", (e) => {
        // get form values
        let dateBooking = document.getElementById("inputDate").value;
        let startHour = document.getElementById("inputStartTimeHour").value;
        let startMinute = document.getElementById("inputStartTimeMinute").value;
        let endHour = document.getElementById("inputEndTimeHour").value;
        let endMinute = document.getElementById("inputEndTimeMinute").value;
        let roomType = document.querySelector('input[name="roomType"]:checked')
            .value;
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
}