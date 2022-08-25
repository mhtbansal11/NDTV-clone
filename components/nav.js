function navbar(){
    return `
    <div id="nav1">

        <a href=""> NDTV </a>
        <a href=""> हिंदी न्यूज़ </a>
        <a href=""> BUSINESS </a>
        <a href=""> MOVIES </a>
        <a href=""> CRICKET </a>
        <a href="">TECH</a>
        <a href=""> FOOD </a>
        <a href=""> CRYPTO </a>
        <a href=""> WEB STORIES </a>
        <a href=""> EDUCATION </a>
        <a href=""> AUTO </a>
        <a href=""> SWASTH </a>
        <a href=""> LIFESTYLE</a>
        <a href="">HEALTH </a>
        <a href=""> SHOPPING </a>
        <a href=""> ART </a>
    </div>

    <div id="nav2">
        <div id="logo">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzY1IDY4LjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2NSA2OC45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0VFMDAwMDt9PC9zdHlsZT48ZyBpZD0iWE1MSURfMV8iPjxwYXRoIGlkPSJYTUxJRF8zXyIgZD0iTTAsMC4xYzguNCwwLDE2LjgtMC4xLDI1LjIsMEMzNS4yLDAuNyw0NCw3LjQsNDguOCwxNmM0LjgsOS4xLDksMTguNSwxMy45LDI3LjVjMS42LDMuMiw0LjgsNS40LDguNCw1LjVDNzAuOSwzMi43LDcxLDE2LjQsNzEsMGM3LjQsMC4xLDE0LjcsMCwyMi4xLDBjMCw3LjEsMCwxNC4yLTAuMSwyMS40Yy01LjEsMi05LjQsNi41LTkuNSwxMi4yYy0wLjcsNi4yLDMuOSwxMS44LDkuNSwxMy43YzAuMSw3LjIsMCwxNC4zLDAuMSwyMS41Yy03LjMsMC4xLTE0LjcsMC0yMiwwLjFjLTguNSwwLjQtMTYuOS0zLjUtMjIuMy05LjljLTYtNy4zLTkuMS0xNi41LTEzLjYtMjQuNkMzMi4xLDI4LjYsMjkuOSwyMCwyMiwxOS43YzAsMTYuNC0wLjEsMzIuNywwLjEsNDkuMWMtNy40LDAuMS0xNC43LDAuMS0yMi4xLDBDMC4xLDQ1LjksMC4xLDIzLDAsMC4xeiIvPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTTk5LjYsMC4xYzYyLjQsMCwxMjQuNy0wLjIsMTg3LjEsMC4xYzkuMywxNi45LDE4LjgsMzMuNywyOCw1MC42YzkuMi0xNi44LDE3LjctMzQsMjYuOC01MC44YzcuOCwwLjEsMTUuNi0wLjEsMjMuNSwwLjJjLTEuMywxLjktMi42LDMuOC0zLjcsNS44Yy0xMSwyMS0yMi4xLDQxLjktMzMuMiw2Mi44Yy04LjksMC0xNy45LDAtMjYuOCwwYy05LjctMTcuNS0xOS42LTM1LTI5LjItNTIuNWMtOS44LTAuMS0xOS43LDAtMjkuNSwwYzAsMTcuNSwwLjEsMzUsMCw1Mi41Yy03LjEsMC0xNC4xLDAtMjEuMiwwYzAtMTcuNSwwLjEtMzUsMC01Mi42Yy0xMC44LDAuMS0yMS43LDAtMzIuNSwwLjFjMiw3LjUsMS44LDE1LjMsMS41LDIzYy0wLjMsNy44LTIuNCwxNi4yLTguMiwyMS44Yy01LjYsNS44LTE0LDcuOC0yMS44LDcuN2MtMjAuMi0wLjEtNDAuNCwwLjEtNjAuNS0wLjFjMC4xLTcuMiwwLTE0LjMsMC4xLTIxLjRjNC44LTEuOSw4LjktNS44LDkuNC0xMS4yYzEtNi41LTMuNS0xMi42LTkuNC0xNC43Qzk5LjYsMTQuMyw5OS44LDcuMiw5OS42LDAuMSBNMTIxLjEsMTYuNWMwLjIsMTIsMC4xLDIzLjksMC4xLDM1LjljMTIuMSwwLjIsMjQuMiwwLjEsMzYuMiwwLjFjNC43LDAuMiwxMC4zLTIuNCwxMS03LjZjMC40LTYuNywwLjMtMTMuNCwwLjEtMjAuMWMtMC41LTUuNC02LjEtOC40LTExLjEtOC4zQzE0NS4zLDE2LjMsMTMzLjIsMTYuMiwxMjEuMSwxNi41eiIvPjxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MCIgZD0iTTgzLjUsMzMuNmMwLjEtNS43LDQuNC0xMC4zLDkuNS0xMi4yYzIuMi0wLjIsNC41LTAuMiw2LjcsMGM1LjksMi4yLDEwLjQsOC4yLDkuNCwxNC43Yy0wLjQsNS4zLTQuNiw5LjMtOS40LDExLjJjLTIuMiwwLjItNC41LDAuMi02LjcsMEM4Ny40LDQ1LjQsODIuOCwzOS45LDgzLjUsMzMuNnoiLz48L2c+PC9zdmc+"
                alt="ndtv logo" />
        </div>

        <a href="">LIVE TV </a>
        <a href=""> LATEST </a>
        <a href="">INDIA </a>
        <a href=""> COVID</a>
        <a href=""> OPINION</a>
        <a href=""> VIDEO</a>
        <a href=""> CITIES</a>
        <a href=""> WORLD</a>
        <a href="">OFFBEAT </a>
        <a href=""> TRENDS</a>
        <a href="">PHOTOS </a>
        <div>
            <svg width="16" height="16">
                <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <svg width="16" height="16">
                <path
                    d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
            </svg>

            <svg width="16" height="16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </div>

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

    </div>

`
}


export default navbar ;