// scroll Button event listener
document.getElementById('scrollButton').addEventListener('click', function () {
    const targetSection = document.getElementById('targetSection');

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

let totalPrice = 0;
let clickedButtons = 0;
const totalSeat = document.querySelectorAll('.sit');

// Next and Apply Coupon buttons are disabled
const nextButton = document.getElementById('next-button');
const applyCouponButton = document.getElementById('apply-button');
nextButton.disabled = true;
applyCouponButton.disabled = true;

for (const seat of totalSeat) {
    seat.addEventListener('click', function () {
        // maximum number of buttons clicked
        if (clickedButtons < 4) {
            // get seat number
            const seatNumber = seat.textContent;

            // get ticket price
            const ticketPrice = document.getElementById('ticket-price');
            const price = parseFloat(ticketPrice.innerText.split(' ')[0]);

            // get Bus type
            const busClass = 'AC_Business';

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
            let ticketQuantity = ++clickedButtons;
            const selectedTicketCount = document.getElementById('selected-ticket-count');
            selectedTicketCount.innerText = ticketQuantity;

            const totalSeatQuantity = 40;
            let result = totalSeatQuantity - ticketQuantity;
            const setTotalSeatQuantity = document.getElementById('total-seat-quantity');
            setTotalSeatQuantity.innerText = result;

            // enable nextButton if at least one seat is selected
            nextButton.disabled = false;

            // enable applyCouponButton if four seats are selected
            if (clickedButtons === 4) {
                applyCouponButton.disabled = false;
            }

            // four buttons click check
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

// coupon section
document.getElementById('apply-button').addEventListener('click', function () {
    const fifteenPercentDiscount = document.getElementById('fifteen-Percent-Discount');
    const fifteenDiscount = fifteenPercentDiscount.innerText;

    const twentyPercentDiscount = document.getElementById('twenty-Percent-Discount');
    const twentyDiscount = twentyPercentDiscount.innerText;

    const copounValue = document.getElementById('discount-input');
    const copounText = copounValue.value.trim();

    const grandTotalArea = document.getElementById('grand-total');
    const grandTotal = parseInt(grandTotalArea.innerText);

    if (copounText === fifteenDiscount || copounText === twentyDiscount) {
        let result;

        if (fifteenDiscount === copounText) {
            const fifteenPercentOffer = grandTotal * (15 / 100);
            result = grandTotal - fifteenPercentOffer;
            console.log(fifteenPercentOffer)
        } else if (twentyDiscount === copounText) {
            const twentyPercentOffer = grandTotal * (20 / 100);
            result = grandTotal - twentyPercentOffer;
            console.log(twentyPercentOffer)
        }
        grandTotalArea.innerText = result.toFixed(2);

        const hideCouponArea = document.getElementById('apply-copun-area');
        if (hideCouponArea) {
            hideCouponArea.style.display = 'none';
        }

    } else {
        alert(`Invalid Coupon.`);
    }
});

document.getElementById('continue-button').addEventListener('click', function () {
    window.location.reload();
});
