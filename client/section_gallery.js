
Template.section_gallery.helpers({
  grabPhotos: function (e) {
    return Session.get('section').images;
  },

  grabTitle: function () {
    return Session.get('section').name;
  },

  grabDesc: function() {
    return Session.get('section').desc;
  }
});

Template.section_gallery.rendered = function() {
  var section = Session.get('section');
  Meteor.call('getSectionPhotos', section, function(err, result){
      if(err) throw err;
      console.log('this is the result of server call ' + result);
      Session.set('section', result);
    });
}

Template.section_gallery.events({
  'click a': function(e) {  
    Session.set("section", $(e.target).attr('data-name'));
  },

  'mouseover a': function(e) {
    var cover = $(e.target).find('.cover');
    $(cover).css('display', 'inherit');

    var text = $(e.target).attr('class').replace('gallery_item', '');
    if(text === 'cover') {
      text =  $(e.target).parents.attr('class').replace('gallery_item', '');
    }
    $('.cover').text(text);
  },

  'mouseout a': function(e){
    $('.cover').css('display', 'none');
  }
});


