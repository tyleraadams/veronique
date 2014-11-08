Template.modal.helpers({

  getSelectedPhoto: function() {
    return Session.get('photoSelected');
  }

});

Template.modal.rendered = function() {
	$("body").addClass("modal-open");
}

Template.modal.events({
  'click .closeModal': function(e) {
  	$("body").removeClass("modal-open")
    Session.set("photoSelected", null);   
  }
});


