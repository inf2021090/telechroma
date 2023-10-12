import { ActorBehavior, PawnBehavior } from "../PrototypeBehavior";

const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green material
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red material

class TextureChangePawn extends PawnBehavior {
  setup() {
    this.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = material1;
      }
    });
    this.addEventListener("pointerTap", "changeMaterial");
  }

  isMaterial1 = !isMaterial1;

  changeMaterial() {
    if (isMaterial1) {
      this.material = material2;
    } else {
      this.material = this.material;
    }
    isMaterial1 = !isMaterial1;
  }

  teardown() {
    // Remove the event listener during teardown
    this.removeEventListener("pointerTap", "changeMaterial");
  }
}

export default {
  modules: [
    {
      name: "ColorChangeBehavior",
      pawnBehaviors: [TextureChangePawn],
    },
  ],
};
