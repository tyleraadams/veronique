
Template.section_gallery.helpers({
  grabPhotos: function (e) {
    return Session.get('sectionObj').photos;
  },

  grabTitle: function () {
    return Session.get('sectionObj').name;
  },

  grabDesc: function() {
    return Session.get('sectionObj').desc;
  }
});

Template.section_gallery.rendered = function() {
  // $('#footer').css('bottom', -height);

  $('.section-photo .cover').css('width', '170px');
  $('.section-photo .cover').css('height', '170px');
  $('.section-photo .cover').css('font-size', '0.5em');
  $('.section-photo .cover>p').css('top', '10px');
}

Template.section_gallery.events({
  'click a': function(e) {  
    
  },

 'mouseover .section-photo': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
  }


});


