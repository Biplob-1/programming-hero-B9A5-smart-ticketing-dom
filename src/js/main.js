// scholl Button event listener
document.getElementById('scrollButton').addEventListener('click', function () {
    const targetSection = document.getElementById('targetSection');

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});


let totalPrice = 0;
let clickedButtons = 0;
const totalSeat = document.querySelectorAll('.sit');

for (const seat of totalSeat) {
    seat.addEventListener('click', function () {
        // maximum number of buttons clicked
        if (clickedButtons < 4) {
            // get seat number
            const seatNumber = seat.textContent;

            // get ticket price
            const ticketPrice = document.getElementById('ticket-price');
            const price = parseFloat(ticketPrice.innerText.split(' ')[0]);
            // console.log(typeof price);

            // get Bus type
            const busClass = `AC_Business`;

            // get & set ticket area
            const selectedTicketArea = document.getElementById('selected-ticket');
            const p = document.createElement('p');

            const seatSpan = document.createElement('span');
            seatSpan.textContent = seatNumber;

            const classSpan = document.createElement('span');
            classSpan.textContent = busClass;

            const priceSpan = document.createElement('span');
            priceSpan.textContent = price + ' taka';

            p.style.display = 'flex';
            p.style.justifyContent = 'space-between';
            p.style.margin = '10px 0';

            p.appendChild(seatSpan);
            p.appendChild(classSpan);
            p.appendChild(priceSpan);

            selectedTicketArea.appendChild(p);

            // change button bg-color & text color
            seat.style.backgroundColor = 'green';
            seat.style.color = 'white';

            // disable the clicked button
            seat.disabled = true;

            // calculate total price
            totalPrice += price;

            // set total price
            const totalPriceArea = document.getElementById('total-price');
            totalPriceArea.innerText = totalPrice;

            // set grand total
            const grandTotalArea = document.getElementById('grand-total');
            grandTotalArea.innerText = totalPrice;

            // increment clicked buttons
            // clickedButtons++;
            // console.log(clickedButtons);
            let ticketQuantity = ++clickedButtons;
            const selectedTicketCount = document.getElementById('selected-ticket-count');
            selectedTicketCount.innerText = ticketQuantity;

            const totalSeatQuantity = 8;
            let result = totalSeatQuantity - ticketQuantity;
            const setTotalSeatQuantity = document.getElementById('total-seat-quantity');
            setTotalSeatQuantity.innerText = result;
            // const totalBusSeat = parseInt(totalSeatQuantity.innerText);
            // console.log(typeof totalBusSeat);

            // let result = totalBusSeat - ticketQuantity;
            // totalSeatQuantity.innerText = result;
            // console.log(totalBusSeat);

            // four buttons click cheack
            if (clickedButtons === 4) {
                for (const sit of totalSeat) {
                    if (!sit.disabled) {
                        sit.disabled = true;
                    }
                }
            }
        }
    });
}
// final task booking success
document.getElementById('next-button').addEventListener('click', function () {
    const targetSuccess = document.getElementById('targetSuccess');

    if (targetSuccess) {
        targetSuccess.scrollIntoView({ behavior: 'smooth' });
    }
});