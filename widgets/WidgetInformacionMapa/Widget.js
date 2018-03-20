define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-informacionmapa',

      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function() {
        this.inherited(arguments);
        console.log('startup');

        this.infoTitle.innerHTML = "<p>Titulo</p>" + this.map.itemInfo.item.title;
        this.infoDesc.innerHTML = "<p>Descripcion</p>" + this.map.itemInfo.item.description;
        this.infoId.innerHTML = "<p>Id</p>" + this.map.itemInfo.item.id;
        this.infoAccess.innerHTML = "<p>Acceso</p>" + this.map.itemInfo.item.access;
        this.infoCulture.innerHTML = "<p>Cultura</p>" + this.map.itemInfo.item.culture;
        this.infoComent.innerHTML = "<p>Numero de comentarios</p>" + this.map.itemInfo.item.numComments;
        this.infoType.innerHTML = "<p>Tipo</p>" + this.map.itemInfo.item.type;
        this.infoExtent.innerHTML = "<p>Extent</p>";
        this.infoXMax.innerHTML = "<p>XMax</p>" + this.map.extent.xmax;
        this.infoXMin.innerHTML = "<p>XMin</p>" + this.map.extent.xmin;
        this.infoYMax.innerHTML = "<p>YMax</p>" + this.map.extent.ymax;
        this.infoYMin.innerHTML = "<p>YMin</p>" + this.map.extent.ymin;
        this.infoLayersT.innerHTML = "<p>Capas incluidas</p>";
        var longitud = this.map.itemInfo.itemData.operationalLayers.length;
        if (longitud != 0) {
          for (let index = 0; index < longitud; index++) {
            this.infoLayers.innerHTML += "Capa" + index + ": " + this.map.itemInfo.itemData.operationalLayers[index].title + "<br>";
          }
        } else {
          this.infoLayers.innerHTML = "<p>No hay capas</p>";

        }



      },

      onOpen: function() {
        console.log('onOpen');
        console.log(this.map);
      },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

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

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });