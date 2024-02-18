

const allBtn = document.getElementsByClassName("btn");
let count = 0;
let counts = 40;
for (const all of allBtn) {
    all.addEventListener("click", function (e) {
        count++;
        counts--;

        // document.getElementById('A1').addEventListener('click',function(){
        //     const commentBox = document.getElementById('new-comment');
        //     const newComment =commentBox.value;
        //     const p = document.createElement('p');
        //     p.innerText = newComment;

        // })

        setInnerText("seat-count", count);
        setInnerText("Seats-left", counts);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}