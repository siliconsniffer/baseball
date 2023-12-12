class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        :root {
            --bg-header: #272727;
            --drop-shadow: 3px 3px 3px #212121;
            --nav-a: #9b9b9b;
        }

        .light-mode {
            --bg-header: #e1e1e1;
            --drop-shadow: 3px 3px 3px #c8c8c8;
            --nav-a: #504f4f;
        }

        .navbar {
            display: flex;
            justify-content: space-evenly;
            padding: 1.5px;
            filter: drop-shadow(var(--drop-shadow));
            background-color: var(--bg-header);
        }

        .navbar-a {
            align-self: center;
            color: var(--nav-a);
            flex-grow: 1;
            font-size: x-large;
        }

        .navbar-big {
            flex-grow: 5;
            font-size: xx-large;
        }

        .navbar-brand {
            display: flex;
            justify-content: center;
            font-weight: bolder;
            text-transform: uppercase;

            &:hover {
                color: grey;
            }
        }

        .icon-bar {
          width: 35px;
          height: 5px;
          background-color: var(--title);
          margin: 6px 0;
        }

        /* Hide the link that should open and close the topnav on small screens */
        .navbar .icon {
          display: none;
        }

        /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
       @media screen and (max-width: 700px) {
         .navbar a:not(:nth-child(0n+3)) {display: none;}
         .navbar a.icon {
          display: block;
          float: right;
          margin-right: 5px;
         }
       }

       /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
       @media screen and (max-width: 700px) {
         .navbar.responsive {
           position: relative;
           flex-direction: column;
         }
         .navbar.responsive a.icon {
           position: fixed;
           right: 0;
           top: 0;
         }
         .navbar.responsive a {
           display: relative;
           float: none;
           display: block;
           text-align: left;
         }
       }

      </style>
      <div class="navbar" id="navbar">
        <a class="navbar-a" href="construction.html">
            <div class="navbar-brand">Teams</div>
        </a>
        <a class="navbar-a" href="construction.html">
            <div class="navbar-brand">Ligen</div>
        </a>
        <a class="navbar-a navbar-big" href="index.html">
            <div class="navbar-brand">Home</div>
        </a>
        <a class="navbar-a" href="construction.html">
            <div class="navbar-brand">Impressum</div>
        </a>
        <a class="navbar-a" href="sources.html">
            <div class="navbar-brand">Quellen</div>
        </a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <div class="icon-bar"></div>
          <div class="icon-bar"></div>
          <div class="icon-bar"></div>
        </a>
    </div>
      `;
  }
}

customElements.define("header-component", Header);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
