import { VueConstructor } from 'vue'

export interface ShowImageSpec {
  isSatisfiedBy (param: ShowImageSpecParam): boolean

  readonly shown: VueConstructor
}

export interface ShowImageSpecParam {
  framework: string
  animal: string
}

export function applyWithDefault (defaultSpec: ShowImageSpec, specs: ShowImageSpec[]): (param: ShowImageSpecParam) => ShowImageSpec {
  return (param: ShowImageSpecParam) => {
    const matched = specs.find(spec => spec.isSatisfiedBy(param))

    return matched || defaultSpec
  }
}
