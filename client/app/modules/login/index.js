// expose only the main route component
import { Meteor } from 'meteor/meteor'
import App from './components/App.jsx'

Meteor.subscribe('users')

export default App