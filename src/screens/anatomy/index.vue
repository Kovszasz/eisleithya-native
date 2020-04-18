<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>
   <nb-content padder>
      <nb-list>
        <nb-list-item
          v-for="order in pages"
          :key="order.id"
          button
          :onPress="() => this.props.navigation.navigate('OrderDetail',{ data: order })"
        >
          <nb-left>
            <nb-text>
              {{ order.id }} 
            </nb-text>
            <nb-text>
              {{ order.date }} 
            </nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward" class="body-icon-color" />
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
    <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>
<script>
import axios from "axios";
import { Platform } from "react-native";
import { Icon } from "native-base";
export default {
  data() {
    return {
      pages: [],
      airplaneMode: false
    };
  },
  mounted() {
    axios
      .get("http://eithleithya-api.herokuapp.com/apiadmin/api/order/")
      .then(result => {
        this.pages = result.data;
      });
  },
  methods:{
    toggleAirplaneMode() {
      this.airplaneMode = !this.airplaneMode;
    }
  }
};
</script>
