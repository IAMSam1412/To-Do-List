const addNewItemButton = document.getElementById("add-new-item");
const input = document.getElementById("list-input");
const list = document.getElementById("list");

// the items that have checkboxes //
function addItem(text) {
  const li = document.createElement("li");
  li.innerHTML = "<input type='checkbox'>" + text;
  list.appendChild(li);
}

// regex to exclude special characters//
function validateInput() {
  var specialCharRegex = /[^a-zA-Z0-9]/;
  if (specialCharRegex.test("list-input")) {
    document.getElementById("errorMessage").innerHTML =
      "Error: Special characters are not allowed.";
    return false;
  } else {
    document.getElementById("errorMessage").innerHTML = "";
    return true;
  }
}

addNewItemButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value) {
    addItem(input.value);
    input.value = "";
  }
});

input.addEventListener("keyup", function (event) {
  var regex = /[^A-Za-z 0-9]/g;

  // Checking to see if the typed input has any special characters
  if (regex.test(event.target.value)) {
    // The input typed has special characters, so disable the input and add error message.
    addNewItemButton.disabled = true;
    document.getElementById("errorMessage").style.display = "block"
  } else {
    // valid/clear error message
    addNewItemButton.disabled = false;
    document.getElementById("errorMessage").style.display = "none"
  }
});
