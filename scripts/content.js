function determinePage() {
    return document.querySelector("#pageTitle > span").textContent;
}

function gradingPage() {
    const rows = document.querySelector("#Main > table > tbody").children;
    const cells = document.querySelectorAll("#Main > table > tbody td");

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            const rowIndex = cell.closest('tr').rowIndex;
            const colIndex = cell.cellIndex;

            Array.from(rows).forEach(row => {
                row.children[colIndex].classList.add("highlighted");
            })

            rows[rowIndex].classList.add("highlighted");

        })
        cell.addEventListener('mouseout', () => {
            const rowIndex = cell.closest('tr').rowIndex;
            const colIndex = cell.cellIndex;

            rows[rowIndex].classList.remove("highlighted");
            Array.from(rows).forEach(row => {
                row.children[colIndex].classList.remove("highlighted");
            })

        })
    })
}

function assignmentPage() {
    const tds = document.querySelectorAll("td");
    tds.forEach(e => {
        const input = e.querySelector("input");
        if (input) {
            const name = input.attributes["name"]?.value;
            if (name.includes("NOCOUNT")) {
                e.prepend("no count ");
            } else if (name.includes("MISSING")) {
                e.prepend("missing ");
            } else if (name.includes("SPECIALCODE")) {
                var check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                check.addEventListener("change", (e) => {
                    if (e.currentTarget.checked) {
                        input.value="AB";
                    } else {
                        if (input.value === "AB") {
                            input.value="";
                        }
                    }
                    input.addEventListener("change", (e) => {
                        if (input.value !== "AB") {
                            check.checked = false;
                        }
                    })
                });
                e.append(" AB? ");
                e.append(check);
            }
        }
    })
}

const pages = {
    "Main Screen" : gradingPage,
    "Quick Scoring" : gradingPage,
    "Score Entry" : assignmentPage,
};

const pageName = determinePage()
const page = pages[pageName];
if (page) {
    page();
}
