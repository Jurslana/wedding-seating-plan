const tables = document.querySelectorAll(".table");

let seatNumber = 1;

tables.forEach((table) => {

    const seatsContainer = table.querySelector(".seats");

    let numberOfSeats;

    // Stół 1 = 6 miejsc
    if (table.classList.contains("table-1")) {
        numberOfSeats = 6;

    // Stół 2 = połączone stoły 2 + 4 = 28 miejsc
    } else if (table.classList.contains("table-2")) {
        numberOfSeats = 28;

    // Wszystkie pozostałe stoły = 14 miejsc
    } else {
        numberOfSeats = 14;
    }


    for (let i = 0; i < numberOfSeats; i++) {

        const seat = document.createElement("div");
        seat.classList.add("seat");

        const seatNumberElement = document.createElement("span");
        seatNumberElement.classList.add("seat-number");

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Imię i nazwisko";

        // Numer miejsca
        seatNumberElement.textContent = seatNumber;


        // STÓŁ 1
        if (table.classList.contains("table-1")) {

            seat.classList.add(`seat-${i + 1}`);

        }

        // POZOSTAŁE STOŁY
        else {

            // Pierwsze pół miejsc po lewej
            if (i < numberOfSeats / 2) {
                seat.classList.add("left");
            }

            // Drugie pół miejsc po prawej
            else {
                seat.classList.add("right");
            }

        }


        seat.appendChild(seatNumberElement);
        seat.appendChild(input);

        seatsContainer.appendChild(seat);

        seatNumber++;
    }
});


// ZAPISYWANIE IMION I NAZWISK

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


// WYCZYŚĆ PLAN

document.getElementById("clearPlan").addEventListener("click", () => {

    const confirmClear = confirm("Czy na pewno chcesz wyczyścić cały plan?");

    if (confirmClear) {
        localStorage.clear();
        location.reload();
    }

});


// SALA 1

document.getElementById("showRoom1").addEventListener("click", () => {

    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";

});


// SALA 2

document.getElementById("showRoom2").addEventListener("click", () => {

    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "block";

});