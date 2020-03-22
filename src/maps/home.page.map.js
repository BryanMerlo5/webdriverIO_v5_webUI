module.exports = {
    topMenuSection: {
        img: {
            logo: '//jb-logo[@_ngcontent-jb-app-c4]/a/img'
        },
        lnk: {
            book: '//a[@class="main-nav-link flex justify-between white no-underline nowrap ng-star-inserted gs_copied gs_hover"]',
            explore: '.nofocus',
            travel: '//a[text()=" Travel Info "]',
            myTrips:'//a[text()=" My Trips "]',
            trueBluen: '//a[text()=" TrueBlue "]',
            signIn: '//a[@_ngcontent-jb-app-c14 and @routerlink]',
            join: '//a[@_ngcontent-jb-app-c14 and @tabindex and @href]',
            flightTracker: '//a[@_ngcontent-jb-app-c4 and @routerlink="/flight-tracker-and-status"]',
            checkIn: '//a[@_ngcontent-jb-app-c4 and @href="https://checkin.jetblue.com/"]',
            travelAlerts: '//a[@_ngcontent-jb-app-c4 and @routerlink="/travel-alerts"]',
            language: '//a[@_ngcontent-jb-app-c4 and @mporgnav]'
        }
    },
    footerSection: {
        lbl: {
            indicate: '//p[@_ngcontent-jb-app-c2][1]',
            jetblue: '//p[2]'
        },
        lnk: {
            helpTopics: '//h4[@class="b core-blue ls-02 mb0"]',
            getKnows: '//h4[text()="Get To Know Us"]',
            policies: '//h4[text()="Policies"]',
            submit: '//a[@class="b items-baseline inline-flex no-underline tc underline-hover royal-blue pointer underline hover-core-blue dib"]',
            blueAction: '//h4[text()="JetBlue In Action"]',
            stayConnected: '//h4[@class="copy fw9 core-blue mb0"]'
        }
    },
    bodySection: {
        btn: {
            searchFlights: '.jb-button-secondary'
        },
        txt: {
            from: '//input[@id="city-selector_efpgdq8v5"]',
            to: '//input[@id="city-selector_mn5nxhgwc"]'
        },
        img: {
        },
        chk:{
            useTrueBlue: '//jb-checkbox[@class="white mb2 justify-center order-1-ns ng-untouched ng-pristine ng-valid"]/label/div/span[1]'
        },
        lbl:{
            welcome: '#first-focus'
        },
        lnk: {
            flights: '//span[@_ngcontent-jb-app-c36 and text()="Flights"]',
            vacations: '//span[text()="Vacations"]',
            hotels: '//span[@_ngcontent-jb-app-c36 and text()="Hotels"]',
            cars: '//span[@_ngcontent-jb-app-c36 and text()="Cars"]',
            multiCity: '//a[@_ngcontent-jb-app-c41]'
        },
        rdButton: {
          roundtrip: '//label[@for="jb-radio-0"]/div[1]',
          oneWay: '//div[text()=" One-way "]'  
        }
    }
  };