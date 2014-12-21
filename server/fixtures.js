// var galleryDefault = function() {
// 	this.name = "";
// 	this.desc =  "";
// 	this.cover_photo = "";
// 	this.photos = [];
// 	this.sub_galleries = [];
// 	this.order = 0;
// };

// var galleries = [];


// var innerJourney = new galleryDefault();
// var	livenlulu = new galleryDefault();
// var	poppies = new galleryDefault();
// var	about = new galleryDefault();
// var	exhibitions = new galleryDefault();
// var	press = new galleryDefault();

// innerJourney.name = 'Inner Journey';
// innerJourney.desc = "<p>Inner Journey, a <em>bas relief </em>series begun a few years ago, represents a personal journey in VeroDalla's mind.</p><p>The first part of the series of the inner turmoil<em> </em>she experienced throughout the earlier parts of her life-- enclosed within frames. The latest series, created in New York, is symbolic of a new era of creation for VeroDalla-- an explosion that has freed her for the first time and has allowed her to transcend borders of all kinds.</p><p>In the Inner Journey N14, the most recent piece, the artist gives collectors the opportunity to own this very artwork, to have a piece of her chaos, a slice of her life, a bite of her performance.</p>";
// innerJourney.cover_photo = 'images/inner_journey.jpg';
// innerJourney.position = 1;
// galleries.push(innerJourney);

// livenlulu.name = 'LivenLuLu';
// livenlulu.desc = '<p>&#171; Not really man, not really woman,</p><p>Not yellow, nor grey, black, or white,</p><p>Not from the left, not from the right,</p><p>Not from the top, nor from the bottom,<br/>And yet&#8230;"<br/>"&#8230;They\'re naked without being naked.<br/>They carry no connotations, they are us in the plural.<br/>The only thing distinguishing them is movement, movement that is the sign of life, gesture, appeal...<br/>I wanted them to be light, gracious,<br/>images conveying the best of us.<br/>They are us and vice versa.<br/>Looking at them helps us to understand ourselves..."<br/>Interview by Pierre Anglade</p><p>Verodalla has already completed 750 different LivenLuLu. More than 650 have been sold, and it\'s just a beginning&#8230;</p>';
// livenlulu.cover_photo = 'images/livenlulu.jpg';
// livenlulu.position = 2;

// galleries.push(livenlulu);

// poppies.name = 'Poppies';
// poppies.desc = '<p>Picking a poppy will change her life in art. Upon such a revelation, she will leave in search of beauty, harmony, well-being, balance.</p><p><em>La cueillette d\'un coquelicot fera basculer sa vie dans l\'art. Telle une r&#233;v&#233;lation, elle partira &#224; la recherche du beau, de l\'harmonie, du bien &#234;tre, de l\'&#233;quilibre.</em></p><p>Each piece reveals itself as sober, refined, soothing, cheerful, simple and sometimes obvious.</p>';
// poppies.cover_photo = 'images/poppies/Detail coquelicot au vent rouge.JPG';
// poppies.order = 3;

// galleries.push(poppies);

// about.name = 'About';
// about.desc = '<p>VeroDalla, born in France in 1970, currently lives and creates in New York City.</p><p>She began her professional career in gastronomy, first as manager then as owner of a Michelin-starred establishment in Nuits St Georges.</p><p>In 2006, VeroDalla had a revelation that art had to be more than her passion: it had to be Her Life. She worked in her private studio to find a way to reflect her experiences.</p><p>In 2007, VeroDalla started to show her work first in Burgundy, then in galleries, exhibits, and French national art shows.</p><p>In 2009 her career took off quickly as her pieces made their way into private collections, in twenty different countries, through exhibitions in Monaco, Lyon, Paris, Venice, Verona, and many more.</p><p>In 2010, selected by a major company for an exhibition in New York, she found herself emotionally drawn to this city and she decided to make it her new home in 2011. One of her first sales in NYC was auctioned by Christie\'s during an art conference organized by the private bank Meeschaert.</p><p>Since her arrival in the New York art world, she has stayed focused on her creations-- she has exhibited more than 15 times, including the creation of a symbol for the fight against cancer.</p>';
// about.cover_photo = 'images/about.jpg';
// about.order = 4;
// about.style = "background: url('images/about.jpg') no-repeat top center; background-size:cover; width:200px; height:200px;"

