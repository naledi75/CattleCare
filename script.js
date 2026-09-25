
document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     CATTLECARE FOLDER STRUCTURE

     backend/
     │
     ├── main.html
     │
     └── frontend/
         ├── index.html
         ├── my-cattle.html
         ├── add-symptoms.html
         ├── diagnosis.html
         ├── appointments.html
         ├── support.html
         ├── vet-dashboard.html
         ├── vet-appointments.html
         ├── styles.css
         └── script.js
  ===================================================== */


  /* =====================================================
     CURRENT PAGE
  ===================================================== */

  const currentPage =
    window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();


  /* =====================================================
     FARMER PAGES
  ===================================================== */

  const farmerPages = [
    "main.html",
    "my-cattle.html",
    "add-symptoms.html",
    "ai-health-check.html",
    "diagnosis.html",
    "appointments.html",
    "support.html"
  ];


  /* =====================================================
     VETERINARIAN PAGES
  ===================================================== */

  const vetPages = [
    "vet-dashboard.html",
    "vet-appointments.html"
  ];


  /* =====================================================
     PUBLIC PAGE
  ===================================================== */

  const publicPages = [
    "",
    "index.html"
  ];


  /* =====================================================
     LOGIN INFORMATION
  ===================================================== */

  const loggedIn =
    localStorage.getItem("loggedIn");

  const userRole =
    localStorage.getItem("userRole");


  /* =====================================================
     ROLE PROTECTION
  ===================================================== */

  if (!publicPages.includes(currentPage)) {

    /*
      User is not logged in.
    */

    if (
      loggedIn !== "true" ||
      !userRole
    ) {

      /*
        All protected frontend pages are
        inside the same frontend folder as index.html.
      */

      if (currentPage !== "main.html") {

        window.location.href = "index.html";
        return;

      }

      /*
        main.html is one folder above frontend.
      */

      window.location.href = "frontend/index.html";
      return;
    }


    /* =================================================
       FARMER TRYING TO OPEN VET PAGE
    ================================================= */

    if (
      userRole === "farmer" &&
      vetPages.includes(currentPage)
    ) {

      alert(
        "This page is only available to veterinarians."
      );

      window.location.href = "index.html";
      return;
    }


    /* =================================================
       VET TRYING TO OPEN FARMER PAGE
    ================================================= */

    if (
      userRole === "vet" &&
      farmerPages.includes(currentPage)
    ) {

      alert(
        "This page is only available to farmers."
      );

      /*
        If the user is already in frontend,
        vet-dashboard.html is in the same folder.
      */

      window.location.href =
        "vet-dashboard.html";

      return;
    }

  }


  /* =====================================================
     LOGIN FORM
  ===================================================== */

  const loginForm =
    document.getElementById("login-form");


  if (loginForm) {

    loginForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const username =
          document
            .getElementById("login-username")
            ?.value
            .trim();


        const password =
          document
            .getElementById("login-password")
            ?.value;


        const role =
          document
            .getElementById("login-role")
            ?.value;


        /* =================================================
           CHECK ROLE
        ================================================= */

        if (!role) {

          alert(
            "Please select whether you are a Farmer or Veterinarian."
          );

          return;
        }


        /* =================================================
           VETERINARIAN LOGIN
        ================================================= */

        if (role === "vet") {

          /*
            Demo veterinarian:

            Username: vet
            Password: vet123
          */

          if (
            username === "vet" &&
            password === "vet123"
          ) {

            localStorage.setItem(
              "loggedIn",
              "true"
            );

            localStorage.setItem(
              "userRole",
              "vet"
            );


            alert(
              "Veterinarian login successful!"
            );


            /*
              vet-dashboard.html is inside
              the frontend folder.
            */

            window.location.href =
              "vet-dashboard.html";

          } else {

            alert(
              "Invalid veterinarian login.\n\n" +
              "Username: vet\n" +
              "Password: vet123"
            );

          }

          return;
        }


        /* =================================================
           FARMER LOGIN
        ================================================= */

        if (role === "farmer") {

          const savedFarmer =
            localStorage.getItem(
              "farmerAccount"
            );


          /* ===============================================
             REGISTERED FARMER
          =============================================== */

          if (savedFarmer) {

            try {

              const farmerAccount =
                JSON.parse(savedFarmer);


              if (
                username ===
                  farmerAccount.username &&
                password ===
                  farmerAccount.password
              ) {

                localStorage.setItem(
                  "loggedIn",
                  "true"
                );

                localStorage.setItem(
                  "userRole",
                  "farmer"
                );


                alert(
                  "Farmer login successful!"
                );


                /*
                  IMPORTANT:

                  index.html:
                  backend/frontend/index.html

                  main.html:
                  backend/main.html

                  Therefore:

                  frontend → ../main.html
                */

                window.location.href =
                  "main.html";

              } else {

                alert(
                  "Incorrect farmer username or password."
                );

              }

            } catch (error) {

              console.error(
                "Farmer account data error:",
                error
              );

              alert(
                "The saved farmer account is invalid. " +
                "Please register again."
              );

            }

            return;
          }


          /* ===============================================
             DEMO FARMER LOGIN
          =============================================== */

          if (
            username === "farmer" &&
            password === "farmer123"
          ) {

            localStorage.setItem(
              "loggedIn",
              "true"
            );

            localStorage.setItem(
              "userRole",
              "farmer"
            );


            alert(
              "Farmer login successful!"
            );


            /*
              main.html is one folder above
              the frontend folder.
            */

            window.location.href =
              "main.html";

            return;
          }


          /* ===============================================
             NO FARMER ACCOUNT
          =============================================== */

          alert(
            "No farmer account found.\n\n" +
            "Register a farmer account first, " +
            "or use the demo login:\n\n" +
            "Username: farmer\n" +
            "Password: farmer123"
          );

        }

      }
    );

  }


  /* =====================================================
     REGISTER / LOGIN SWITCH
  ===================================================== */

  const registerLink =
    document.getElementById(
      "register-link"
    );


  const backToLogin =
    document.getElementById(
      "back-to-login"
    );


  const registerForm =
    document.getElementById(
      "register-form"
    );


  if (
    registerLink &&
    loginForm &&
    registerForm
  ) {

    registerLink.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        loginForm.style.display =
          "none";

        registerForm.style.display =
          "block";

      }
    );

  }


  if (
    backToLogin &&
    loginForm &&
    registerForm
  ) {

    backToLogin.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        registerForm.style.display =
          "none";

        loginForm.style.display =
          "block";

      }
    );

  }


  /* =====================================================
     FARMER REGISTRATION
  ===================================================== */

  if (registerForm) {

    registerForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const inputs =
          registerForm.querySelectorAll(
            "input"
          );


        const name =
          inputs[0]?.value.trim();


        const surname =
          inputs[1]?.value.trim();


        const email =
          inputs[2]?.value.trim();


        const password =
          inputs[3]?.value;


        const confirmPassword =
          inputs[4]?.value;


        if (
          password !==
          confirmPassword
        ) {

          alert(
            "Passwords do not match."
          );

          return;
        }


        const farmerAccount = {

          name: name,

          surname: surname,

          email: email,

          username: email,

          password: password

        };


        localStorage.setItem(
          "farmerAccount",
          JSON.stringify(
            farmerAccount
          )
        );


        alert(
          "Registration successful!\n\n" +
          "You can now log in using your email address."
        );


        registerForm.reset();


        registerForm.style.display =
          "none";


        loginForm.style.display =
          "block";

      }
    );

  }


  /* =====================================================
     SIDEBAR TOGGLE
  ===================================================== */

  const sidebar =
    document.getElementById(
      "sidebar"
    );


  const sidebarToggle =
    document.getElementById(
      "sidebarToggle"
    );


  const mainContent =
    document.getElementById(
      "mainContent"
    );


  if (
    sidebar &&
    sidebarToggle
  ) {

    sidebarToggle.addEventListener(
      "click",
      function () {

        sidebar.classList.toggle(
          "active"
        );


        if (mainContent) {

          mainContent.classList.toggle(
            "shift"
          );

        }

      }
    );

  }


