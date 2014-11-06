Template.modal.helpers({

  getSelectedPhoto: function() {
    return Session.get('photoSelected');
  }

});

Template.modal.rendered = function() {

}

Template.modal.events({
  'click .closeModal': function(e) {
    Session.set("photoSelected", null);   
  }
});


