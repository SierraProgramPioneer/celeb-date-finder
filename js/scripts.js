// Get User's Inputs
function getAge() {
    age = parseInt(document.getElementById("age").value);
    return age;
}

function getBestFeature() {
    bestFeature = document.getElementById("bestFeature").value;
    return bestFeature;
}


function findDate() {
    // Add Event Listener to Form
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // Prevent Default Refresh
        event.preventDefault();

        // Set All Content to Hidden
        let lowe = document.getElementById("lowe");
        lowe.setAttribute("class", "hidden");

        let carell = document.getElementById("carell");
        carell.setAttribute("class", "hidden");

        let holland = document.getElementById("holland");
        holland.setAttribute("class", "hidden");

        let noDate = document.getElementById("noDate");
        noDate.setAttribute("class", "hidden");

        // Get User Input
        age = getAge();
        feature = getBestFeature();

        // Run if else statements to display dream date

        if (age < 25 || age >= 60) {
            document.querySelector("div#noDate").removeAttribute("class");
        }

        else if (age >= 25 && age <= 35) {
            document.querySelector("div#holland").removeAttribute("class");
        }

        else if (bestFeature === "Body") {
            document.querySelector("div#carell").removeAttribute("class");
        }

        else {
            document.querySelector("div#lowe").removeAttribute("class");
        }
    });
}


// Add window load Event Listener
window.addEventListener("load", findDate);
