<h3 align="center">Vue CLI Boilerplate</h3>

---

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
Boilerplate code built on vue-cli 3.0, vuetify, jest, eslint, git hook script for pre-commit, post-merge.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites
- [node](https://nodejs.org/en/)

### Installing

```
git clone git@gitlab.com:sourcefit/vue-cli-veutify-boierplate.git
cd vue-cli-veutify-boierplate
npm install
```
### Run the application
```
npm run serve
```

## 🔧 Running the tests <a name = "tests"></a>

### How to

Vue component testing is placed under **tests/unit** directory and has **.spec.js** extension.

Other JS testing is placed under **tests/__tests__** directory and has **.test.js** extension.

```
tests
 ──> __tests__
 ───> example.test.js // for normal js testing
 ──> unit
 ────> HelloWorld.spec.js // Vue component should be camelcase
```

### Coding style tests

*HelloWorld.spec.js*

```
/**
* Always use shallowMount because to isolate the component
*/
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders is vue instance", () => {
  	/**
    * mount the component to be tested 
    * using shallowMount
    */ 
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
```

*example.test.js*
```
function sum(a, b) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

```

### Execute test
```
npm run test:unit
```
References
- [Vue Component Testing](https://vue-test-utils.vuejs.org/)
- [Jest Matchers](https://jestjs.io/docs/en/expect)

## ⛏️ Built Using <a name = "built_using"></a>
- [VueJs](https://vuejs.org/) - Web Framework
- [Jest](https://jestjs.io/) - Testing Framework
- [Vuetify](https://vuetifyjs.com/en/) - CSS Framework

## ✍️ Authors <a name = "authors"></a>
- [@paulolorenzobasilio](https://github.com/paulolorenzobasilio)

