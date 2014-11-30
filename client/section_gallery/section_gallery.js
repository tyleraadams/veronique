
Template.section_gallery.helpers({
  grabPhotos: function () {
    return Session.get('sectionObj').photos;
  },

  grabTitle: function () {
    return Session.get('sectionObj').name;
  },

  grabDesc: function() {
    return Session.get('sectionObj').desc;
  },

  isPhotoSelected: function() {
    return Session.get('photoSelected');
  },

  grabSubGalleries: function() {
    return Session.get('sectionObj')['sub_galleries'];
  },

  isPress: function() {
    return Session.get('sectionObj').name === "Press";
  }
  
  
});

Template.section_gallery.rendered = function() {
  Session.set('photoSelected', null);

  $('html,body').animate({
    scrollTop: $('.section_container').offset().top
  }, 500);
  
}

Template.section_gallery.events({
  'click .section-photo': function(e) {  
    if (Session.get('sectionObj').name !== 'Press') {
      var selectedPath = $(e.target).parent().attr('data-path');
      var galleryPhotos = Session.get('sectionObj').photos;
      for (var photo in galleryPhotos) {
        if (galleryPhotos[photo].path === selectedPath) {
          return Session.set('photoSelected', galleryPhotos[photo]);
        }
      }
      
    }

  },

  'click .arrow-return': function(e) {
    var body = $("html, body");
    body.animate({
      scrollTop: $('nav').offset().top
    }, 500);

  },

 'mouseover .section-photo': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
  },

  'click .flag': function(e) {
    e.prevenDefault();
  }




});


