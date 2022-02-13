import Api from '../index'

class ChangeEmail extends Api {
  email(data) {
    return this.execute('post', 'api/change_email', data)
  }
}

export default ChangeEmail