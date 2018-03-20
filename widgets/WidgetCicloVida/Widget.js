define(['dojo/_base/declare', 'jimu/BaseWidget'],


  function(declare, BaseWidget) {
    var contadorAperturas = 0;
    var contadorCierres = 0;
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-ciclovida',


      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');
        alert("Estado PostCreate")
      },

      startup: function() {
        this.inherited(arguments);
        console.log('startup');
        alert("Estado Startup")
      },

      onOpen: function() {
        console.log('onOpen');
        contadorAperturas = contadorAperturas + 1;
        alert("Estado On Open\n" + "Numero de aperturas: " + contadorAperturas);
      },

      onClose: function() {
        console.log('onClose');
        contadorCierres = contadorCierres + 1;
        alert("Estado On close\n" + "Numero de cierres: " + contadorCierres);
      },

      onMinimize: function() {
        console.log('onMinimize');
        alert("On Minimize");
      },

      onMaximize: function() {
        console.log('onMaximize');
        alert("On Maximize");
      },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      resize: function() {
        console.log('resize');
        alert("Resize");
      }

      //methods to communication between widgets:

    });
  });