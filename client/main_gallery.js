Template.main_gallery.helpers({
  setSection: function (e) {
    
  },

  isSectionOpen: function() {
    console.log(Session.get('galleries')===true)
    return Session.get('section');
  },

  showDesc: function(e) {
    console.log(e.target);
  },

  sendForGalleries: function() {
    
  },

  grabGalleries: function() {
    return Session.get('galleries');
  },

  grabCoverPhotos: function() {


  }
});

Template.main_gallery.rendered = function() {
  Session.setDefault("section", null);

  Meteor.call('getGalleries', function(err, result){
      if(err) throw err;
      // console.log('this is the result of server call ' + result);
      Session.set('galleries', result);
    });
}

Template.main_gallery.events({
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


