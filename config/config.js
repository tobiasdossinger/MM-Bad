/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			
			config: {
				location: "Darmstadt",
				locationID: "2938913",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "77e569d712c6c4b99d128095f614f9b2"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			
			config: {
				location: "Darmstadt",
				locationID: "2938913",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "77e569d712c6c4b99d128095f614f9b2"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			
			config: {
				feeds: [
					{
						title: "Tagesschau",
						url: "http://www.tagesschau.de/xml/rss2"
					},
					{
						title: "Robert Koch-Institut",
						url: "https://www.rki.de/SiteGlobals/Functions/RSSFeed/RSSGenerator_nCoV.xml?nn=2375210",
				},
					{
						title: "IF-Webseite Activity",
						url: "https://git.imd.rocks/max.studanski/if-website.atom?feed_token=tk3GkpFxy7iwrDo1yDyh" rel="self" type="application/atom+xml"",
				}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	  	//~ {
		    //~ module: 'MMM-COVID19',
		    //~ position: "bottom_center",
		    
		    //~ config: {
		      //~ header:"",
		      //~ updateInterval: 300000,
		      //~ infoRowClass: "small",
		      //~ worldStats: true,
		      //~ countries: [ "Germany", "China", "Italy", "Spain", "USA" ],
		      //~ headerRowClass: "medium",
		      //~ rapidapiKey : "4470123edemsh2ad735320587eb8p1c455ejsne1291c34a6ea" // this is an example, do not try to use it for real
		    //~ }
	  	//~ },
		{
		    module: "MMM-SpaceX",
		    position: "middle_center",
		    
		    config: {
		        records: 4,
		        modus: "upcoming",
		        showExtraInfo: false,
			showColumnHeader: true,
		    }
		},
		{
		module: 'iFrame',
		position: 'bottom_bar',	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
				url: "https://www.twitch.tv/embed/therealknossi/chat",
				width: "100%", // Optional. Default: 100%
				height: "400px" //Optional. Default: 100px
			}
		},
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "top_left",

		  config: {
		    clientID: "d97133acc15342cd8e3b86c1f55e0cb2",
		    clientSecret: "88d979d59dde4793995c566408c74468",
		    accessToken: "BQBW3sm-erYDu2x0BSPuOXuLmFrz81pSQ-HR1Y8_zZ0RYXG75EPFJ1UKMbLOZ4ip94TwG9cLd4OppzS4R578WyjMmPwfUJyAtnj9MmgkewFROcspPdsZwwvWAXHrQfjDN7HlhOb2XRFOl75lvYuk",
		    refreshToken: "AQA_JBzJH7CbbcHDlcB_-n5vk2r4IL_XjGODSVNIH92q26R706fgFyVaZOflDZCRjTZpiZzVeAqTAHd9xtWYGFf6r68aWMwP1zJT5DyYsKDL62HjUWZoowQKvZGQIiWlvLg"
		  }
		}
	
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
