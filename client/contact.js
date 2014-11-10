
Template.contact.helpers({
  isContactOpen: function() {
    return Session.get('contact');
  }
});

Template.contact.rendered = function() {
  // debugger
  var $container = $('.contact_container');
}

Template.contact.events({
  'submit #contact': function(e) { 
    e.preventDefault();
    
    var contact = {};
    contact.name = $('#contact').find('#name').val();
    contact.email = $('#contact').find('#email').val();
    contact.msg = $('#contact').find('#msg').val();
    Meteor.call('insertContact', contact, function(err,result){
      console.log(result);
    });
    Session.set('contact', false);
  },

  'click .closeContact': function(e) {
      Session.set('contact', false);
  }

});


