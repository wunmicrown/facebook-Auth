const facebSignin = (event) => {
    event.preventDefault();
    const show = document.getElementById("show");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    if (email === "" || password === "") {
      
    } else {
      event.target.reset();
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);
    }
  }