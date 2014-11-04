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
// poppies.cover_photo = 'images/poppies.jpg';
// poppies.order = 3;

// galleries.push(poppies);

// about.name = 'About';
// about.desc = '<p>VeroDalla, born in France in 1970, currently lives and creates in New York City.</p><p>She began her professional career in gastronomy, first as manager then as owner of a Michelin-starred establishment in Nuits St Georges.</p><p>In 2006, VeroDalla had a revelation that art had to be more than her passion: it had to be Her Life. She worked in her private studio to find a way to reflect her experiences.</p><p>In 2007, VeroDalla started to show her work first in Burgundy, then in galleries, exhibits, and French national art shows.</p><p>In 2009 her career took off quickly as her pieces made their way into private collections, in twenty different countries, through exhibitions in Monaco, Lyon, Paris, Venice, Verona, and many more.</p><p>In 2010, selected by a major company for an exhibition in New York, she found herself emotionally drawn to this city and she decided to make it her new home in 2011. One of her first sales in NYC was auctioned by Christie\'s during an art conference organized by the private bank Meeschaert.</p><p>Since her arrival in the New York art world, she has stayed focused on her creations-- she has exhibited more than 15 times, including the creation of a symbol for the fight against cancer.</p>';
// about.cover_photo = 'images/about.jpg';
// about.order = 4;

// galleries.push(about);

// exhibitions.name = 'Recent Exhibitions';
// exhibitions.desc = [ {name:"Me and Them&#8230;Deeper" , date:'May - June 2014' , location: 'The Broome Hotel, Soho, New York, NY'},  {name:"Gallery 32 Fine Art" , date:'June 2013' , location: 'Chelsea, New York, NY'}]

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


