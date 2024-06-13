addTimeDifferenceColumnHeader();
addTimeDifferenceColumnBody();
function addTimeDifferenceColumnHeader() {
    var timeColumnHead = document.querySelector(".GridViewFixedHeader th:nth-child(7)");

    if (!timeColumnHead) {
        console.log("The time column th element was not found.");
    }

    var aTagElement = document.createElement("a");
    aTagElement.setAttribute("style", "text-decoration:none;color:#000;");
    aTagElement.textContent = "Difference";

    var timeDiffThElement = document.createElement("th");
    timeDiffThElement.setAttribute("scope", "col");
    timeDiffThElement.appendChild(aTagElement);

    timeColumnHead.insertAdjacentElement('afterend', timeDiffThElement);
}

function addTimeDifferenceColumnBody() {

    var cardSwipingTableBodyRows = document.querySelectorAll(".GridViewItems, .GridViewAItems");

    for (let rowIndex = 0; rowIndex < cardSwipingTableBodyRows.length; rowIndex++) {
        const row = cardSwipingTableBodyRows[rowIndex];
        const nextRow = cardSwipingTableBodyRows[rowIndex + 1] ? cardSwipingTableBodyRows[rowIndex + 1] : null;
        
        var timeColumnRow = row.querySelector("td:nth-child(7)");
        var timeColumnRowTextContent = row.querySelector("td:nth-child(7)").textContent;
        var timeColumnNextRowTextContent = nextRow ? nextRow.querySelector("td:nth-child(7)").textContent : " ";

        if (!timeColumnRow) {
            console.error("The time column td element not found.");   
        }

        if (timeColumnRowTextContent.indexOf(":") == -1 || timeColumnNextRowTextContent.indexOf(":") == -1) {
            console.log("Wrong time format.", timeColumnRowTextContent, timeColumnNextRowTextContent);
            createAndAttachNewTdtoDateTdElement(timeColumnRow,"-");
            return;
        }

        createAndAttachNewTdtoDateTdElement(
            timeColumnRow, 
            timeColumnRowTextContent + ' - ' + timeColumnNextRowTextContent + ' = ' + calculateTimeDifference(timeColumnRowTextContent, timeColumnNextRowTextContent)
        );
    }
}

function calculateTimeDifference(timeColumnRowTextContent, timeColumnNextRowTextContent) {

    var timeColumnRowTimeObject = new Date('1970-01-01T' + timeColumnRowTextContent + 'Z');
    var timeColumnNextRowTimeObject = new Date('1970-01-01T' + timeColumnNextRowTextContent + 'Z');

    var timeDiff = Math.abs(timeColumnRowTimeObject - timeColumnNextRowTimeObject);

    var hours = Math.floor(timeDiff / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    console.log(hours, minutes, seconds);

    return hours + "h " + minutes + "m " + seconds + "s";
}

function createAndAttachNewTdtoDateTdElement(dateColumnRow, content) {

    var newTd = document.createElement("td");
    newTd.textContent = content
    dateColumnRow.insertAdjacentElement('afterend', newTd);
}

function calculateTotalBreakTime() {
    // TODO
}
