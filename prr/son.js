// Ek empty array to store numbers
let numbers = [];
let currentIndex = 0;

function addNumber() {
    const input = document.getElementById("numInput");
    const num = input.value;

    if (num === "") {
        alert("Please enter a number");
        return;
    }

    // Add number to the array
    numbers.push(num);
    input.value = ""; // clear input

    // Call function to show next number on UI
    showNextNumber();
}

function showNextNumber() {
    if (currentIndex < numbers.length) {
        const list = document.getElementById("numberList");

        // Create new list item
        const li = document.createElement("li");
        li.innerText = numbers[currentIndex];

        // Add to UI
        list.appendChild(li);

        currentIndex++; // Move to next number
    }
}
