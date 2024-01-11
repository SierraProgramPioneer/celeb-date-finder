// Get User's Inputs
function age() {
    age = parseInt(document.getElementById("age").value);
    return age;
}

function bestFeature() {
    bestFeature = document.getElementById("bestFeature").value;
    return bestFeature;
}


// Show Dream Dates

// Add window load Event Listener
window.addEventListener("load", function () {
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
        age = age();
        bestFeature = bestFeature();

        // Run if else statements to find suitable date



    })
});