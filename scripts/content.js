var dateColumnHead = document.querySelector(".GridViewFixedHeader th:nth-child(6)");
if (dateColumnHead) {

    addTimeDifferenceColumnHeader(dateColumnHead);
    addTimeDifferenceColumnBody();
}
else{
    console.log('Debug DE2: Six th element not found.');
}

function addTimeDifferenceColumnHeader(dateColumnHead) {

    var aTagElement = document.createElement("a");
    aTagElement.setAttribute("style", "text-decoration:none;color:#000;");
    aTagElement.textContent = "Difference";

    var timeDiffThElement = document.createElement("th");
    timeDiffThElement.setAttribute("scope", "col");
    timeDiffThElement.appendChild(aTagElement);

    dateColumnHead.insertAdjacentElement('afterend', timeDiffThElement);
}

function addTimeDifferenceColumnBody() {

    var cardSwipingTableBodyRows = document.querySelectorAll(".GridViewItems, .GridViewAItems");
    
    cardSwipingTableBodyRows.forEach(function(row) {

        var dateColumnRow = row.querySelector("td:nth-child(6)");
        var timeColumnRow = row.querySelector("td:nth-child(7)");

        if (dateColumnRow) {

            createAndAttachNewTdtoSixthThElement(dateColumnRow, timeColumnRow.textContent +":99");
        } else {
            console.error("The 6th th element under GridViewItems class was not found.");
        }
    });
}

function createAndAttachNewTdtoSixthThElement(dateColumnRow, content) {

    var newTd = document.createElement("td");
    newTd.textContent = content
    dateColumnRow.insertAdjacentElement('afterend', newTd);
}