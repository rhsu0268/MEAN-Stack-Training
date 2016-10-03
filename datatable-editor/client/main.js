import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Meteor.subscribe('books');




/*
Template.dataTableEditor.onCreated(function dataTableEditorCreated() {
    // counter starts at 0
    //this.counter = new ReactiveVar(0);
    //$('#example').DataTable();

});

Template.dataTableEditor.rendered = function()
{

    //$('#example').DataTable();
    //$('#example');
    //console.log($('#example'));


}
*/



/*
Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
