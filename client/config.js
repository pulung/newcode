var SEPARATOR = '|:';

window.Storage = {
	    LOCALSTORAGE : 0,
	    WEBSQL : 1,
	    FILESYSTEM : 2
};

var config_mobile_local = {
	syncStoragePath : "",
	templatePath : "",
	serverUrl : 'http://localhost/nero/api/',
	edition : '0',
	editionName : 'mobile',
	assetPath : '',
    tmplatesFolder : "tpl-mobile",
    phonegap : false,
    viewsArray : [	'LandingView', 
    				'QuizQuestionView',
    				'FlashCardListView',
    				'FlashCardListItemView',
    				'FlashCardView',
    				'MenuView',
    				'PracticeTopicsView',
    				'PracticeQuestionView',
    				'QuizTopicsView',
    				'QuizResultsView',
    				'ProfileView',
    			]
};

var config_web_local = {
	syncStoragePath : "",
	templatePath : "",
	serverUrl : 'http://localhost/nero/api/',
	edition : '1',
	editionName : 'web',
	assetPath : '',
    tmplatesFolder : "tpl-web",
    phonegap : false,
    viewsArray : [	
    				'HeaderView',
                  	'LandingView',
                  	'MenuView',
                  	'QuizView',
    				'QuizQuestionView',
    				'FlashCardListView',
    				'FlashCardListItemView',
    				'FlashCardView',
    				'MenuView',
    				'MainView',
    				'PracticeTopicsView',
    				'PracticeView',
    				'PracticeQuestionView',
    				'QuizTopicsView',
    				'QuizResultsView',
    				'ProfileView',
    			]
};


var config_mobile_server = {
		syncStoragePath : "",
		templatePath : "",
		serverUrl : 'http://www.test-rex.com/prod/api/',
		edition : '0',
		editionName : 'mobile',
		assetPath : '',
	    tmplatesFolder : "tpl-mobile",
	    phonegap : false,
	    viewsArray : [	'LandingView', 
	    				'QuizQuestionView',
	    				'FlashCardListView',
	    				'FlashCardListItemView',
	    				'FlashCardView',
	    				'MenuView',
	    				'PracticeTopicsView',
	    				'PracticeQuestionView',
	    				'QuizTopicsView',
	    				'QuizResultsView',
	    				'ProfileView',
	    			]
	};

var config_web_server = {
		syncStoragePath : "",
		templatePath : "",
		serverUrl : 'http://www.test-rex.com/prod/api/',
		edition : '1',
		editionName : 'web',
		assetPath : '',
	    tmplatesFolder : "tpl-web",
	    phonegap : false,
	    viewsArray : [	
	    				'HeaderView',
	                  	'LandingView',
	                  	'MenuView',
	                  	'QuizView',
	    				'QuizQuestionView',
	    				'FlashCardListView',
	    				'FlashCardListItemView',
	    				'FlashCardView',
	    				'MenuView',
	    				'MainView',
	    				'PracticeTopicsView',
	    				'PracticeView',
	    				'PracticeQuestionView',
	    				'QuizTopicsView',
	    				'QuizResultsView',
	    				'ProfileView',
	    			]
	};

var Config = config_web_local; 