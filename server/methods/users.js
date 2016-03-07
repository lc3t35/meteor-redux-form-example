import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import {Users} from '/lib/collections'

Meteor.methods({
  addUser(name) {
    check(name, String)
    const id = Users.insert({name: name})
    return {
      id,
      name
    }
  },
  removeUser(id) {
    check(id, [String])
    Users.remove({_id: id})
    return {
      success: true
    }
  }
})
