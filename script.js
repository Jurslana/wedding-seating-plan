const tables = document.querySelectorAll(".table");

let seatNumber = 1;

tables.forEach((table, tableIndex) => {

    const seatsContainer = table.querySelector(".seats");

    const numberOfSeats = tableIndex === 0 ? 6 : 14;

    for (let i = 0; i < numberOfSeats; i++) {

        const seat = document.createElement("div");
        seat.classList.add("seat");

        const seatNumberElement = document.createElement("span");
        seatNumberElement.classList.add("seat-number");

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Imię i nazwisko";

        seatNumberElement.textContent = seatNumber;

        if (tableIndex === 0) {

            seat.classList.add(`seat-${i + 1}`);

        } else {

            if (i < 7) {
                seat.classList.add("left");
            } else {
                seat.classList.add("right");
            }
        }

        seat.appendChild(seatNumberElement);
        seat.appendChild(input);

        seatsContainer.appendChild(seat);

        seatNumber++;
    }
});


const inputs = document.querySelectorAll(".seat input");

inputs.forEach((input, index) => {

    const savedName = localStorage.getItem(`seat-${index}`);

    if (savedName) {
        input.value = savedName;
    }

    input.addEventListener("input", () => {
        localStorage.setItem(`seat-${index}`, input.value);
    });

});

document.getElementById("clearPlan").addEventListener("click", () => {

    const confirmClear = confirm("Czy na pewno chcesz wyczyścić cały plan?");

    if (confirmClear) {
        localStorage.clear();
        location.reload();
    }

});

document.getElementById("showRoom1").addEventListener("click", () => {
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
});

document.getElementById("showRoom2").addEventListener("click", () => {
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";
});

document.getElementById("showRoom1").addEventListener("click", () => {
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
});

document.getElementById("showRoom2").addEventListener("click", () => {
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";
});