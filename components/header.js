class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <style>
        .navbar {
          display: flex;
          justify-content: space-evenly;
          padding: 2.5px;
          width: 100%;
          filter: drop-shadow(3px 3px 3px #c8c8c8);
          background-color: #e1e1e1;
          position: absolute;
          top: 0px;
          right: 0px;
          overflow: hidden;
        }
        
        .navbar-a {
            align-self: center;
            flex-grow: 1;
            font-size: larger;
        }
        
        .navbar-big {
            flex-grow: 5;
            font-size:x-large;
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

        @media (prefers-color-scheme: dark) {
            .navbar {
                background-color: #2e302f;
                filter: drop-shadow(3px 3px 3px #2a2c2b) blur();
            }
        
            .navbar-a {
                color: #d7d7d7;
            }
        }
      </style>
      <div class="navbar">
        <a class="navbar-a" href="page1.html">
            <div class="navbar-brand">Page 1</div>
        </a> <!-- Titel in der Navigationsleiste welcher mit einem Link versehen ist -->
        <a class="navbar-a" href="page2.html">
            <div class="navbar-brand">Page 2</div>
        </a>
        <a class="navbar-a navbar-big" href="index.html">
            <div class="navbar-brand">Home</div>
        </a> <!-- z.B. hier zur Startseite -->
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
