Template.hammerDiv.rendered = function() {
  $('#hammerDiv').hammer();
};

Template.hammerDiv.events({
  'doubletap #hammerDiv': function() {
    alert("Double Click/Tap!");
  },
  'hold #hammerDiv': function() {
    alert("Hold!");
  },
});
