// var fs = require('fs');
// var walk = function(dir, done) {
//   var results = [];
//   fs.readdir(dir, function(err, list) {
//     if (err) return done(err);
//     var i = 0;
//     (function next() {
//       var file = list[i++];
//       if (!file) return done(null, results);
//       file = dir + '/' + file;
//       fs.stat(file, function(err, stat) {
//         if (stat && stat.isDirectory()) {
//           walk(file, function(err, res) {
//             results = results.concat(res);
//             // console.log(results)
//             next();
//           });
//         } else {
//           results.push(file);
//           next();
//         }
//       });
//     })();
//   });
// };

// walk('./', function(err, results) {
//   if (err) throw err;
//   var cleanUp = []
//   for (result in results) {
//   	cleanUp.push('\n' + results[result].split('/public').pop());
//   }

//   fs.writeFile('photoList.txt', cleanUp, function (err) {
//   if (err) throw err;
//   	console.log('It\'s saved!');
//   });
// });
