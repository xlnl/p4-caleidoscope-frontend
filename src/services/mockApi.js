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