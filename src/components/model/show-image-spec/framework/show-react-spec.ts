import { ShowImageSpec, ShowImageSpecParam } from '../show-image-spec'
import React from '../../../frame-work/React.vue'

export default class ShowReactSpec implements ShowImageSpec {
  isSatisfiedBy (_param: ShowImageSpecParam): boolean {
    return _param.framework === 'React'
  }

  readonly shown = React
}
