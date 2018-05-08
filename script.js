/* function submit() {
    return confirm('Do you really want to submit the form?');
} */
/* window.onload = function submit() {

    // Check for LocalStorage support.


    if (localStorage) {



        // Add an event listener for form submissions
        document.getElementById('fname').addEventListener('submit', function submit() {

            // Get the value of the name field.
            var sagar = document.getElementById('fname').value;

            // Save the name in localStorage.
            localStorage.setItem('name', sagar);

        });

    }

} */
/* window.onload = function show() {

    // Retrieve the users name.
    var name = localStorage.getItem('fname');

    if (name != "sagar" || name != "sagar") {
        document.getElementById('welcomeMessage').innerHTML = "Hello " + sagar + "welcome"
        "!";
    } else
        document.getElementById('welcomeMessage').innerHTML = "Hello!";
} */

/* function show() {
    var dataToShow = localStorage.getItem("data");
    alert("Saved value is =" + dataToShow)
    location.reload();
} */
function myfunction() {
    if (name = 'sagar') {
        alert("user has been created");
    } else {
        alert("please enter your name");
    }
}

function myfunction1() {
    document.getElementById('mypage').reset();
}