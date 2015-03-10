$(document).ready(function(){
	function initAd(){
		//Initialize Advertisement
		var defaultOptions = {
			position: AdMob.AD_POSITION.BOTTOM_CENTER,
			bgColor: 'black',
			isTesting: true
		};
		AdMob.setOptions( defaultOptions );
        registerAdEvents();
	}

	function registerAdEvents() {
		//Method to Add AdMob Events
		document.addEventListener('onAdFailLoad', function(data){ 
        	alert('error: ' + data.error + 
        			', reason: ' + data.reason + 
        			', adNetwork:' + data.adNetwork + 
        			', adType:' + data.adType + 
        			', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
        });
        document.addEventListener('onAdLoaded', function(data){});
        document.addEventListener('onAdPresent', function(data){});
        document.addEventListener('onAdLeaveApp', function(data){});
        document.addEventListener('onAdDismiss', function(data){});
        //Create the Banner for the page
	}

	function createSelectedBanner() {
		alert("Creating banner");
		//Method to Create the Banner
    	//var overlap = document.getElementById('overlap').checked;
        //var offsetTopBar = document.getElementById('offsetTopBar').checked;
        AdMob.createBanner( {adId:admobid.banner, overlap:false, offsetTopBar:false, adSize: 'SMART_BANNER', position:8} );
    }


	//OS Checking
	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { // for Android
			banner: 'ca-app-pub-6869992474017983/9375997553',
			interstitial: 'ca-app-pub-6869992474017983/1657046752'
		};
	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
		admobid = { // for iOS
			banner: 'ca-app-pub-6869992474017983/4806197152',
			interstitial: 'ca-app-pub-6869992474017983/7563979554'
		};
	} else {
		admobid = { // for Windows Phone
			banner: 'ca-app-pub-6869992474017983/8878394753',
			interstitial: 'ca-app-pub-6869992474017983/1355127956'
		};
	}

	document.addEventListener('deviceready',function(){
		if (! AdMob ) { 
			alert( 'admob plugin not ready' ); 
			return;
			 }
			 initAd();
			 createSelectedBanner();			 	

		//Device Ready
	},false);
	//DOM Fully Loaded
});