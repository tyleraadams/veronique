Template.main_gallery.helpers({


  isSectionOpen: function() {
    return Session.get('section');
  },


  grabGalleries: function() {
    return Session.get('galleries');
  },

});

Template.main_gallery.rendered = function() {
  Session.set("section", null);
  Session.set('sectionObj', null);

  Meteor.call('getGalleries', function(err, result){
      if(err) throw err;
      Session.set('galleries', result);
    });


  var height = $(document).height();
  // $('#footer').css('bottom', -height);
}

Template.main_gallery.events({
  'click a': function(e) {
    // debugger
    Session.set("section", $(e.target).parent().attr('data-name'));
    // Session.set('sectionObj', null);
    var section = Session.get('section');
    var galleries = Session.get('galleries');
    for (var gallery in galleries) { if(galleries[gallery].name === section) { Session.set('sectionObj', galleries[gallery]) } }
  },

  'mouseover a': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    $(cover).mouseout(function(){
      $('.cover').css('display', 'none');
    });
  }
});


