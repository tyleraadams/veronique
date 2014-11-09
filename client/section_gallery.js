
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
}

Template.section_gallery.events({
  'click .section-photo': function(e) {  
    
    var selectedPath = $(e.target).parent().attr('data-path');
    var galleryPhotos = Session.get('sectionObj').photos;
    for (var photo in galleryPhotos) {
      if (galleryPhotos[photo].path === selectedPath) {
        return Session.set('photoSelected', galleryPhotos[photo]);
      }
    }

  },

 'mouseover .section-photo': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
  }




});


