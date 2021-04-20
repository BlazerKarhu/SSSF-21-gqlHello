import Station from '../models/station.js';
import Connection from '../models/connection.js';
import rectangleBounds from '../helper/rectangleBounds.js';

export default {
  Query: {
    stations: async (parent, args) => {
      try {
        let start;
        if (start) start = +args.start;
        let limit = 10;
        if (limit) limit = +args.limit;
        let stations = [];
        if (args.bounds) {
          const mapBounds = rectangleBounds(
            args.bounds._northEast,
            args.bounds._southWest
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
              {path: 'ConnectionTypeID'}, //weird problem with this line. should work as ConnectionTypeID but does not.
              {path: 'CurrentTypeID'},
              {path: 'LevelID'},
            ],
          });
        } else {
          return Station.find()
            .skip(args.start)
            .limit(args.limit)
            .populate({
              path: 'Connections',
              populate: [
                {path: 'ConnectionTypeID'}, //weird problem with this line. should work as ConnectionTypeID but does not.
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
        populate: {
          path: 'ConnectionTypeID CurrentTypeID LevelID',
        },
      });
    },
  },
  Mutation: {
    addStation: async (parent, args, {user}) => {
      try {
        if (!user) {
          throw new AuthenticationError('You are not authenticated');
        }
        const conns = await Promise.all(
          args.Connections.map(async (conn) => {
            let newConnection = new Connection(conn);
            const result = await newConnection.save();
            return result._id;
          })
        );

        let newStation = new Station({
          ...args,
          Connections: conns,
        });
        return newStation.save();
      } catch (error) {
        console.error(error);
      }
    },
    deleteStation: (parent, args, {user}) => {
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      //const stat = await Station.findById(args.id);
      //const delResult = await Promise.all(
      //  stat.Connections.map(async (conn)=>{
      //    return Connection.findByIdAndDelete(delResult)
      //  })
      //)
      return Station.findOneAndDelete(args.id);
    },
  },
};