// galleries.push(about);

// exhibitions.name = 'Recent Exhibitions';
// exhibitions.sub_galleries = [ {name:"Me and Them&#8230;Deeper" , date:'May - June 2014' , location: 'The Broome Hotel, Soho, New York, NY',photos: [{path:'images/exhibit/1 Me and Them Deeper/dsc_5633.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5644.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5648.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5656.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5659.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5754.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5760.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5765.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5798.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5840.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5848.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5869.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5887.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5898.jpg'},{path:'images/exhibit/1 Me and Them Deeper/dsc_5904.jpg'}]},  
// {name:"Gallery 32 Fine Art" , date:'June 2013' , location: 'Chelsea, New York, NY',photos:[{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3200.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3208.jpg'}, {path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3210.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3222.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3225.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3226.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3228.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3277.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3286.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3377.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3379.jpg'},{path:'images/exhibit/2 Chelsea Ozaneaux Gallery/dsc_3399.jpg'}] }]

// exhibitions.cover_photo = 'images/exhibits.png';
// exhibitions.order = 5;
// galleries.push(exhibitions);

// press.name = 'Press';

// press.cover_photo = 'images/press.jpg';
// press.order = 6;

// galleries.push(press);



// for (var gallery in galleries ) {
// 	Galleries.insert(galleries[gallery]);
// }

// var photoDefault = function(path, obj) {
// 	this.name = typeof obj !== 'undefined' ? obj.name : null;
// 	this.materials= typeof obj !== 'undefined' ? obj.materials :  null;
// 	this.dimensions = typeof obj !== 'undefined' ? obj.dimensions : null;
// 	this.year = typeof obj !== 'undefined' ? obj.year : null;
//   this.path = path;
// 	this.thumbnail = typeof obj !== 'undefined' ? obj.thumbnail : null;
// 	this.style = typeof obj !== 'undefined' ? obj.style : null;
// };

// console.log('POPPIES world 33333!!');

