export default class AuthenticationService {
 
    static isAuthenticated: boolean = false;
   
    static login(email: string, password: string): Promise<boolean> {
      const isAuthenticated = (email === 'admin' && password === 'motdepasse');
   
      return new Promise(resolve => {
        setTimeout(() => {
          this.isAuthenticated = isAuthenticated;
          resolve(isAuthenticated);
        }, 1000);
      });
    }
  }