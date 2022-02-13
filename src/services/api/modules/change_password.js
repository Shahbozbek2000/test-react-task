import Api from '../index'

class ChangePassword extends Api {
  password(data) {
    return this.execute('post', 'api/change_password', data)
  }
}

export default ChangePassword