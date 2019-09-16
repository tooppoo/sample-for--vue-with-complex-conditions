import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import Angular from '../../../frame-work/Angular.vue'

export default class ShowAngularSpec implements ShowImageSpec {
  isSatisfiedBy (_param: ShowImageSpecParam): boolean {
    return _param.framework === 'Angular'
  }

  readonly shown = Angular
}
