import Constants from "../helper/constants";

const Design = {
  save: (design) => {
    return new Promise((resolve, reject) => {
      Constants.db.save(
        design,
        Constants.Collections.DESIGN,
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  get: () => {
    return new Promise((resolve, reject) => {
      Constants.db.get(Constants.Collections.DESIGN, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};
export default Design;