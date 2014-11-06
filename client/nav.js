
Template.nav.helpers({
  isContactOpen: function() {
    return Session.get('contact');
  }
});

Template.nav.rendered = function() {
  Session.set('contact', false);
}

Template.nav.events({
  'click .contact': function(e) {  
    Session.set('contact', true);
  }

});


