import {Users} from '/lib/collections'
import {Meteor} from 'meteor/meteor'

Meteor.publish('users', () => {
  return Users.find({})
})
