<template>
  <div class="menuitems">
    <img class="myimg" :src="item.image" :alt="item.title" height="50" />

    <h4>{{ item.title }}</h4>
    <div class="myFlex">
      <h5 class="Tleft">{{ item.subTitle1 }}</h5>
      <h6 class="Tleft">{{ item.subTitle2 }}</h6>
      <p
        class="Pleft"
        v-for="(sub, index) in item.subTitle2Options"
        :key="index"
      >
        {{ sub.subField }}
      </p>
      <p
        class="Pleft"
        v-for="(sub, index) in item.subTitle2Options"
        :key="index"
      >
        {{ sub.subField }}
      </p>
      <p
        class="Pleft"
        v-for="(sub, index) in item.subTitle2Options"
        :key="index"
      >
        {{ sub.subField }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    item: Object,
  },
})
export default class Menuitems extends Vue {
  mounted() {
    console.log("mount", typeof this.item);
  }
}
</script>

<style scoped>
* {
  font-family: Okra, Helvetica, sans-serif;
}
.menuitems {
  background-color: #419ce5;
  padding: 0.5rem;
  border-radius: 10px;
  height: 100%;
  width: 100%;
}
.myimg {
  width: 40px;

  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 40px;
}
.Tleft {
  text-align: left;
}
.Pleft {
  text-align: left;
  padding-left: 10px;
  margin: 0;
  font-size: small;
}
.myFlex {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
