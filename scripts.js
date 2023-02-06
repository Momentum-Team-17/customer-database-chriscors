//Adding Obj properties
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

customers.sort((a, b) => {
  const nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

let directory = document.querySelector("#directory");

let dropdown = document.querySelector("#dropdown");
let button = document.querySelector("#sort-button");
button.addEventListener("click", function (event) {
  customers.sort((a, b) => {
    const nameA = a.name[dropdown.value].toUpperCase(); // ignore upper and lowercase
    const nameB = b.name[dropdown.value].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  directory.replaceChildren();
  loadCustomers();
});

loadCustomers();
function loadCustomers() {
  for (let customer of customers) {
    enumerateCustomers(customer);
  }
}

function enumerateCustomers(customer) {
  let newCustomerDiv = document.createElement("div");
  newCustomerDiv.classList.add("customer");
  //set Image
  let cImage = document.createElement("img");
  cImage.setAttribute("src", customer.picture.large);
  cImage.setAttribute("alt", "Customer Image");

  //set Name
  let cName = document.createElement("h2");
  cName.classList.add("name");
  cName.innerText = `${customer.name.first.capitalize()} ${customer.name.last.capitalize()}`;

  //set Email
  let cEmail = document.createElement("a");
  cEmail.classList.add("light", "email");
  cEmail.setAttribute("href", `mailto:${customer.email}`);
  cEmail.innerText = customer.email;

  //set Address
  let cAddress = document.createElement("p");
  cAddress.classList.add("small", "address");
  cAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}
  ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;

  //set DOB
  let cDOB = document.createElement("p");
  cDOB.classList.add("small", "dob");
  cDOB.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`;

  //set joined
  let cJoined = document.createElement("p");
  cJoined.classList.add("small", "join");
  cJoined.innerText = `Member since: ${moment(customer.registered.date).format(
    "MMM Do YYYY"
  )}`;

  //append children
  newCustomerDiv.appendChild(cImage);
  newCustomerDiv.appendChild(cName);
  newCustomerDiv.appendChild(cEmail);
  newCustomerDiv.appendChild(cAddress);
  newCustomerDiv.appendChild(cDOB);
  newCustomerDiv.appendChild(cJoined);

  directory.appendChild(newCustomerDiv);
}
