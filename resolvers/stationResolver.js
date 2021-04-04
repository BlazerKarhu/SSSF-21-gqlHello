import Station from '../models/station.js';
import Connection from '../models/connection.js';
import rectangleBounds from '../helper/rectangleBounds.js';

export default {
  Query: {
    stations: async (
      parent,
      args,
      bounds,
      start,
      topRight,
      bottomLeft,
      req
    ) => {
      try {
        let start;
        if (start) start = +args.start;
        let limit = 10;
        if (limit) limit = +args.limit;
        let stations = [];
        if (args.topRight && args.bottomLeft) {
          const mapBounds = rectangleBounds(
            JSON.parse(topRight),
            JSON.parse(bottomLeft)
          );
          stations = await Station.find({
            Location: {
              $geoWithin: {
                $geometry: mapBounds,
              },
            },
          }).populate({
            path: 'Connections',
            populate: [
              {path: 'ConnectionType'},
              {path: 'CurrentTypeID'},
              {path: 'LevelID'},
            ],
          });
        } else {
          return Station.find()
            .skip(start)
            .limit(args.limit)
            .populate({
              path: 'Connections',
              populate: [
                {path: 'ConnectionType'},
                {path: 'CurrentTypeID'},
                {path: 'LevelID'},
              ],
            });
        }
      } catch (error) {
        console.error(error);
      }
    },
    station: (parent, args) => {
      return Station.findById(args.id).populate({
        path: 'Connections',
        populate: [
          {path: 'ConnectionType'},
          {path: 'CurrentTypeID'},
          {path: 'LevelID'},
        ],
      });
    },
  },
  Mutation: {
    addStation: async (parent, args) => {
      try {
        console.log('posting station', args.body);
        const connectioners = args.body.connections;
        const newConnections = await Promise.all(
          connectioners.map(async (conn) => {
            let newConnection = new Connection(args);
            const result = await newConnection(save);
            return result.save();
          })
        );
        console.log('nc', newConnections);

        const station = args.body.Station;
        station.Connections = newConnections;
        station.Location.type = 'Point';

        console.log('st', station);
        const newStation = new Station(station);
        console.log('ns', newStation);
        const rslt = await newStation.save();
      } catch (error) {
        console.error(error);
      }
      console.log('stationResolver, addStation', args);
      const newStation = new Station(args);
      return newStation.save();
    },
    deleteStation: (parent, args) => {
      return Station.findOneAndDelete(args.id);
    },
  },
};
