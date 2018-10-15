import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// @see https://github.com/airbnb/enzyme/issues/1265#issuecomment-388544819
configure({ adapter: new Adapter() })
