

const allBtn = document.getElementsByClassName("done");
let count = 0;
for (const all of allBtn) {
    all.addEventListener("click", function (e) {
        count++;


        document.getElementById('A1').addEventListener('click',function(){
            const commentBox = document.getElementById('new-comment');
            const newComment =commentBox.value;

        })

        setInnerText("seat-count", count);
    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}