import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import Turtle from '../../../animal/Turtle.vue'

export default class ShowTurtleSpec implements ShowImageSpec {
  isSatisfiedBy (param: ShowImageSpecParam): boolean {
    if (param.animal !== 'Turtle') {
      return false
    }

    return param.framework !== 'Vue'
  }

  readonly shown = Turtle
}