// var photoList = ['images/about/Copie de VERO NOIRBLA.jpg','images/about/LivenLulu & personnage 6.jpg','images/about/P6050021.JPG','images/about/P6050093.JPG','images/about/P6050220.JPG','images/about/P6050342bis.jpg','images/livenlulu/3AR-42-US.2.jpg','images/livenlulu/3LLL-A20-US.2.jpg','images/livenlulu/3LLL-A23-US.2.jpg','images/livenlulu/3LLL-A26B-US.2.jpg','images/livenlulu/3LLL-A44S.2.jpg','images/livenlulu/3LLL-A50S.2.jpg','images/livenlulu/3LLL-A53S.2.jpg','images/livenlulu/3LLL-A60-US.2.jpg','images/livenlulu/3LLL-A61-US.2.jpg','images/livenlulu/3LLL-AR37-US.2.jpg','images/livenlulu/3LLL-AR37-US.jpg','images/livenlulu/3LLL-AR37B-US.jpg','images/livenlulu/3LLL-AR39-US.jpg','images/livenlulu/3LLL-AR53S.2.jpg','images/livenlulu/3LLL-AR53S.jpg','images/livenlulu/3LLL-AR55S.jpg','images/livenlulu/3LLL-AR60US.2.jpg','images/livenlulu/3LLL-AR61US.2.jpg','images/livenlulu/3LLL-AR62US.jpg','images/livenlulu/3LLL-AR64US.A.jpg','images/livenlulu/3LLL-AR69US.2.jpg','images/livenlulu/3LLL-AR69US.jpg','images/livenlulu/3LLL-AR70US.jpg','images/livenlulu/3LLL-AR71US.2.jpg','images/livenlulu/3LLL-CCD12.jpg','images/livenlulu/3LLL-CCD22S.2.jpg','images/livenlulu/3LLL-CCD24.2.jpg','images/livenlulu/3LLL-CPLE10-US.jpg','images/livenlulu/3LLL-CPLE11.2.jpg','images/livenlulu/3LLL-CPLE12-S.2.jpg','images/livenlulu/3LLL-CPLE12-S.jpg','images/livenlulu/3LLL-CPLE20-US.2.jpg','images/livenlulu/3LLL-CPLE8-US.2jpg','images/livenlulu/3LLL-EXT4-US.B.2.jpg','images/livenlulu/3LLL-EXT5-US.B.2.jpg','images/livenlulu/3LLL-EXT6-US.A.2.jpg','images/livenlulu/3LLL-EXT8-US.B.2.jpg','images/livenlulu/3LLL-V18-US.jpg','images/livenlulu/3LLL-V6B-US.jpg','images/livenlulu/3LLL-V8B-US.jpg','images/livenlulu/3LLLAR59US.2a.jpg','images/livenlulu/3LLLAR59US.B.jpg','images/livenlulu/3LLLAR80US.2.jpg','images/livenlulu/3LLLCCD28US.2.jpg','images/livenlulu/DSC09269.jpg','images/livenlulu/DSC09276.2.jpg','images/livenlulu/DSC09282.2.jpg','images/livenlulu/DSC09308.2.jpg','images/livenlulu/DSC09314.2.jpg','images/livenlulu/DSC09326.2.jpg','images/livenlulu/IMAG0673.2.jpg','images/livenlulu/LivenLulu-&-personnage-2.jpg','images/livenlulu/LivenLulu-&-personnage-3.jpg','images/livenlulu/LivenLulu-&-personnage-4B-3.jpg','images/livenlulu/LivenLulu-&-personnage-5.jpg','images/livenlulu/LivenLulu-16.jpg','images/livenlulu/LivenLulu-18.jpg','images/livenlulu/LivenLulu-19.jpg','images/livenlulu/LivenLulu-20.jpg','images/livenlulu/LivenLulu-21.jpg','images/livenlulu/LivenLulu-22.jpg','images/livenlulu/LivenLulu-23.jpg','images/livenlulu/LivenLulu-24.jpg','images/livenlulu/LivenLulu-25.jpg','images/livenlulu/LivenLulu-27.jpg','images/livenlulu/LivenLulu-28.jpg','images/livenlulu/LivenLulu-8.jpg','images/livenlulu/Univers-Atelier-Liv-30C107.jpg','images/livenlulu/Univers-LivenLulu-1-2.jpg','images/livenlulu/Univers-LivenLulu-4.jpg','images/livenlulu/Univers-LivenLulu-5.jpg','images/livenlulu/Univers-LivenLulu-8.jpg','images/livenlulu/Univers-LivenLulu-9B.jpg','images/livenlulu/Univers-dortoir-LivenLulu.jpg']


// var pressDetails = [
// 	{
// 		path: 'images/press/Le bien public.jpg',
// 		articles: { 
// 			french: 'articles/Bien_Public/FR_2009_dec.jpg',
// 		}
// 	},	
// 	{
// 		path: 'images/press/cde.jpg',
// 		articles: { 
// 			french: 'articles/Caisse_d_Epargne/FR-Verodalla CEP-avril-2009.pdf',
// 			english: 'articles/Caisse_d_Epargne/ANG-Verodalla CEP-avril-2009-copy.pdf',
// 		}
// 	},	
// 	{
// 		path: 'images/press/aah.png',
// 		articles: { 
// 			english: 'articles/Action_against_Hunger-Charity_buzz/ANG-Collaboration-with-Action-Against-Hunger.pdf',
// 		}
// 	},	
// 	{
// 		path: 'images/press/sh.jpg',
// 		articles: { 
// 			english: 'articles/Showtime_House/ANG-The-Showtime-House-at-Cassa-Hotel.pdf',
// 		}
// 	},

// 	{
// 		path: 'images/press/charity-buzz.png',
// 		articles: {
// 			english: 'articles/Action_against_Hunger-Charity_buzz/ANG-charity-buzz.pdf'
// 		}
// 	},

	
		
