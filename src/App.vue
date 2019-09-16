<template>
  <div id="app">
    <div>
      <h2>好きなjsのフレームワークは？</h2>
      <SwitchRadio
        name="framework"
        :values="fwValues"
        :selected="currentFw"
        v-model="currentFw"
      />
      <component :is="frameworkView" />
    </div>
    <div>
      <h2>好きな動物は？</h2>
      <SwitchRadio
        name="animal"
        :values="animalValues"
        :selected="currentAnimal"
        v-model="currentAnimal"
      />
      <component :is="animalView" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SwitchRadio from './components/SwitchRadio.vue'
import { applyWithDefault } from './components/model/show-image-spec/show-image-spec'
import ShowKoujichuSpec from './components/model/show-image-spec/show-koujichu-spec'
import ShowVueSpec from './components/model/show-image-spec/framework/show-vue-spec'
import ShowCatSpec from './components/model/show-image-spec/animal/show-cat-spec'
import ShowReactSpec from './components/model/show-image-spec/framework/show-react-spec'
import ShowAngularSpec from './components/model/show-image-spec/framework/show-angular-spec'
import ShowTurtleSpec from './components/model/show-image-spec/animal/show-turtle-spec'

@Component({
  components: {
    SwitchRadio
  }
})
export default class App extends Vue {
  readonly fwValues = [
    'None',
    'Vue',
    'React',
    'Angular'
  ]
  readonly animalValues = [
    'None',
    'Cat',
    'Dog',
    'Turtle'
  ]

  private currentFw: string = this.fwValues[0]
  private currentAnimal: string = this.animalValues[0]

  get frameworkView () {
    const applySpec = applyWithDefault(new ShowKoujichuSpec(), [
      new ShowVueSpec(),
      new ShowReactSpec(),
      new ShowAngularSpec()
    ])

    const appliedSpec = applySpec({
      framework: this.currentFw,
      animal: this.currentAnimal
    })

    return appliedSpec.shown
  }

  get animalView () {
    const applySpec = applyWithDefault(new ShowKoujichuSpec(), [
      new ShowCatSpec(),
      new ShowTurtleSpec()
    ])

    const appliedSpec = applySpec({
      framework: this.currentFw,
      animal: this.currentAnimal
    })

    return appliedSpec.shown
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 300px;
}
</style>
