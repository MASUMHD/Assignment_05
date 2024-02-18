

// const allBtn = document.getElementsByClassName("btn");
// let count = 0;
// let counts = 40;
// for (const all of allBtn) {
//     all.addEventListener("click", function (e) {
//         count++;
//         counts--;

        



//         setInnerText("seat-count", count);
//         setInnerText("Seats-left", counts);
//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }




// const allBtn = document.getElementsByClassName("btn");
// let count = 0;
// let counts = 40;

// for (const all of allBtn) {
//     all.addEventListener("click", function (e) {
//         if (!all.classList.contains("clicked")) {
//             count++;
//             counts--;

//             setInnerText("seat-count", count);
//             setInnerText("Seats-left", counts);

//             all.classList.add("clicked");
//             all.style.backgroundColor = "green"; // Change the color to green or any other desired color
//         }
//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }



// const allBtn = document.getElementsByClassName("btn");
// let count = 0;
// let totalAmount = 0;
// let counts = 40;

// for (const all of allBtn) {
//     all.addEventListener("click", function (e) {
//         if (!all.classList.contains("clicked")) {
//             count++;
//             counts--;
//             totalAmount += 550; // Assuming each ticket costs 550 Taka

//             setInnerText("seat-count", count);
//             setInnerText("Seats-left", counts);
//             setInnerText("total-price", totalAmount);

//             all.classList.add("clicked");
//             all.style.backgroundColor = "green"; // Change the color to green or any other desired color
//         }
//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }


const allBtn = document.getElementsByClassName("seat");
let count = 0;
let counts = 40;
let totalPrice = 0;
let grandTotal = 0;

for (const all of allBtn) {
    all.addEventListener("click", function (e) {
        if (!all.classList.contains("clicked")) {
            count++;
            counts--;

            totalPrice += 550; // Assuming each ticket costs 550 Taka

            setInnerText("seat-count", count);
            setInnerText("Seats-left", counts);
            setInnerText("total-price", totalPrice);
            setInnerText("grand-total", grandTotal);

            all.classList.add("clicked");
            all.style.backgroundColor = "green"; // Change the color to green or any other desired color
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

// Apply coupon button event listener
document.getElementById("apply-btn").addEventListener("click", function () {
    calculateGrandTotal();
    document.getElementById("input").setAttribute("disabled", "true");
    document.getElementById("apply-btn").style.display = "none";
});
