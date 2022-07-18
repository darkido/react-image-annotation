import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

let context = require.context('./', true, /\.spec\.js$/)
context.keys().forEach(context)
