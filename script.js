
const allBtn = document.getElementsByClassName("seat");
let count = 0;
let counts = 40;
let totalPrice = 0;
let grandTotal = 0;

for (const all of allBtn) {
    all.addEventListener("click", function (e) {
        if (!all.classList.contains("clicked")) {
            if (count < 4) {
                count++;
                counts--;

                totalPrice += 550; 

                setInnerText("seat-count", count);
                setInnerText("Seats-left", counts);
                setInnerText("total-price", totalPrice);
                setInnerText("grand-total", grandTotal);

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

function calculateGrandTotal() {
    const couponCode = document.getElementById("input").value;

    let discountPercentage = 0;

    if (couponCode === "NEW15") {
        discountPercentage = 15;
    } else if (couponCode === "Couple 20") {
        discountPercentage = 20;
    }

    const discountAmount = (totalPrice * discountPercentage) / 100;
    grandTotal = totalPrice - discountAmount;

    setInnerText("grand-total", grandTotal);
}

document.getElementById("apply-btn").addEventListener("click", function () {
    calculateGrandTotal();
    document.getElementById("input").setAttribute("disabled", "true");
    document.getElementById("apply-btn").style.display = "none";
});

document.getElementById("next-btn").addEventListener("click", function () {
    const passengerName = document.getElementById("passenger-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const emailId = document.getElementById("email-id").value;

    if (passengerName && phoneNumber && emailId) {
        alert("Congratulations! Your booking is confirmed.");
    } else {
        alert("Please fill in all the required fields.");
    }
});