// 	{
// 		path: 'images/press/Dijon Mag.jpg',
// 		articles: {
// 			french: 'articles/Dijon_Beaune_Mag/Fr-Bienvenue-a-Livenlululand-National-2012.pdf',
// 			english: 'articles/Dijon_Beaune_Mag/ANG-Bienvenue-a-Livenlululand-National-2012-copy.pdf'
  	 
//     }
// 	},

// 	{
// 		path: 'images/press/cover T&T.jpg',
// 		articles: {
// 			french: 'articles/Towns_Territories/FR-La-vie-habillee-en-robe-rouge-National-bis.pdf',
// 			english: 'articles/Towns_Territories/ANG-La-vie-habillee-en-robe-rouge-National-.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/shani_camillemaurice.jpg',
// 		articles: {
// 			english: 'articles/Camille_Maurice/ANG-camille-maurice.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/logo-jdp-bourgogne.jpg',
// 		articles: {
// 			french: 'articles/journal_du_palais/journal-du-palais.pdf',
// 			english: 'articles/journal_du_palais/ANGL-Journal-du-Palais.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/logo-VoixduNord.png',
// 		articles: {
// 			french: 'articles/La_Voix_du_Nord/FR-Ladies-Circle-oct-07.pdf',
// 			english: 'articles/La_Voix_du_Nord/ANG-Ladies-Circle-oct-07-.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/eqarts.jpg',
// 		articles: {
// 			french: 'articles/Equarts/FR-Verodalla-Equarts.pdf',
// 			english: 'articles/Equarts/ANG-Verodalla-Equarts.pdf'
// 		}
// 	},
// 	{
// 		path: 'images/press/France Bleue Borurgogne.jpg',
// 	},	
// 	{
// 		path: 'images/press/French Morning.png',
// 		articles: {
// 			french: 'articles/French_Morning/FR-Expo-french-morning-june12.pdf',
// 			english: 'articles/French_Morning/ANG-Expo-french-morning-june12-copy.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/High End.jpg',
// 		articles: {
// 			english: 'articles/High_end_Weekly/ANG-Meet-Veronique-Dalla-FaveraVyna.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/Land of .jpg',
// 		articles: {
// 			french: 'articles/Land_of_compassion/FR-VeroDallaterre-de-compassionjuin-12.pdf',
// 			english: 'articles/Land_of_compassion/ANG-Land-of-compassion.pdf'
// 		}
// 	},	
// 	{
// 		path: 'images/press/Le Point NY.jpg',
// 		articles: {
// 			french: 'articles/Le_point/FR-le-point1-1.pdf'

// 		}
// 	},	

// 	{
// 		path: 'images/press/NBC4NewYork.jpg',
// 		articles: {
// 			french: '',
// 			english: ''
// 		}
// 	},	
// 	{
// 		path: 'images/press/TV Net Bourgogne.jpg',
// 		articles: {
// 			french: 'http://www.dailymotion.com/video/xi286o_verodalla-artiste_tv',
// 			english: 'articles/TV_Net_Bourgogne/ANG-interview-TVnet-bourgogne.pdf'
   
// 		}
// 	},	
// 	{
// 		path: 'images/press/Ubifrance.jpg',
// 		articles: {
// 			french: 'articles/UbiFrance/FR-Success-Story-Ubifrance-Internationale-2011.pdf',
// 			english: 'articles/UbiFrance/ANG-Success-Story-Ubifrance-Internationale-2011.pdf'
// 		}
// 	},
// 	{	
// 		path: 'images/press/le-journal-de-saone-et-loire.jpg',
// 		articles: {
// 			french: 'articles/Journal_de_Saone_et_Loire/FR-2008-juin-copy.jpg',
// 			english: 'articles/Journal_de_Saone_et_Loire/ANG-Saone-et-Loire.pdf'
// 		}
// 	},
// 	{
// 		path: 'images/press/logo-Observateur-Avesnois.gif',
// 		articles: {
// 			french: '',
// 			english: ''
// 		}
// 	}
// ]


// for (var detail in pressDetails) {
//  	Galleries.update({name: 'Press'}, {$push:{photos: pressDetails[detail]}});
// }

