/*
 * THE GLOBALS
 */
var activeQuiz = null;
var currentQuizQuestion = null;

var activeStream = new Stream({
	id : '1',
	displayName : 'Engineering'
});
var streamId = activeStream.get('id');

var account = new Account({
	id : '1',
	firstName : 'Shikhar',
	lastName : 'Sachan'
});

var id = account.get('id')+'|'+activeStream.get('id');

var timer = new Timer(1000, null, []); // we will have just one global timer
										// object shared across quizzes and
										// practice
var SEPARATOR = '|:';

$(document).ready(function() {
	helper.loadTemplate(Config.viewsArray, function() {
		app = new AppRouter();
		Backbone.history.start();
	});
});

var AppRouter = Backbone.Router.extend({

	routes : {
		"" : "dashboard",
		"getQuestion/:index" : "getQuestion",
		"quizResultsView/:id" : "quizResultsView",
		"quizDetailedView/:id" : "quizDetailedView",
		"quizLibrary" : "quizLibrary",
		"quiz/:id" : "startQuiz",
		"facDirectory" : "facDirectory",
		"fac:id":"fac",
		
	},

	initialize : function() {
		//fetch all the initial data here
		Manager.getL1ByStreamId();
		this.headerView = new HeaderView({
			el : $('header')
		});
	},

	landing : function() {
		// if authenticated, move to dashboard, else display the login page
		new LandingView({
			el : $('#content')
		});
		return;
	},

	dashboard : function() {
		Manager.getDashboardData();
	},

	quizLibrary : function() {
		Manager.getQuizzesByStreamId(activeStream.get('id'));
	},

	facDirectory : function() {
		Manager.getFacByStreamId(activeStream.get('id'));
	},
	
	fac : function(id){
		Manager.getFacByStreamId(activeStream.get('id'));
	},
	
	startQuiz : function(id) {
		activeQuiz = quizLibrary.get(id); // quizzes.get(id);
		Manager.getQuestionsByQuizId(activeQuiz.get('id'));
	},

	stopQuiz : function(timeTaken) {
		activeQuiz.set('timeTaken', timeTaken);
		activeQuiz.calculateScores();
		//activeQuiz.save();
		new QuizResultsView({
			model : activeQuiz,
			el : $('#content')
		});
	},

	quizResultsView : function(quizId) {
		activeQuiz = quizzes.get(quizId);
		new QuizResultsView({
			model : currentQuiz,
			el : $('#content')
		});
	},

	quizDetailedView : function(index) {
		new QuizView({
			model : currentQuiz,
			index : index,
			el : $('#content')
		});

	}
});