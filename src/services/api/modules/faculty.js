import Api from '../index'

class Faculty extends Api {
  faculty(data) {
    return this.execute('post', 'api/change_password', data)
  }
}

export default Faculty