// var paintingsDetails = [{
// name: "Coquelicots au Vent Blanc",
// materials: "Mineral paste, metal, acrylic and mixed media",
// dimensions: '63"x31"x35"',
// year: '2009',
// path:'images/poppies/Coquelicot au vent blanc.jpg',
// thumbnail: 'images/poppies/thumbnails/coquelicot_au_vent_blanc.jpg',
// style: "background: url('images/poppies/thumbnails/coquelicot_au_vent_blanc.jpg') no-repeat center 0%;width: 175px;height: 175px; background-size: 150%;"
// },

// {
// name: "Coquelicots au Vent Rouge",
// materials: 'Mineral paste, metal, acrylic and mixed media',
// dimensions:'63"x31"x35"',
// year:'2009',
// path:'images/poppies/Coquelicot au vent rouge.JPG',
// thumbnail: 'images/poppies/thumbnails/coquelicot_au_vent_rouge.jpg'
// },

// {
// name: "Coquelicots au Vent Rouge",
// materials: 'Mineral paste, metal, acrylic and mixed media',
// dimensions:'63"x31"x35"',
// year:'2009',
// path:'images/poppies/Coquelicots au vent.jpg',
// thumbnail: 'images/poppies/thumbnails/coquelicots_au_vent.jpg'
// },

// {
// name: "Coquelicots en Blé",
// materials: 'Mineral paste and acrylic on canvas',
// dimensions:'15"x15"',
// year: '2008',
// path:'images/poppies/Coquelicots en ble.jpg',
// thumbnail: 'images/poppies/thumbnails/coquelicots_en_ble.jpg'
// },

// {
// name: 'Details de Coquelicots au Vent Blanc',
// materials: 'Mineral paste, metal, acrylic and mixed media',
// path:'images/poppies/detail coquelicot au vent blanc.JPG',
// thumbnail: 'images/poppies/thumbnails/detail_coquelicot_au_vent_blanc.jpg'
// },

// {
// name: 'Details de Coquelicots au Vent Rouge',
// materials: 'Mineral paste, metal, acrylic and mixed media',
// path:'images/poppies/Detail coquelicot au vent rouge.JPG',
// thumbnail: 'images/poppies/thumbnails/detail_coquelicot_au_vent_rouge.jpg'
// },

// {
// name: 'Details de Coquelicots au Vent Argent',
// materials: 'Mineral paste, metal, acrylic and mixed media',
// path:'images/poppies/Detail coquelicots au vent argent.jpg',
// thumbnail: 'images/poppies/thumbnails/detail_coquelicots_au_vent_argent.jpg'
// },

// {
// name: 'Customised Poppies Triptych',
// dimensions:'Three paintings 98"x39"',
// materials: 'Mineral paste, wood and acrylic',
// year:'2009',
// path:'images/poppies/Installation Poppies.jpg',
// thumbnail: 'images/poppies/thumbnails/installation_poppies.jpg',
// style: 'background: url("images/poppies/thumbnails/installation_poppies.jpg") no-repeat 69% center;width: 175px;height: 175px;background-size: 100%;'
// },

// {
// name: "Nuage de Coquelicots",
// materials: 'Mineral paste and acrylic on canvas',
// dimensions:'39"x70"',
// year: '2008',
// path:'images/poppies/Nuage de Coquelicots.JPG',
// thumbnail: 'images/poppies/thumbnails/nuage_de_coquelicots.jpg'
// },

// {
// name: "Nuance de Coquelicots",
// materials: 'Mineral paste and acrylic on canvas',
// dimensions:'39"x39"',
// year: '2008',
// path:'images/poppies/Nuance de Coquelicots.JPG',
// thumbnail: 'images/poppies/thumbnails/nuance_de_coquelicots.jpg'
// },

// {
// name: "Vent en Coquelicots",
// materials: 'Mineral paste and acrylic on canvas',
// dimensions:'Triptych 15"x15", 15"x11", 15"x15"',
// year: '2008',
// path:'images/poppies/Vent en Coquelicots.jpg',
// thumbnail: 'images/poppies/thumbnails/vent_en_coquelicots.jpg'
// },

