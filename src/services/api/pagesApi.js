import ChangePassword from './modules/change_password'
import Auth from '../api/modules/auth'
import Faculty from './modules/faculty'
import ChangePhone from './modules/change_phone'
import ChangeEmail from './modules/change_email'



const authApi = new Auth()
const facultyApi = new Faculty()
const passwordApi = new ChangePassword()
const phoneApi = new ChangePhone()
const emailApi = new ChangeEmail()

export {
  authApi,
  facultyApi,
  passwordApi,
  phoneApi,
  emailApi
}
