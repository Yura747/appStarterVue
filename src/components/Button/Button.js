
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ButtonComponent extends Vue {
    @Prop() actionsName;
    @Prop() timer;
    @Prop() index;

    action() {
        // switch (this.actionsName) {
        //     case "RemoveTimer":
        //         console.log("RemoveTimer");
        //     break;
        //     case "Play":
        //         console.log("Play");
        //     break;
        //     case "Pause":
        //         console.log("Pause");
        //     break;
        // }
    }
}


