Meteor.methods({

	getGalleries: function() {
		return Galleries.find({}, {sort:{order:1}}).fetch();
	},

	getSectionPhotos: function(section) {
		return Galleries.findOne({name:section});
	},

	insertContact: function(contact) {
		Email.send({
      		to: 'contact@verodalla.com',
      		from: contact.email,
      		subject: 'New Message From Verodalla.com',
      		text: contact.msg
    	});

		Contacts.insert({name: contact.name, email: contact.email, message:contact.msg, date: new Date()});
	}

});

