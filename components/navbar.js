function navbar() {
  return `
    <div id="container">
    <div id="navbar1">
      <div>NDTV</div>
      <div>Hindi News</div>
      <div>BUSINESS</div>
      <div>MOVIES</div>
      <div>CRICKET</div>
      <div>TECH</div>
      <div>FOOD</div>
      <div>CRYPTO</div>
      <div>WEB STORIES</div>
      <div>EDUCATION</div>
      <div>AUTO</div>
      <div>SWASTH</div>
      <div>LIFESTYLE</div>
      <div>HEALTH</div>
      <div>SHOPPING</div>
      <div>ART</div>
    </div>
    <div id="navbar2">
      <div id="logo">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzY1IDY4LjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2NSA2OC45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0VFMDAwMDt9PC9zdHlsZT48ZyBpZD0iWE1MSURfMV8iPjxwYXRoIGlkPSJYTUxJRF8zXyIgZD0iTTAsMC4xYzguNCwwLDE2LjgtMC4xLDI1LjIsMEMzNS4yLDAuNyw0NCw3LjQsNDguOCwxNmM0LjgsOS4xLDksMTguNSwxMy45LDI3LjVjMS42LDMuMiw0LjgsNS40LDguNCw1LjVDNzAuOSwzMi43LDcxLDE2LjQsNzEsMGM3LjQsMC4xLDE0LjcsMCwyMi4xLDBjMCw3LjEsMCwxNC4yLTAuMSwyMS40Yy01LjEsMi05LjQsNi41LTkuNSwxMi4yYy0wLjcsNi4yLDMuOSwxMS44LDkuNSwxMy43YzAuMSw3LjIsMCwxNC4zLDAuMSwyMS41Yy03LjMsMC4xLTE0LjcsMC0yMiwwLjFjLTguNSwwLjQtMTYuOS0zLjUtMjIuMy05LjljLTYtNy4zLTkuMS0xNi41LTEzLjYtMjQuNkMzMi4xLDI4LjYsMjkuOSwyMCwyMiwxOS43YzAsMTYuNC0wLjEsMzIuNywwLjEsNDkuMWMtNy40LDAuMS0xNC43LDAuMS0yMi4xLDBDMC4xLDQ1LjksMC4xLDIzLDAsMC4xeiIvPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTTk5LjYsMC4xYzYyLjQsMCwxMjQuNy0wLjIsMTg3LjEsMC4xYzkuMywxNi45LDE4LjgsMzMuNywyOCw1MC42YzkuMi0xNi44LDE3LjctMzQsMjYuOC01MC44YzcuOCwwLjEsMTUuNi0wLjEsMjMuNSwwLjJjLTEuMywxLjktMi42LDMuOC0zLjcsNS44Yy0xMSwyMS0yMi4xLDQxLjktMzMuMiw2Mi44Yy04LjksMC0xNy45LDAtMjYuOCwwYy05LjctMTcuNS0xOS42LTM1LTI5LjItNTIuNWMtOS44LTAuMS0xOS43LDAtMjkuNSwwYzAsMTcuNSwwLjEsMzUsMCw1Mi41Yy03LjEsMC0xNC4xLDAtMjEuMiwwYzAtMTcuNSwwLjEtMzUsMC01Mi42Yy0xMC44LDAuMS0yMS43LDAtMzIuNSwwLjFjMiw3LjUsMS44LDE1LjMsMS41LDIzYy0wLjMsNy44LTIuNCwxNi4yLTguMiwyMS44Yy01LjYsNS44LTE0LDcuOC0yMS44LDcuN2MtMjAuMi0wLjEtNDAuNCwwLjEtNjAuNS0wLjFjMC4xLTcuMiwwLTE0LjMsMC4xLTIxLjRjNC44LTEuOSw4LjktNS44LDkuNC0xMS4yYzEtNi41LTMuNS0xMi42LTkuNC0xNC43Qzk5LjYsMTQuMyw5OS44LDcuMiw5OS42LDAuMSBNMTIxLjEsMTYuNWMwLjIsMTIsMC4xLDIzLjksMC4xLDM1LjljMTIuMSwwLjIsMjQuMiwwLjEsMzYuMiwwLjFjNC43LDAuMiwxMC4zLTIuNCwxMS03LjZjMC40LTYuNywwLjMtMTMuNCwwLjEtMjAuMWMtMC41LTUuNC02LjEtOC40LTExLjEtOC4zQzE0NS4zLDE2LjMsMTMzLjIsMTYuMiwxMjEuMSwxNi41eiIvPjxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MCIgZD0iTTgzLjUsMzMuNmMwLjEtNS43LDQuNC0xMC4zLDkuNS0xMi4yYzIuMi0wLjIsNC41LTAuMiw2LjcsMGM1LjksMi4yLDEwLjQsOC4yLDkuNCwxNC43Yy0wLjQsNS4zLTQuNiw5LjMtOS40LDExLjJjLTIuMiwwLjItNC41LDAuMi02LjcsMEM4Ny40LDQ1LjQsODIuOCwzOS45LDgzLjUsMzMuNnoiLz48L2c+PC9zdmc+" alt="ndtv logo" />
      </div>
      <div>LIVE TV</div>
      <div>LATEST</div>
      <div><a href="/india.html">INDIA</a></div>
      <div>COVID</div>
      <div>OPINION</div>
      <div>VIDEO</div>
      <div>CITIES</div>
      <div>WORLD</div>
      <div>OFFBEAT</div>
      <div>TRENDS</div>
      <div>PHOTOS</div>
      <!-- <ul>
              <li>...</li>
              <li>SOUTH</li>
              <li>PEOPLE</li>
              <li>SCIENCE</li>
              <li>JOBS</li>
              <li>WEATHER</li>
              <li>TV SCHEDULE</li>
              <li>TRAINS</li>
             
          </ul> -->
      <div class="social_logo">
       <i class="uil uil-twitter"></i>
      </div>
      <div class="social_logo">
       <i class="uil uil-facebook"></i>
      </div>
      <div class="social_logo">
        <img
          src="https://www.kooapp.com/assets/2d634360.svg"
          alt="koo"
        />
      </div>
      <div class="social_logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250113.png?w=1060&t=st=1661277403~exp=1661278003~hmac=d6c7956c3fb6b8642b485f5c0e9cd68140b69ebc2209a567c9f7095b56c8513b"
          alt="new story"
        />
      </div>
      <div class="social_logo">
        <i class="uil uil-bell"></i>
      </div>
      <div class="social_logo">
        <i class="uil uil-search"></i>
      </div>
    </div>
  </div>`;
}
export default navbar;
