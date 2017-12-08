const mongoose = require('mongoose');

const tripModel = require('../api/Trip/Trip.Model');

mongoose.connect('mongodb://localhost/vansandroses').then(() => {
  console.log("Connected to DB: " + 'mongodb://localhost/vansandroses');
});

const trip = [{
    title: "Madrid - Barakaldo",
    description: "Un emocionante viaje desde la meseta castellana hasta los montes vascos, para degustar su increible gastronomia y ver la catedral del futbol, San Manes",
    category: "Gastronomy",
    creator: "5a2a85706df34ea26b748eb3",
    duration: 5,
    location: "País Vasco",
    locationOfStart: {
      latitude: 40.391383,
      longitude:  -3.694921,
    },
    locationOfEnd: {
      latitude: 43.291609,
      longitude: -2.995475,
      description: String
    },
    options: {
      animals: true,
      kids: false
    },
    pic_path: "http://laanonima.s3-website-us-east-1.amazonaws.com/web/images/productos/b/0000001000/1770.jpg",
  }];

  tripModel.create(trip, (err, docs) => {
    if (err) {
      throw err;
    };
    docs.forEach((cel) => {
      console.log(cel.name);
      console.log(cel.id);
    });
    mongoose.connection.close();
  });
