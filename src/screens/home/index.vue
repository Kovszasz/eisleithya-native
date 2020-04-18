<template>
  <nb-container>
    <status-bar :barStyle="'light-content'"></status-bar>
    <image-background :source="launchScreenBg" class="imageContainer">
      <nb-content padder>
        <nb-form>
          <nb-item inlineLabel>
            <nb-label>Email</nb-label>
            <nb-input v-model="payload.email" />
          </nb-item>
          <nb-item inlineLabel last>
            <nb-label>Password</nb-label>
            <nb-input secureTextEntry v-model="payload.password" />
          </nb-item>
        </nb-form>
        <nb-button
          block
          :style="{ margin: 15, marginTop: 50 }"
          :onPress="login"
        >
          <nb-text>Sign In</nb-text>
        </nb-button>
      </nb-content>
    </image-background>
  </nb-container>
</template>

<script>
import { Dimensions, Platform } from "react-native";
import launchScreenBg from "../../../assets/launchscreen-bg.png";
import launchscreenLogo from "../../../assets/logo-kitchen-sink.png";
import axios from "axios";
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      launchScreenBg,
      launchscreenLogo,
      stylesObj: {
        logoContainerStyle: {
          marginTop: Dimensions.get("window").height / 8
        },
        logoStyle: {
          left: Platform.OS === "android" ? 40 : 50,
          top: Platform.OS === "android" ? 35 : 60
        },
        btnContainer: {
          backgroundColor: "#6faf98",
          alignSelf: "center"
        }
      },
      payload: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleLetGoBtnPress() {
      this.navigation.openDrawer();
    },
    async login() {
      await axios
        .post("http://eithleithya-api.herokuapp.com/api/token/", this.payload)
        .then(response => {
          console.log(response.data);
          // this.$store.state.accessToken = response.data.access;
          // this.$store.state.refreshToken = response.data.refresh;
          this.navigation.navigate("Anatomy");
        });
    }
  }
};
</script>

<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: blue;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 50;
  background-color: transparent;
}
.text-color-white {
  color: white;
}
.button-container {
  background-color: #6faf98;
  align-self: center;
}
</style>
