
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
  }
});

Template.section_gallery.rendered = function() {
  // var height = $(document).height();
  
  // $('#footer').css('bottom', 0);

  // $('.section-photo .cover').css('width', '170px');
  // $('.section-photo .cover').css('height', '170px');
  // $('.section-photo .cover').css('font-size', '0.5em');
  // $('.section-photo .cover>p').css('top', '10px');
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


