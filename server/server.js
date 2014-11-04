Meteor.methods({

	getGalleries: function() {
		return Galleries.find({}, {sort:{order:1}}).fetch();
	},

	getSectionPhotos: function(section) {
		return Galleries.findOne({name:section});
	}

});

