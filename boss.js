const allBtn = document.getElementsByClassName("seat");
let count = 0;
let counts = 40;
let totalPrice = 0;
let grandTotal = 0;

for (const all of allBtn) {
    all.addEventListener("click", function (e) {
        if (!all.classList.contains("clicked")) {
            if (count < 4) {
                addSeat(this.value);
                count++;
                counts--;

                totalPrice += 550; 

                setInnerText("seat-count", count);
                setInnerText("Seats-left", counts);
                setInnerText("total-price", totalPrice);
                setInnerText("grand-total", grandTotal);
                setInnerText("grand-total", totalPrice);

                all.classList.add("clicked");
                all.style.backgroundColor = "#1DD100";
            } else {
                alert("You can only select up to 4 seats.");
            }
        }
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



// add seat and price.........................>>>>>>>>



const seatsSelected = [];

function addSeat(seatId) {
    seatsSelected.push(seatId);
    
    document.getElementById("seatsSelected").innerHTML = '';
    let html = '';
    seatsSelected.forEach(seat => {        
        html += '<p class="flex justify-between"><span>'+ seat +'</span><span>Economoy</span><span>550</span> </p>';        
    })

    document.getElementById("seatsSelected").innerHTML = html;
}


// calculate grand total and discount amount...............>>>>>>>>



function calculateGrandTotal() {
    const couponCode = document.getElementById("input").value;

    let discount = 0;

    if (couponCode === "NEW15") {
        discount = 15;
    } else if (couponCode === "Couple 20") {
        discount = 20;
    }

    const discountAmount = (totalPrice * discount) / 100;
    grandTotal = totalPrice - discountAmount;

    setInnerText("grand-total", grandTotal);


}

document.getElementById("apply-btn").addEventListener("click", function () {
    calculateGrandTotal();
    document.getElementById("input").setAttribute("disabled", "true");
    document.getElementById("apply-btn").style.display = "none";
});



// from section here..................................................>>>>>>>



document.getElementById("next-btn").addEventListener("click", function () {
    const passengerName = document.getElementById("passenger-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const emailId = document.getElementById("email-id").value;

    if (passengerName && phoneNumber && emailId) {

        document.getElementById("myModal").showModal();

    } else {
        alert("Please fill in all the required fields.");
    }
});
