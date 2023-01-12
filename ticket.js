document
  .getElementById("ticket-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.target;
    var name = form.elements.name.value;
    var email = form.elements.email.value;
    var subject = form.elements.subject.value;
    var message = form.elements.message.value;
    var number = form.elements.number.value;
    if (!name || !email || !subject || !message || !number) {
      alert("Please fill out This field");
      return;
    }
    // Form is valid, submit it
    form.submit();
  });
