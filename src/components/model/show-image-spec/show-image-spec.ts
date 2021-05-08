import { VueConstructor } from 'vue'

export interface ShowImageSpecParam {
  framework: string
  animal: string
}

export interface ShowImageSpec {
  isSatisfiedBy (param: ShowImageSpecParam): boolean

  readonly shown: VueConstructor
}

export function applyWithDefault (defaultSpec: ShowImageSpec, specs: ShowImageSpec[]): (param: ShowImageSpecParam) => ShowImageSpec {
  return (param: ShowImageSpecParam) => {
    const matched = specs.find(spec => spec.isSatisfiedBy(param))

    return matched || defaultSpec
  }
}
