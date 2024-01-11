// Get User's Inputs
function aboutYou() {
    age = document.getByElementId("age").value;
    console.log(age);
    bestFeature = document.getByElementId("bestFeature").value;
    console.log(bestFeature);
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
        let lowe = document.querySelector("lowe")
        lowe.setAttribute("class", "hidden");

        let carell = document.querySelector("carell")
        carell.setAttribute("class", "hidden");

        let holland = document.querySelector("holland")
        holland.setAttribute("class", "hidden");

        let noDate = document.querySelector("noDate")
        noDate.setAttribute("class", "hidden");

    })
});