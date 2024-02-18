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

            // if (clickedButtons === 4) {

            // }

            // four buttons click cheack
            if (clickedButtons === 4) {
                for (const sit of totalSeat) {
                    if (!sit.disabled) {
                        sit.disabled = true;
                    }
                }
            }
            if (clickedButtons === 4) {
                alert(`You have reached the maximum number of tickets. Have a nice journey!`);
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
    // console.log(twentyDiscount)

    const copounValue = document.getElementById('discount-input');
    const copounText = copounValue.value;

    const grandTotalArea = document.getElementById('grand-total');
    const grandTotal = parseInt(grandTotalArea.innerText);

    if (copounText === fifteenDiscount || copounText === twentyDiscount) {
        let result;
        // const totalPriceArea = document.getElementById('total-price');
        // const totalPrice = parseInt(totalPriceArea.innerText);
        // console.log(typeof totalPrice);

        // const grandTotalArea = document.getElementById('grand-total');
        // const grandTotal = parseInt(grandTotalArea.innerText);
        // console.log(typeof grandTotal);


        if (fifteenDiscount) {
            const fifteenPercentOffer = grandTotal * (15 / 100);
            result = grandTotal - fifteenPercentOffer;
            // console.log(result);

        } else {
            const twentyPercentOffer = grandTotal * (20 / 100);
            result = grandTotal - twentyPercentOffer;
            // console.log(result);
        }
        grandTotalArea.innerText = result.toFixed(2);

        const hideCopunArea = document.getElementById('apply-copun-arear');
        if (hideCopunArea) {
            hideCopunArea.style.display = 'none';
        }

    }
});

function getTextById(tagId) {
    const getTextWithTagName = document.getElementById(tagId);
    const getText = getTextWithTagName.innerText;
    return getText;
}
// console.log(getTextById('ticket-price'));
// final task booking success
document.getElementById('next-button').addEventListener('click', function () {
    const targetSuccess = document.getElementById('targetSuccess');

    if (targetSuccess) {
        window.location.href = 'demo.html';
    }
});