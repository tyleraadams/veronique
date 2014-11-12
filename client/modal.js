Template.modal.helpers({

  getSelectedPhoto: function() {
    return Session.get('photoSelected');
  }

});

Template.modal.rendered = function() {
	$("body").addClass("modal-open");

  
 
  var windowH = $(window).height();
  var windowW = $(window).width();



  $(".selected-photo").load(function() {
     var $loading = $("#modal figure");
      $loading.css({
  
    left: ((windowW - $loading.outerWidth())/2 + $(document).scrollLeft())
  
  });
  });
}

Template.modal.events({
  'click .closeModal': function(e) {
  	$("body").removeClass("modal-open");
    Session.set("photoSelected", null);
  },

  'click .arrow': function(e) {

    var dir = $(e.target).parent().attr('data:dir');
    if ( typeof dir === 'undefined' ){
      dir = $(e.target).attr('data:dir');
    }
  	// var dir = $(e.target).parent().attr('data:dir');
  	var currentSection = Session.get('sectionObj');
  	var currentPhoto = Session.get('photoSelected');

  	var photos = currentSection.photos;
  	var dirLib = { 'left': -1, 'right': 1 };
  	

  	for (var photo in photos) {
  	
  		if (photos[photo].path === currentPhoto.path ) {
  			// debugger
  			if (parseInt(photo) + dirLib[dir] < 0) {

  				return Session.set('photoSelected', photos[photos.length - 1])
  			}

  			if (parseInt(photo) + dirLib[dir] === photos.length) {
  				return Session.set('photoSelected', photos[0])
  			}
  			return Session.set('photoSelected', photos[parseInt(photo) + dirLib[dir]])
  		}
  	}

  }
});


