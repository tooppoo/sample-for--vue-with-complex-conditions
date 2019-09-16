import { ShowImageSpec, ShowImageSpecParam } from './show-image-spec'
import Koujichu from '../../Koujichu.vue'

export default class ShowKoujichuSpec implements ShowImageSpec {
  isSatisfiedBy (_param: ShowImageSpecParam): boolean {
    return true
  }

  readonly shown = Koujichu
}
