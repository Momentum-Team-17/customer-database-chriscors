//Adding Obj properties
Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

let directory = document.querySelector("#directory");

for (let customer of customers) {
  enumerateCustomers(customer);
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
