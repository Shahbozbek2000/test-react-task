import Api from '../index'

class Auth extends Api {
  register(data) {
    return this.execute('post', 'api/signin', data)
  }
  login(data) {
    localStorage.setItem('userToken', JSON.stringify(data))
    return this.execute('post', 'api/login', data)
  }
  
}

export default Auth