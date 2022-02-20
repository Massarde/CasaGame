import { proxy } from 'valtio'

const store = proxy({ isClicked: false })

export default store
