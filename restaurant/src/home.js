export function displayHome() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let title = document.createElement("div");
  title.innerText = "Corey's Bakery";
  title.id = "title";

  let quote = document.createElement("div");
  quote.id = "quote";
  
  let review = document.createElement("p");
  review.id = "review";
  review.innerText = "Corey's Bakery has edible food. The desserts were ok and the sandwhich was edible. It was reasonbly priced though.";

  let customer = document.createElement("h4");
  customer.id = "customer";
  customer.innerText = "- Paid Customer";

  quote.appendChild(review);
  quote.appendChild(customer);

  let hours = document.createElement("div");
  hours.id = "hours";

  let h3 = document.createElement("h2");
  h3.innerText = "Hours";

  let hoursText = document.createElement("p");
  hoursText.innerText = "Open 10am-5pm Monday-Thursday";

  hours.appendChild(h3);
  hours.appendChild(hoursText);


  let loc = document.createElement("div");
  loc.id = "location";

  let lh3 = document.createElement("h2");
  lh3.innerText = "Location";

  let locText = document.createElement("p");
  locText.innerText = "1414 Penguin St, Antarctica";

  loc.appendChild(lh3);
  loc.appendChild(locText);

  content.appendChild(title);
  content.appendChild(quote);
  content.appendChild(hours);
  content.appendChild(loc);
}
