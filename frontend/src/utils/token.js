import Cookies from "js-cookie"

const token = `Bearer ${Cookies.get('token')}`

export default token