// {
// name: "Inner Journey Nº14",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'54" x 64"',
// year: '2014',
// path:'images/inner_journey/IJ 14.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_14.jpg'
// },



// {
// name: "Inner Journey Nº12",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'49" x 64"',
// year: '2014',
// path:'images/inner_journey/IJ 12.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_12.jpg'
// },

// {
// name: "Inner Journey Nº11",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'45" x 52"',
// year: '2014',
// path:'images/inner_journey/IJ 11.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_11.jpg'
// },

// {
// name: "Inner Journey Nº10",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'42" x 47"',
// year: '2014',
// path:'images/inner_journey/IJ 10.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_10.jpg'
// },

// {
// name: "Inner Journey Nº9",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'Triptych 3 x 55" x 19"',
// year: '2012',
// path:'images/inner_journey/IJ 9.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_9.jpg'
// },

// {
// name: "Inner Journey Nº8",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'Diptych 2 x 39" x 27"',
// year:'2011 - sold',
// path:'images/inner_journey/IJ 8.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_8.jpg'
// },

// {
// name: "Inner Journey Nº7",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'15" x 15"',
// year:'2011',
// path:'images/inner_journey/IJ 7.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_7.jpg'
// },

// {
// name: "Inner Journey Nº6",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'15" x 15"',
// year:'2011',
// path:'images/inner_journey/IJ 6.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_6.jpg'
// },

// {
// name: "Inner Journey Nº5",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'15" x 15"',
// year:'2011 – Sold',
// path:'images/inner_journey/IJ 5.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_5.jpg'
// },


// {
// name: "Inner Journey Nº4",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'Triptych 3 x 39"x 12"',
// year:'2011',
// path:'images/inner_journey/IJ 4.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_4.jpg'
// },

// {
// name: "Inner Journey Nº3",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'39" x 19’',
// year:'2011 - sold',
// path:'images/inner_journey/IJ 3.JPG',
// thumbnail:'images/inner_journey/thumbnails/ij_3.jpg'
// },

// {
// name: "Inner Journey Nº2",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'15" x 47"',
// year:'2011 - sold',
// path:'images/inner_journey/IJ 2.jpg',
// thumbnail:'images/inner_journey/thumbnails/ij_2.jpg'
// },

// {
// name: "Inner Journey Nº1",
// materials: 'Mineral paste, wood and acrylic',
// dimensions:'39" x 39"',
// year:'2010 - sold',
// path:'images/inner_journey/IJ 1.JPG',
// thumbnail:'images/inner_journey/thumbnails/ij_1.jpg'
// }];


// for (var path in photoList) {
// 		var name = photoList[path].match(/images\/(\w+)/)[1]
	
		

// 		var photo =  new photoDefault(photoList[path]);
	
// 		Galleries.update({cover_photo: {$regex: name}}, {$push:{photos: photo}});
			



	
// }

// for (var detail in paintingsDetails) {
// 	var name = paintingsDetails[detail].path.match(/images\/(\w+)/)[1];
// 	var photo =  new photoDefault(paintingsDetails[detail].path, paintingsDetails[detail]);
// 	Galleries.update({cover_photo: {$regex: name}}, {$push:{photos: photo}});
// }





// Galleries.update({name:'Poppies'}, {$set:{style: 'background:url("images/poppies/Detail coquelicot au vent rouge.JPG") no-repeat center center; width:200px; height:200px; background-size: 132% 132%;'}});

// Galleries.update({name:'Press'}, {$set:{style: 'background: url(images/press.jpg) no-repeat center 0%; width:200px; height:200px; background-size: cover;'}})


// Galleries.update({name:'LivenLuLu'}, {$set:{'photos.10.style':'background: url("images/livenlulu/3LLL-AR37-US.jpg") no-repeat center 9%; background-size: 120%;' }})

// Galleries.update({name:'LivenLuLu'}, {$set:{'photos.12.style':'background: url("images/livenlulu/3LLL-AR39-US.jpg") no-repeat center 0%;' }})






