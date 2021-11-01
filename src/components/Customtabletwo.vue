<template>
  <div class="container-fluid" style="margin-top: 10px">
    <div class="table-row header">
      <div
        class="text"
        v-for="(head, index) in header"
        :key="index"
        :style="{ flex: head.flex }"
      >
        <span class="ficon"
          ><span>{{ head.head }} </span>
          <span class="sicon" @click="handleAsc(head.head)"
            ><i
              class="fa fa-sort-asc mt-2"
              v-if="ascItems[index]"
              aria-hidden="true"
            ></i>
            <i class="fa fa-sort-desc" v-else aria-hidden="true"></i
          ></span>
        </span>
      </div>
    </div>

    <div
      class="table-row"
      v-for="(items, index) in item.slice(from, to)"
      :key="index"
    >
      <div
        :class="['text', { textCenter: isCenter }]"
        v-for="(data, i, index) in items"
        :key="i"
        :style="{ flex: flexstyle[index] }"
      >
        {{ data }}
      </div>
    </div>
    <ul class="pagination">
      <span>
        <span v-show="!searchBool">{{ to }} of</span>
        <strong
          >{{ item.length }}
          <span v-show="searchBool">items found in Search </span>
        </strong>
      </span>
      <li class="icon">
        <a href="#">Previous</a>
      </li>
      <li
        v-for="(item, index) in searchBool
          ? item.length < 11
            ? 1
            : 2
          : item.length / 10"
        :key="index"
      >
        <a @click.prevent="change(item)" href="#">{{ item }}</a>
      </li>

      <li class="icon">
        <a href="#">Next</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    item: Array,
    header: Array,
    searchBool: Boolean,
    flexstyle: Array,
    isCenter: Boolean,
    temp: Array,
  },
})
export default class customtwo extends Vue {
  from = 0;
  to = 10;
  asc = true;
  hideShow = false;
  ascItems = [true, true, true, true, true, true, true, true];
  //   mounted() {
  //     console.log("called mount", this.flex);
  //   }
  //   get flex() {
  //     // return this.header.filter(item =>{}));
  //   }
  updated() {
    if (this.searchBool) {
      if (this.hideShow) {
        this.change(1);
      }
    } else {
      console.log("iam else updated");
    }
  }
  change(data: number) {
    let seleted = data;
    // console.log("called mount", this.flex);

    console.log(seleted);
    console.log("items", this.item);

    this.from = seleted * 10 - 10;
    this.to = seleted * 10;
  }

  handleAsc(name) {
    console.log("myname", name);
    console.log("myname", this.temp);

    for (let i = 0; i < this.temp.length; i++) {
      if (name == this.temp[i]) {
        if (this.ascItems[i] === true) {
          this.item = this.item.sort((a, b) => (a[name] < b[name] ? -1 : 1));
          console.log("from asc", name);
          console.log("prop", this.temp[i]);

          this.ascItems[i] = false;
        } else {
          this.item = this.item.sort((a, b) => (a[name] > b[name] ? -1 : 1));
          this.ascItems[i] = true;
        }
      }
    }
  }
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  padding: 1rem;
  font-family: Okra, Helvetica, sans-serif;
  font-size: 14px;
}
.ficon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sicon {
  display: flex;
  margin-left: 5px;

  flex-direction: column-reverse;
}

.table-row {
  display: flex;

  flex-direction: row;

  flex-grow: 0;

  flex-wrap: wrap;

  width: 100%;
  padding-left: 10px;
}
.text {
  flex: 1;

  overflow: hidden;

  text-overflow: ellipsis;
  padding-right: 16px;
  word-break: break-word;
  white-space: pre-line;
}
.textCenter {
  text-align: center;
}
/*
 * General good-look styles, not mandatory.
 */
body {
  font-size: 20px;
}
.table-row {
  border-bottom: 2px solid #e0e0e0;
  border-collapse: collapse;
  padding-top: 5px;
}
.table-row:nth-child(odd) {
  background-color: #d3dbdd;
}
.table-row.header {
  background-color: #35495e;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  color: white;
  padding: 1rem;
  font-size: 16px;
}

/*paginationn */

.pagination {
  margin: 25px 0 15px 0;
}
.pagination,
.pagination li a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.pagination li {
  background: #35495e;
  list-style: none;
}
.pagination li a {
  text-decoration: none;
  color: hsl(0, 0%, 99%);
  height: 50px;
  width: 50px;
  font-size: 18px;
  padding-top: 1px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-right-width: 0px;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35);
}
.pagination li:last-child a {
  border-right-width: 1px;
}
.pagination li a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(0, 0, 0, 0.35);
  border-bottom-color: rgba(0, 0, 0, 0.5);
}
.pagination li a:focus,
.pagination li a:active {
  padding-top: 4px;
  border-left-width: 1px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.25);
}
.pagination li.icon a {
  min-width: 120px;
}
.pagination li:first-child span {
  padding-right: 8px;
}
.pagination li:last-child span {
  padding-left: 8px;
}
</style>