// var photoList = ['images/about/Copie de VERO NOIRBLA.jpg','images/about/LivenLulu & personnage 6.jpg','images/about/P6050021.JPG','images/about/P6050093.JPG','images/about/P6050220.JPG','images/about/P6050342bis.jpg','images/exhibit/1 Me and Them Deeper/DSC_5633.JPG','images/exhibit/1 Me and Them Deeper/DSC_5644.JPG','images/exhibit/1 Me and Them Deeper/DSC_5648.JPG','images/exhibit/1 Me and Them Deeper/DSC_5656.JPG','images/exhibit/1 Me and Them Deeper/DSC_5659.JPG','images/exhibit/1 Me and Them Deeper/DSC_5754.JPG','images/exhibit/1 Me and Them Deeper/DSC_5760.JPG','images/exhibit/1 Me and Them Deeper/DSC_5765.JPG','images/exhibit/1 Me and Them Deeper/DSC_5798.JPG','images/exhibit/1 Me and Them Deeper/DSC_5840.JPG','images/exhibit/1 Me and Them Deeper/DSC_5848.JPG','images/exhibit/1 Me and Them Deeper/DSC_5869.JPG','images/exhibit/1 Me and Them Deeper/DSC_5887.JPG','images/exhibit/1 Me and Them Deeper/DSC_5898.JPG','images/exhibit/1 Me and Them Deeper/DSC_5904.JPG','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3200.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3208.jpg', 'images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3210.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3222.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3225.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3226.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3228.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3251.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3277.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3286.jpg','images/exhibit/2 Chelsea Ozaneaux Gallery/DSC_3303.jpg','images/inner_journey/IJ 1.JPG','images/inner_journey/IJ 10.jpg','images/inner_journey/IJ 11.jpg','images/inner_journey/IJ 12.jpg','images/inner_journey/IJ 14.jpg','images/inner_journey/IJ 2.jpg','images/inner_journey/IJ 3.JPG','images/inner_journey/IJ 4.jpg','images/inner_journey/IJ 5.jpg','images/inner_journey/IJ 6.jpg','images/inner_journey/IJ 7.jpg','images/inner_journey/IJ 8.jpg','images/inner_journey/IJ 9.jpg','images/livenlulu/3AR-42-US.2.jpg','images/livenlulu/3LLL-A20-US.2.jpg','images/livenlulu/3LLL-A23-US.2.jpg','images/livenlulu/3LLL-A26B-US.2.jpg','images/livenlulu/3LLL-A44S.2.jpg','images/livenlulu/3LLL-A50S.2.jpg','images/livenlulu/3LLL-A53S.2.jpg','images/livenlulu/3LLL-A60-US.2.jpg','images/livenlulu/3LLL-A61-US.2.jpg','images/livenlulu/3LLL-AR37-US.2.jpg','images/livenlulu/3LLL-AR37-US.jpg','images/livenlulu/3LLL-AR37B-US.jpg','images/livenlulu/3LLL-AR39-US.jpg','images/livenlulu/3LLL-AR53S.2.jpg','images/livenlulu/3LLL-AR53S.jpg','images/livenlulu/3LLL-AR55S.jpg','images/livenlulu/3LLL-AR60US.2.jpg','images/livenlulu/3LLL-AR61US.2.jpg','images/livenlulu/3LLL-AR62US.jpg','images/livenlulu/3LLL-AR64US.A.jpg','images/livenlulu/3LLL-AR69US.2.jpg','images/livenlulu/3LLL-AR69US.jpg','images/livenlulu/3LLL-AR70US.jpg','images/livenlulu/3LLL-AR71US.2.jpg','images/livenlulu/3LLL-CCD12.jpg','images/livenlulu/3LLL-CCD22S.2.jpg','images/livenlulu/3LLL-CCD24.2.jpg','images/livenlulu/3LLL-CPLE10-US.jpg','images/livenlulu/3LLL-CPLE11.2.jpg','images/livenlulu/3LLL-CPLE12-S.2.jpg','images/livenlulu/3LLL-CPLE12-S.jpg','images/livenlulu/3LLL-CPLE20-US.2.jpg','images/livenlulu/3LLL-CPLE8-US.2jpg','images/livenlulu/3LLL-EXT4-US.B.2.jpg','images/livenlulu/3LLL-EXT5-US.B.2.jpg','images/livenlulu/3LLL-EXT6-US.A.2.jpg','images/livenlulu/3LLL-EXT8-US.B.2.jpg','images/livenlulu/3LLL-V18-US.jpg','images/livenlulu/3LLL-V6B-US.jpg','images/livenlulu/3LLL-V8B-US.jpg','images/livenlulu/3LLLAR59US.2a.jpg','images/livenlulu/3LLLAR59US.B.jpg','images/livenlulu/3LLLAR80US.2.jpg','images/livenlulu/3LLLCCD28US.2.jpg','images/livenlulu/DSC09269.jpg','images/livenlulu/DSC09276.2.jpg','images/livenlulu/DSC09282.2.jpg','images/livenlulu/DSC09308.2.jpg','images/livenlulu/DSC09314.2.jpg','images/livenlulu/DSC09326.2.jpg','images/livenlulu/IMAG0673.2.jpg','images/livenlulu/LivenLulu-&-personnage-2.jpg','images/livenlulu/LivenLulu-&-personnage-3.jpg','images/livenlulu/LivenLulu-&-personnage-4B-3.jpg','images/livenlulu/LivenLulu-&-personnage-5.jpg','images/livenlulu/LivenLulu-16.jpg','images/livenlulu/LivenLulu-18.jpg','images/livenlulu/LivenLulu-19.jpg','images/livenlulu/LivenLulu-20.jpg','images/livenlulu/LivenLulu-21.jpg','images/livenlulu/LivenLulu-22.jpg','images/livenlulu/LivenLulu-23.jpg','images/livenlulu/LivenLulu-24.b.jpg','images/livenlulu/LivenLulu-24.jpg','images/livenlulu/LivenLulu-25.jpg','images/livenlulu/LivenLulu-27.jpg','images/livenlulu/LivenLulu-28.jpg','images/livenlulu/LivenLulu-8.jpg','images/livenlulu/Univers-Atelier-Liv-30C107.jpg','images/livenlulu/Univers-LivenLulu-1-2.jpg','images/livenlulu/Univers-LivenLulu-4.jpg','images/livenlulu/Univers-LivenLulu-5.jpg','images/livenlulu/Univers-LivenLulu-8.jpg','images/livenlulu/Univers-LivenLulu-9B.jpg','images/livenlulu/Univers-dortoir-LivenLulu.jpg','images/poppies/Coquelicot au vent blanc.jpg','images/poppies/Coquelicot au vent rouge.JPG','images/poppies/Coquelicots au vent.jpg','images/poppies/Coquelicots en blé.jpg','images/poppies/Detail coquelicot au vent rouge.JPG','images/poppies/Detail coquelicots au vent argent.jpg','images/poppies/Installation Poppies.jpg','images/poppies/Nuage de Coquelicots.JPG','images/poppies/Nuance de Coquelicots.JPG','images/poppies/Vent en Coquelicots.jpg','images/poppies/detail coquelicot au vent blanc.JPG','images/press/Dijon Mag.jpg','images/press/France Bleue Borurgogne.jpg','images/press/French Morning.png','images/press/High End.jpg','images/press/Land of .jpg','images/press/Le Point NY.jpg','images/press/Le bien public.jpg','images/press/NBC4NewYork.jpg','images/press/TV Net Bourgogne.jpg','images/press/Ubifrance.jpg','images/press/cmaurice.jpg','images/press/le-journal-de-saone-et-loire.jpg','images/press/logo-Observateur-Avesnois.gif','images/press/logo-VoixduNord.png','images/press/logo-jdp-bourgogne.jpg','images/press/shani_camillemaurice.jpg'];

// for (var path in photoList) {
// 	var name = photoList[path].match(/images\/(\w+)/)[1]
// 	Galleries.update({cover_photo: {$regex: name}}, {$push:{images: photoList[path]}});
	
// }