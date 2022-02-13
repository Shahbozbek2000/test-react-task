import Api from '../index'

class ChangePhone extends Api {
  phone(data) {
    return this.execute('post', 'api/change_phone', data)
  }
}

export default ChangePhone