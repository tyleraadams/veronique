Template.main_gallery.helpers({


  isSectionOpen: function() {
    return Session.get('section');
  },


  grabGalleries: function() {
    return Session.get('galleries');
  },

});

Template.main_gallery.rendered = function() {
  GAnalytics.pageview();
  Session.set("section", null);
  Session.set('sectionObj', null);

  Meteor.call('getGalleries', function(err, result){
      if(err) throw err;
      Session.set('galleries', result);
    });

  var currentScrollPos = $(document).scrollTop();
  if (currentScrollPos >= $('.main_gallery').offset().top) {
    $('.arrow.small').css('display','none');
  }

  $(window).scroll(function() {

    if ($(this).scrollTop() <= $('nav').offset().top/2) {        // If page is scrolled more than 50px
        $('.arrow-return.down').fadeIn(200);    // Fade in the arrow
    } else {
        $('.arrow-return.down').fadeOut(200);   // Else fade out the arrow
    }

    if ($('.section_container').length > 0) {

      if ($(this).scrollTop() >= $('.section_container').offset().top) {
        $('.arrow-return.up').fadeIn(200);    // Fade in the arrow
      } else {
          $('.arrow-return.up').fadeOut(200);
      }
      
    }
});
  
}

Template.main_gallery.events({


  'fastclick a, click a': function(e) {

    e.preventDefault();
    e.stopPropagation();

    Session.set("section", $(e.target).parent().attr('data-name') || $(e.target).parent().find('.gallery_item').attr('data-name'));
    
    var section = Session.get('section');
    var galleries = Session.get('galleries');
    for (var gallery in galleries) { if(galleries[gallery].name === section) { Session.set('sectionObj', galleries[gallery]); } }
   
    if ($('.section_container').length > 0) {
      $('html,body').animate({
        scrollTop: $('.section_container').offset().top
      }, 500);
    }
      

  },

  'mouseover a': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
  }


});


