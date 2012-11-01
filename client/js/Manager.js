/**
 * The initialization logic
 * 
 * @author ssachan
 * 
 */
window.Manager = {

	getStreams : function() {

	},

	getL1ByStreamId : function() {
		var url = Config.serverUrl + 'l1ByStream/' + streamId;
		var self = this;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("l1 fetched: " + data.length);
				sectionL1.reset(data);
				self.getL2ByStreamId();
			}
		});
	},

	getL2ByStreamId : function() {
		var url = Config.serverUrl + 'l2ByStream/' + streamId;
		var self = this;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("l2 fetched: " + data.length);
				sectionL2.reset(data);
				self.getL3ByStreamId();
			}
		});
	},

	getL3ByStreamId : function() {
		var url = Config.serverUrl + 'l3ByStream/' + streamId;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("l3 fetched: " + data.length);
				sectionL3.reset(data);
			}
		});
	},
	
	getL1Performance : function() {
		var url = Config.serverUrl + 'l1Performance/' + account.get('id');
		var self = this;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("L1performance fetched: " + data.length);
				scoreL1.reset(data);
				self.getL2Performance();
			}
		});
	},

	getL2Performance : function() {
		var url = Config.serverUrl + 'l2Performance/' + account.get('id');
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("L2performance fetched: " + data.length);
				scoreL2.reset(data);
				new DashboardView({
					model1 : scoreL1,
					model2 : scoreL2,
					el : '#content'
				});
			}
		});
	},

	getDashboardData : function() {
		this.getL1Performance();
	},

	getQuizzesByStreamId : function(id) {
		var url = Config.serverUrl + 'quizzesByStreamId/' + id;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("quizzes fetched: " + data.length);
				quizLibrary.reset(data);
				new QuizLibraryView({
					model : quizLibrary,
					el : '#content'
				});
			}
		});
	},

	getFacByStreamId : function(id) {
		var url = Config.serverUrl + 'facByStreamId/' + id;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("faculty fetched: " + data.length);
				facDirectory.reset(data);
				new FacDirectoryView({
					model : facDirectory,
					el : '#content'
				});
			}
		});
	},

	getQuestionsByQuizId : function(id) {
		var url = Config.serverUrl + 'questionByQuizId/' + id;
		$.ajax({
			url : url,
			dataType : "json",
			success : function(data) {
				console.log("questions fetched: " + data.length);
				quizQuestions.reset(data);
				new QuizView({
					model : activeQuiz,
					index : 0,
					el : $('#content')
				});
				timer.setUpdateFunction(helper.updateQuizTimer, []);
				timer.reset();
				timer.start();
			}
		});
	},

	submitQuizResults : function() {
		var quiz = activeQuiz;
		var optionSelectedPerQuestion = quiz.get('optionSelectedPerQuestion')
				.join(SEPARATOR);
		var timeTakenPerQuestion = quiz.get('timeTakenPerQuestion').join(
				SEPARATOR);
		var questionIds = quiz.getQuestionIds().join(SEPARATOR);
		var timestamp = new Date().getTime();
		var response = new Response({
			accountId : '1',
			quizId : completedQuizzes[i].get('id'),
			questionIds : questionIds,
			optionsSelected : optionSelectedPerQuestion,
			timeTaken : timeTakenPerQuestion,
			timestamp : timestamp
		});
		helper.changeSync(1);
		response.save();
		completedQuizzes[i].set('synced', true);
		helper.changeSync(2);
		completedQuizzes[i].save();
		localStorage.setItem("lastSync", timestamp);
	}
};
