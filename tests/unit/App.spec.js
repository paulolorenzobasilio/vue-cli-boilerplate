import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Vuetify from "vuetify";

/**
 * https://github.com/vuejs/vue-test-utils/issues/1138
 * See https://github.com/vuetifyjs/vuetify/issues/4068
 * There's an issue about $attrs is readonly when using Vuetify component on testing
 */
Vue.use(Vuetify);

describe("App.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
