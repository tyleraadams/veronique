
Template.landing.helpers({
  isContactOpen: function() {
    return Session.get('contact');
  }
});

Template.contact.rendered = function() {
  
}

Template.landing.events({
  'click .arrow': function(e) { 
    var body = $("html, body");
    body.animate({
      scrollTop: $('.main_gallery').offset().top
    }, 500);

    
    $('.arrow.small').hide()
  }

});


