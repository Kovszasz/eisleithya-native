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
      <nb-list-item button :onPress="toggle('download')">
        <nb-checkbox color="red" :checked="order.is_downloaded" :onPress="toggle('download')">
        </nb-checkbox>
        <nb-body>
          <nb-text>Downloaded</nb-text>
        </nb-body>
      </nb-list-item>

      <nb-list-item button :onPress="toggle('segment')">
        <nb-checkbox
          color="green"
          :checked="order.is_proccessed"
          :onPress="toggle('segment')"
        >
        </nb-checkbox>
        <nb-body>
          <nb-text>Segmented</nb-text>
        </nb-body>
      </nb-list-item>

      <nb-list-item button :onPress="toggle('printing')">
        <nb-checkbox color="#000" :checked="order.is_being_printed" :onPress="toggle('printing')">
        </nb-checkbox>
        <nb-body>
          <nb-text>Under printing</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button :onPress="toggle('print')">
        <nb-checkbox color="#000" :checked="order.is_printed" :onPress="toggle('print')">
        </nb-checkbox>
        <nb-body>
          <nb-text>Is printed</nb-text>
        </nb-body>
      </nb-list-item>
      <nb-list-item button :onPress="toggle('sent')">
        <nb-checkbox color="#000" :checked="order.is_sent" :onPress="toggle('sent')">
        </nb-checkbox>
        <nb-body>
          <nb-text>Posted</nb-text>
        </nb-body>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>

<script>
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
    toggle(step) {
        if(step == 'download'){
            this.order.is_downloaded = !this.order.is_downloaded
        }else if(step == "segment"){
            this.order.is_proccessed = !this.order.is_proccessed
        }else if(step == "printing"){
            this.order.is_being_printed = !this.order.is_being_printed
        }else if(step == "print"){
            this.order.is_printed = !this.order.is_printed
        }else 
            this.order.is_sent = !this.order.is_sent
        }
    }
};
</script>
