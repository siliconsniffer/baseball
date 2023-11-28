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
          position: relative;
        }
        
        .navbar-a {
            align-self: center;
            color: var(--nav-a);
            flex-grow: 1;
            font-size: x-large;
        }
        
        .navbar-big {
            flex-grow: 5;
            font-size:xx-large;
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

        /* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
        



        @media screen and (max-width: 700px) {
            .navbar-a {
                display: none;
            }
        }

      </style>
      <div class="navbar">
        <div class="dropdown">
            <button>Dropdown
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a class="drop-a" href="#">Link 1</a>
                <a class="drop-a" href="#">Link 2</a>
                <a class="drop-a" href="#">Link 3</a>
            </div>
        </div>
        <a class="navbar-a" href="page1.html">
            <div class="navbar-brand">Page 1</div>
        </a>
        <a class="navbar-a" href="page2.html">
            <div class="navbar-brand">Page 2</div>
        </a>
        <a class="navbar-a navbar-big" href="index.html">
            <div class="navbar-brand">Home</div>
        </a>
        <a class="navbar-a" href="impressum.html">
            <div class="navbar-brand">Impressum</div>
        </a>
        <a class="navbar-a" href="sources.html">
            <div class="navbar-brand">Sources</div>
        </a>
    </div>
      `;
    }
}

customElements.define("header-component", Header);
