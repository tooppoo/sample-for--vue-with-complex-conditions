
<template>
  <ul>
    <li
      v-for="(value, index) in values"
      :key="index"
    >
      {{ value }}
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="isChecked(value)"
        @input="handle"
      >
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Emit, Prop } from 'vue-property-decorator'

@Component
export default class SwitchRadio extends Vue {
  @Prop({ default: '' })
  name!: string

  @Prop({ required: true })
  values!: string[]

  @Prop({ required: true })
  selected!: string

  @Emit('input')
  handle (event: any) {
    return event.target.value
  }

  isChecked (value: string): boolean {
    return this.selected === value
  }
}
</script>