/* =====================================================
   DARK MODE
===================================================== */

const darkToggle =
  document.getElementById(
    "darkToggle"
  );


/*
  Get the saved dark-mode setting.
*/
const savedDarkMode =
  localStorage.getItem("darkMode");


/*
  Apply saved dark mode when the page loads.
*/
if (
  savedDarkMode === "true" ||
  savedDarkMode === "enabled"
) {

  document.body.classList.add(
    "dark-mode"
  );

}


/*
  Update the button when the page loads.
*/
if (darkToggle) {

  if (
    document.body.classList.contains(
      "dark-mode"
    )
  ) {

    darkToggle.textContent =
      "☀️ Light Mode";

  } else {

    darkToggle.textContent =
      "🌙 Dark Mode";

  }


  /*
    Dark / Light Mode button.
  */
  darkToggle.addEventListener(
    "click",
    function () {

      document.body.classList.toggle(
        "dark-mode"
      );


      const darkMode =
        document.body.classList.contains(
          "dark-mode"
        );


      /*
        Save the current setting.
      */
      localStorage.setItem(
        "darkMode",
        darkMode ? "true" : "false"
      );


      /*
        Change button text.
      */
      if (darkMode) {

        darkToggle.textContent =
          "☀️ Light Mode";

      } else {

        darkToggle.textContent =
          "🌙 Dark Mode";

      }

    }
  );

}



      
    
  /* =====================================================
     LOGOUT
  ===================================================== */

  const logoutLinks =
    document.querySelectorAll(
      ".logout"
    );


  logoutLinks.forEach(
    function (logoutLink) {

      logoutLink.addEventListener(
        "click",
        function (event) {

          event.preventDefault();


          localStorage.removeItem(
            "loggedIn"
          );


          localStorage.removeItem(
            "userRole"
          );


          /*
            Logout is used by pages in frontend,
            so index.html is in the same folder.
          */

          window.location.href =
            "index.html";

        }
      );

    }
  );

});

