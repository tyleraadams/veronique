
Template.landing.helpers({
  isContactOpen: function() {
    return Session.get('contact');
  }
});

Template.contact.rendered = function() {
  
}

Template.landing.events({
  'click .arrow-return': function(e) { 
    var body = $("html, body");
    body.animate({
      scrollTop: $('nav').offset().top
    }, 500);

    
    
  }

});


