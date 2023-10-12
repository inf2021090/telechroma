import  { ActorBehavior } from "../PrototypeBehavior";

const colors [{}]

// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener('click', selectSwatch);
}

class AddColorActor extends ActorBehavior {
  setup() {
        // Function - Build Colors

        buildColors(colors) {
          for (let [i, color] of colors.entries()) {
            let swatch = document.createElement('div');
            swatch.classList.add('tray__swatch');
    
            if (color.texture)
            {
             swatch.style.backgroundImage = "url(" + color.texture + ")";   
            } else
            {
              swatch.style.background = "#" + color.color;
            }

            swatch.setAttribute('data-key', i);
            TRAY.append(swatch);
         }
     }
  }
      //this.addEventListener("pointerDown", "onPointerDown");
      //this.addEventListener("pointerUp", "onPointerUp");
      //this.addEventListener("pointerMove", "onPointerMove");
      //this.listen("focusChanged", "focusChanged");
      
  teardown() {}
}

export default {
  modules: [
    {
      name: "AddColor",
      actorBehaviors: [AddColorActor],
      pawnBehaviors: [AddColorPawn]
    }
  ],
};
