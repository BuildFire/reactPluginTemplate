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
  insert: (design) => {
    return new Promise((resolve, reject) => {
      Constants.db.insert(
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
  search: (options) => {
    return new Promise((resolve, reject) => {
      Constants.db.search(
        options,
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
  update: (designId, designObj) => {
    return new Promise((resolve, reject) => {
      Constants.db.update(
        designId,
        designObj,
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
};
export default Design;
