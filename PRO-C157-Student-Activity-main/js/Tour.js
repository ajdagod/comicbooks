AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    
    this.createCards();
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "flashpoint",
        title: "Flashpoint",
        url: "./assets/thumbnails/comic2.png",
      },
      {
        id: "genz",
        title: "Generation 0",
        url: "./assets/thumbnails/comic1.jpg",
      },

      {
        id: "graphicnovels",
        title: "DC essential 2021 graphic novels",
        url: "./assets/thumbnails/comic3.jpg",
      },
      {
        id: "new52",
        title: "New 52",
        url: "./assets/thumbnails/comic4.jpg",
      },
    ];
  
  
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id);
      // Thumbnail Element
      const thumbnail=this.createThumbnail(item);
      borderEl.appendChild(thumbnail);
      // Title Text Element
      const titleEl=this.createTitleEl(position,item)
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder:function(position,id){
    const entityEl=document.createElement('a-entity')
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10,
    });
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{
      color:"#00bcd4",
      opacity:0.4,
    });
    return entityEl;
  },

  createThumbnail:function(item){
    const entityEl=document.createElement('a-entity')
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9,
    });
    entityEl.setAttribute("material",{src:item.url});
    return entityEl;
  },
  
  createTitleEl:function(position,item){
    const entityEl=document.createElement('a-entity');
    entityEl.setAttribute("text", {
      font:"exo2bold",
      align:"center",
      width:60,
      color:"#e65100",
      value:item.title
    });
    const elPosition=position;
    elPosition.y=-20;
    entityEl.setAttribute("position",elPosition);
    entityEl.setAttribute("visible",true)
    return entityEl;
  }
});
