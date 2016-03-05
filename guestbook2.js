console.log("this is both side")

if (Meteor.isClient) {
  console.log("this is client side");
  Template.message.helpers({
    test:"test"
  })
  Template.body.helpers({
    testArray: _.range(0,10),
    Msgs: [
      {n:1,text:"hi, meteor!"},
      {n:2,text:"hi Jean!"}, 
      {n:3,text:"hi pump!"},
    ]
  })
}

if (Meteor.isServer) {
  console.log("this is server side")
}