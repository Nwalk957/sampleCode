/**
 * Created by nwalker on 3/22/17.
 */

(function(){
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeController);

    function HomeController(){
        var vm = this;
        vm.team = [
            {name: 'Anaheim Ducks', image: "http://cdn.nhle.com/logos/nhl/svgz/ANA_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Arizona Coyotes', image: "http://cdn.nhle.com/logos/nhl/svgz/ARI_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Boston Bruins', image: "http://cdn.nhle.com/logos/nhl/svgz/BOS_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Buffalo Sabres', image: "http://cdn.nhle.com/logos/nhl/svgz/BUF_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Carolina Hurricanes', image: "http://cdn.nhle.com/logos/nhl/svgz/CAR_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Columbus Blue Jackets', image: "http://cdn.nhle.com/logos/nhl/svgz/CBJ_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Calgary Flames', image: "http://cdn.nhle.com/logos/nhl/svgz/CGY_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Chicago Blackhawks', image: "http://cdn.nhle.com/logos/nhl/svgz/CHI_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Colorado Avalanche', image: "http://cdn.nhle.com/logos/nhl/svgz/COL_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Dallas Stars', image: "http://cdn.nhle.com/logos/nhl/svgz/DAL_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Detroit Redwings', image: "http://cdn.nhle.com/logos/nhl/svgz/DET_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Edmonton Oilers', image: "http://cdn.nhle.com/logos/nhl/svgz/EDM_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Florida Panthers', image: "http://cdn.nhle.com/logos/nhl/svgz/FLA_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Los Angeles Kings', image: "http://cdn.nhle.com/logos/nhl/svgz/LAK_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Minnesota Wild', image: "http://cdn.nhle.com/logos/nhl/svgz/MIN_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Montreal Canadiens', image: "http://cdn.nhle.com/logos/nhl/svgz/MTL_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'New Jersey Devils', image: "http://cdn.nhle.com/logos/nhl/svgz/NJD_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Nashville Predators', image: "http://cdn.nhle.com/logos/nhl/svgz/NSH_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'New York Islanders', image: "http://cdn.nhle.com/logos/nhl/svgz/NYI_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'New York Rangers', image: "http://cdn.nhle.com/logos/nhl/svgz/NYR_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Ottawa Senators ', image: "http://cdn.nhle.com/logos/nhl/svgz/OTT_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Philadelphia Flyers', image: "http://cdn.nhle.com/logos/nhl/svgz/PHI_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Pittsburgh Penguins', image: "http://cdn.nhle.com/logos/nhl/svgz/PIT_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'San Jose Sharks', image: "http://cdn.nhle.com/logos/nhl/svgz/SJS_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'St. Louis Blues', image: "http://cdn.nhle.com/logos/nhl/svgz/STL_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Tampa Bay Lighting', image: "http://cdn.nhle.com/logos/nhl/svgz/TBL_light.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Toronto Maple Leafs', image: "http://cdn.nhle.com/logos/nhl/svgz/TOR_light.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'},
            {name: 'Vancouver Canucks', image: "http://cdn.nhle.com/logos/nhl/svgz/VAN_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Winnipeg Jets', image: "http://cdn.nhle.com/logos/nhl/svgz/WPG_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/western-conference-logo.svgz?v=10.23'},
            {name: 'Washington Capitals', image: "http://cdn.nhle.com/logos/nhl/svgz/WSH_dark.svgz?v=10.23", city: 'http://www.nhl.com/nhl/en/v3/images/playoffs/eastern-conference-logo.svgz?v=10.23'}
        ];




    }

})();