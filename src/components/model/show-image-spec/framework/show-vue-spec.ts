import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import VueComp from '../../../frame-work/Vue.vue'

export default class ShowVueSpec implements ShowImageSpec {
  isSatisfiedBy (_param: ShowImageSpecParam): boolean {
    return _param.framework === 'Vue'
  }

  readonly shown = VueComp
}
