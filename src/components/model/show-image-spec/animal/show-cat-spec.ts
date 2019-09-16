import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import Cat from '../../../animal/Cat.vue'

export default class ShowCatSpec implements ShowImageSpec {
  isSatisfiedBy (param: ShowImageSpecParam): boolean {
    if (param.animal !== 'Cat') {
      return false
    }

    return param.framework === 'Vue' || param.framework === 'None'
  }

  readonly shown = Cat
}
