export const login = async ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'tester' && password === 'password') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };

  export const register = async ({ data }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.length) {
            resolve();
        } else {
            reject();
        }
      }, 3000);
    });
  };