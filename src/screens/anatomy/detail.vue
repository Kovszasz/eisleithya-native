<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="() => this.props.navigation.goBack()">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{ order.id}}</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content>
      <nb-list-item button  :onPress="() => { order.is_downloaded = !order.is_downloaded; update()}" >
        <nb-checkbox color="red" :checked="order.is_downloaded" :onPress="() => { order.is_downloaded = !order.is_downloaded; update()}" >
        </nb-checkbox>
        <nb-body>
          <nb-text>Downloaded</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button  :onPress="() => { order.is_proccessed = !order.is_proccessed}" >
        <nb-checkbox color="red" :checked="order.is_proccessed" :onPress="() => { order.is_proccessed = !order.is_proccessed}" >
        </nb-checkbox>
        <nb-body>
          <nb-text>Segmented</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button  :onPress="() => { order.is_being_printed = !order.is_being_printed}" >
        <nb-checkbox color="red" :checked="order.is_being_printed" :onPress="() => { order.is_being_printed = !order.is_being_printed}" >
        </nb-checkbox>
        <nb-body>
          <nb-text>Printing in process</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button  :onPress="() => { order.is_printed = !order.is_printed}" >
        <nb-checkbox color="red" :checked="order.is_printed" :onPress="() => { order.is_printed = !order.is_printed}" >
        </nb-checkbox>
        <nb-body>
          <nb-text>Order is printed</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button  :onPress="() => { order.is_sent = !order.is_sent}" >
        <nb-checkbox color="red" :checked="order.is_sent" :onPress="() => { order.is_sent = !order.is_sent}" >
        </nb-checkbox>
        <nb-body>
          <nb-text>Order is posted</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-text>{{ order.date }}</nb-text>
    </nb-content>
  </nb-container>
</template>

<script>
import axios from 'axios'
export default {
  props:{
      navigation: {
        type: Object
      }
  },
  data() {
    return {
      order:{},
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  },
  beforeMount(){
      this.order = this.navigation.state.params.data

  },
  methods: {
    update(){
      axios
        .put(`http://eithleithya-api.herokuapp.com/apiadmin/api/order/${this.order.id}/`,this.order)
     }
    }
};
</script>
