Galleries = new Meteor.Collection('galleries');

Photo = new Meteor.Collection('photos');

var photoDefault = {
	name: '',
	materials: '',
	dimensions: '',
	path: ''
};