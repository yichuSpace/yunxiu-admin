// import i18n from '@/i18n'
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('msg.login.passwordRule'))
    } else {
      callback()
    }
  }
}
