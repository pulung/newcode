/**
 * The dashboard view
 * @author ssachan 
 * 
 **/

window.DashboardView = Backbone.View.extend({
	
	initialize : function() {
		this.render();
	},

	render : function() {
		$(this.el).html(this.template());
		var l1Scores = this.options.model1;
		var l2Scores = this.options.model2;
		// loop through l1 of this specific stream 
		var l1 = sectionL1.models;
		var len = l1.length;
		for(var i=0; i< len; i++){
			l1Id = l1[i].get('id');
			var l1Score = l1Scores.where({id:l1Id});
			$('#performance').append('<h4>'+l1[i].get('displayName')+'-( '+l1Score[0].get('score')+' )</h4>');
			var l2 = sectionL2.where({l1Id:l1Id});
			var len2 = l2.length;
			for(var j = 0 ; j < len2 ;j++){
				l2Id =l2[j].get('id'); 
				var score = l2Scores.where({id:l2Id})[0].get('score');
				$('#performance').append('<h5>'+l2[j].get('displayName')+'-'+score+'</h5>');
			}
			//var l2Scores = this.options.model2.where({l1Id: l1Scores[i].get('id') });
			//var len2 = l2Scores.length;
			//for(var j=0;j<len2;j++){
				//$('#performance').append('<h5>'+l2Scores[j].get('displayName')+'</h5>');
			//}
		}
	}
});

window.PerformanceView = Backbone.View.extend({
	initialize : function() {
		this.render();
	},

	render : function() {
		$(this.el).html(this.template());
	}
});
