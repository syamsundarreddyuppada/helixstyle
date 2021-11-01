<template>
  <div class="table">
    <div class="divTable blueTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div
            class="divTableHead"
            v-for="(head, index) in header"
            :key="index"
          >
            <span class="ficon"
              ><span>{{ head }} </span>
              <span class="sicon" @click="handleAsc(head)"
                ><i
                  class="fa fa-sort-asc mt-2"
                  v-if="asc"
                  aria-hidden="true"
                ></i>
                <i class="fa fa-sort-desc" v-else aria-hidden="true"></i
              ></span>
            </span>
          </div>
        </div>
      </div>
      <div class="divTableBody">
        <div
          class="divTableRow"
          style="height: 45px"
          v-for="(item, index) in item.slice(from, to)"
          :key="index"
        >
          <div :class="['divTableCell', { Ccenter: patternCenter }]">
            {{ item.id }}
          </div>
          <div :class="['divTableCell', { Ccenter: patternCenter }]">
            {{ item.name }}
          </div>
          <div :class="['divTableCell', { Ccenter: patternCenter }]">
            {{ item.country }}
          </div>
          <div :class="['divTableCell', { Ccenter: patternCenter }]">
            {{ item.slogan }}
          </div>
          <div :class="['divTableCell', { Ccenter: patternCenter }]">
            {{ item.established }}
          </div>
        </div>
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
        v-for="(item, index) in searchBool ? (item.length < 11 ? 1 : 2) : len"
        :key="index"
      >
        <a @click.prevent="change" href="#">{{ item }}</a>
      </li>

      <li class="icon">
        <a href="#">Next</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
const baseurl = "http://localhost:3000/posts";

@Component({
  props: {
    item: Array,
    len: Number,
    searchBool: Boolean,
    patternCenter: Boolean,
    header: Array,
    sizing: Array,
  },
})
export default class Tablecustom extends Vue {
  items: any = [];
  from = 0;
  to = 10;
  asc = true;
  Clr: string;
  page: 0;

  created() {
    console.log("called mount", this.header);
  }

  change(event) {
    let seleted = Number(event.target.innerText);

    this.from = seleted * 10 - 10;
    this.to = seleted * 10;
  }
  handleAsc(name) {
    console.log("myname", name);
    if (name == "id") {
      if (this.asc === true) {
        this.item = this.item.sort((a, b) => (a.id < b.id ? -1 : 1));
        console.log("from asc", this.item);
        console.log("prop", this.header);

        this.asc = false;
      } else {
        this.item = this.item.sort((a, b) => (a.id > b.id ? -1 : 1));
        this.asc = true;
      }
    } else if (name == "name") {
      if (this.asc === true) {
        this.item = this.item.sort((a, b) => (a.name < b.name ? -1 : 1));
        console.log("from asc", this.item);

        this.asc = false;
      } else {
        this.item = this.item.sort((a, b) => (a.name > b.name ? -1 : 1));
        this.asc = true;
      }
    } else if (name == "country") {
      if (this.asc === true) {
        this.item = this.item.sort((a, b) => (a.country < b.country ? -1 : 1));
        console.log("from asc", this.item);

        this.asc = false;
      } else {
        this.item = this.item.sort((a, b) => (a.country > b.country ? -1 : 1));
        this.asc = true;
      }
    } else if (name == "slogan") {
      if (this.asc === true) {
        this.item = this.item.sort((a, b) => (a.slogan < b.slogan ? -1 : 1));
        console.log("from asc", this.item);

        this.asc = false;
      } else {
        this.item = this.item.sort((a, b) => (a.slogan > b.slogan ? -1 : 1));
        this.asc = true;
      }
    } else if (name == "established") {
      if (this.asc === true) {
        this.item = this.item.sort((a, b) =>
          a.established < b.established ? -1 : 1
        );
        console.log("from asc", this.item);

        this.asc = false;
      } else {
        this.item = this.item.sort((a, b) =>
          a.established > b.established ? -1 : 1
        );
        this.asc = true;
      }
    }
  }
}
</script>

<style scoped>
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

.ficon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sicon {
  display: flex;
  margin-left: 5px;

  flex-direction: column-reverse;
}

.table {
  border: 1px solid lightgray;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
}
div.blueTable {
  border: 1px solid #1c6ea4;
  background-color: #eeeeee;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
.divTable.blueTable .divTableCell,
.divTable.blueTable .divTableHead {
  border: 1px solid #aaaaaa;
  padding: 3px 2px;
}
.Ccenter {
  text-align: center;
}

.divTable.blueTable .divTableBody .divTableCell {
  font-size: 16px;
  min-width: 35px !important;
}
.divTable.blueTable .divTableRow:nth-child(even) {
  background: #d0e4f5;
}
.divTable.blueTable .divTableHeading {
  background: #1c6ea4;
  background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1c6ea4 100%);
  background: -webkit-linear-gradient(
    top,
    #5592bb 0%,
    #327cad 66%,
    #1c6ea4 100%
  );
  background: linear-gradient(to bottom, #98c4e1 0%, #47a3e1 66%, #40b1fb 100%);
}
.divTable.blueTable .divTableHeading .divTableHead {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  border-left: 2px solid #d0e4f5;
  padding: 15px 0;
}
.divTable.blueTable .divTableHeading .divTableHead:first-child {
  border-left: none;
}

.blueTable .tableFootStyle {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background: #d0e4f5;
  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #d0e4f5 100%);
  background: -webkit-linear-gradient(
    top,
    #dcebf7 0%,
    #d4e6f6 66%,
    #d0e4f5 100%
  );
  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #d0e4f5 100%);
  border-top: 2px solid #444444;
}
.blueTable .tableFootStyle {
  font-size: 20px;
}
.blueTable .tableFootStyle .links {
  text-align: right;
}
.blueTable .tableFootStyle .links a {
  display: inline-block;
  background: #1c6ea4;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 5px;
}
.blueTable.outerTableFooter {
  border-top: none;
}
.blueTable.outerTableFooter .tableFootStyle {
  padding: 3px 5px;
}
/* DivTable.com */
.divTable {
  display: table;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}

.divTableCell,
.divTableHead {
  display: table-cell;
}
.divTableHeading {
  display: table-header-group;
}
.divTableFoot {
  display: table-footer-group;
}
.divTableBody {
  display: table-row-group;
}
</style>
