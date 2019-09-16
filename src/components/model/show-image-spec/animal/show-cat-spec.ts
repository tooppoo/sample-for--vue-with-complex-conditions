import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import Cat from '../../../animal/Cat.vue'

export default class ShowCatSpec implements ShowImageSpec {
  isSatisfiedBy (param: ShowImageSpecParam): boolean {
    return param.framework === 'Vue' && param.animal === 'Cat'
  }

  readonly shown = Cat
}
