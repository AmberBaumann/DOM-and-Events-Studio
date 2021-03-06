// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function () {
    const status = document.getElementById('flightStatus');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const shuttleBackground = document.getElementById('shuttleBackground');

    //Direction Buttons
    const rightBtn = this.document.getElementById('right');
    const leftBtn = this.document.getElementById('left');
    const upBtn = this.document.getElementById('up');
    const downBtn = this.document.getElementById('down');

    //Buttons
    const takeOffBtn = this.document.getElementById('takeoff');
    const landingBtn = this.document.getElementById('landing');
    const missionAbortBtn = this.document.getElementById('missionAbort');

    const rocket = document.getElementById('rocket');

    takeOffBtn.addEventListener('click', function () {
        const response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {
            status.innerText = "Shuttle in flight";
            shuttleHeight.innerText = "10000";
            shuttleBackground.style.backgroundColor = "blue";
        }
    });

    landingBtn.addEventListener('click', function () {
        const response = window.confirm('The shuttle is landing. Landing gear engaged.');
        if (response) {
            status.innerText = "The shuttle has landed.";
            shuttleHeight.innerText = "0";
            shuttleBackground.style.backgroundColor = "green";
        }
    });

    missionAbortBtn.addEventListener('click', function () {
        const response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            status.innerText = "Mission aborted.";
            shuttleHeight.innerText = "0";
            shuttleBackground.style.backgroundColor = "green";
        }
    });

    rightBtn.addEventListener('click', function () {
        console.log("right button clicked");
    });

    leftBtn.addEventListener('click', function () {
        console.log('left button clicked');
    });

    upBtn.addEventListener('click', function () {
        console.log('up button clicked');
    });

    downBtn.addEventListener('click', function () {
        console.log('down button clicked');
    });

})