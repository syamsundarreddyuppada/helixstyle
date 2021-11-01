<template>
  <v-app class="myApp">
    <!-- <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="firstName"
              label="firstName"
              required
            ></v-text-field>
            <v-text-field
              ref="name"
              v-model="lastName"
              label="lastName"
              required
            ></v-text-field>
            <v-text-field
              ref="name"
              v-model="age"
              label="age"
              required
            ></v-text-field>
            <v-text-field
              ref="name"
              v-model="savings"
              label="savings"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>

            <v-btn color="primary" text @click.prevent="addTodo()">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-main> <Table /> </v-main> -->
    <!-- <div>
      <form class="form-wrapper" @submit.prevent="searching">
        <input
          type="text"
          id="search"
          v-model="search"
          placeholder="Search for..."
          required
        />
        <input type="submit" value="go" id="submit" />
      </form>
      <div class="text-center">
        <v-progress-circular
          indeterminate
          v-show="isLoading"
          color="primary"
        ></v-progress-circular>
      </div> -->
    <!-- <Tablecustom
        :item="items"
        :len="itemLength"
        :searchBool="searchBool"
        :patternCenter="patternCenter"
        :header="header"
        :sizing="sizing"
      /> -->
    <!-- <Customtwo
        v-show="!isLoading"
        :item="items"
        :header="header"
        :searchBool="searchBool"
        :flexstyle="sizing"
        :isCenter="isCenter"
        :temp="temp"
        @fromChild="toParentAction"
      />
    </div> -->
    <div class="header">
      <div class="left">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i
        ><i class="fa fa-th" aria-hidden="true"></i>
        <button class="mybtn">dev</button>
      </div>
      <div class="middle">
        <router-link to="/">
          <img
            src="https://www.logo.wine/a/logo/Microsoft_Mobile/Microsoft_Mobile-Logo.wine.svg"
            alt=""
            height="120"
          />
        </router-link>
      </div>
      <div class="end">
        <Menu />
      </div>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import axios from "axios";
const baseurl = "http://localhost:3000/posts";
import { Component, Vue } from "vue-property-decorator";
import Table from "./components/Table.template.vue";
import Tablecustom from "./components/Tablecustom.vue";
import Customtwo from "./components/Customtabletwo.vue";
import Menu from "./components/Megamenu.vue";

import Item from "./types/item";

@Component({
  components: {
    Table,
    Tablecustom,
    Customtwo,
    Menu,
  },
})
export default class App extends Vue {
  firstName = "";
  lastName: string;
  age: string;
  savings: string;
  itemLength: number;
  search: string;
  temp: any = [];
  items: any = [];
  searchBool = false;
  patternCenter = true;
  header: any = [];
  mainHeader: any = [];
  isLoading = false;
  sizing = [0.33, 0.44, 0.55, 3.2, 1, 1, 1, 0.79];
  isCenter = false;
  empty: any = [];

  // public async created() {
  //   try {
  //     this.isLoading = true;
  //     let res = await axios.get("http://localhost:3000/posts");
  //     console.log("res1App", res);
  //     setTimeout(() => {
  //       this.items = res.data;

  //       this.items = this.items.slice(0, 60);

  //       this.header = Object.keys(this.items[0]);
  //       this.empty = this.header;

  //       this.empty = this.empty.map((item) =>
  //         item
  //           .split("_")
  //           .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
  //           .join(" ")
  //       );
  //       console.log("Empty", this.empty);
  //       this.header = this.empty;
  //       this.temp = this.empty;

  //       for (let i = 0; i < this.header.length; i++) {
  //         this.mainHeader.push({ head: this.header[i], flex: this.sizing[i] });
  //       }
  //       this.isLoading = false;
  //       this.header = this.mainHeader;

  //       this.itemLength = this.items.length / 10;
  //     }, 1000);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }
  // capitalize(str) {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  // searching() {
  //   this.searchBool = true;
  //   this.search = this.search.toLowerCase();
  //   if (this.search) {
  //     this.items = this.items.filter((row: any) => {
  //       return Object.keys(row).some((key) => {
  //         return String(row[key]).toLowerCase().indexOf(this.search) > -1;
  //       });
  //     });
  //   } else {
  //     return this.items;
  //   }
  // }

  // toParentAction() {
  //   this.searchBool = false;
  //   console.log("parent", this.searchBool);
  // }

  // searching() {
  //   this.isLoading = true;
  //   this.searchBool = true;

  //   this.itemLength = (this.items.length % 10) + 1;
  //   console.log("after", this.items);
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 1000);
  //   setTimeout(() => {
  //     this.items = this.items.filter((post: any) => {
  //       if (post.name == this.search) return true;
  //       else if (post.country == this.search) return true;
  //       else if (post.slogan == this.search) return true;
  //       else if (post.established == this.search) return true;
  //       else if (post.logo == this.search) return true;
  //       else if (post.website == this.search) return true;
  //       else if (post.head_quaters == this.search) return true;
  //     });
  //   }, 1000);
  // }

  async addTodo() {
    console.log("iam added");
    const random = Math.floor(Math.random() * 10);

    let res = await axios.post(baseurl, {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      savings: this.savings,
      status: "CHECKED-IN",
      avatar: "https://picsum.photos/20" + random,
    });
    this.firstName = " ";
    this.lastName = " ";
    this.age = " ";
    this.savings = " ";
    console.log(this.firstName);
  }
}
</script>

<style scoped>
/* .form-wrapper {
  background-color: #f6f6f6;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f6f6f6),
    to(#eae8e8)
  );
  background-image: -webkit-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -moz-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -ms-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: -o-linear-gradient(top, #f6f6f6, #eae8e8);
  background-image: linear-gradient(top, #f6f6f6, #eae8e8);
  border-color: #dedede #bababa #aaa #bababa;
  border-style: solid;
  border-width: 1px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 3px rgba(255, 255, 255, 0.1), 0 3px 0 #bbb,
    0 4px 0 #aaa, 0 5px 5px #444;
  -moz-box-shadow: 0 3px 3px rgba(255, 255, 255, 0.1), 0 3px 0 #bbb,
    0 4px 0 #aaa, 0 5px 5px #444;
  box-shadow: 0 3px 3px rgba(255, 255, 255, 0.1), 0 3px 0 #bbb, 0 4px 0 #aaa,
    0 5px 5px #444;
  margin: 0 0 6px auto;
  overflow: hidden;
  padding: 8px;
  width: 100%;
  display: flex;
  justify-content: end;
}

.form-wrapper #search {
  border: 1px solid #ccc;
  -webkit-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
  -moz-box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
  box-shadow: 0 1px 1px #ddd inset, 0 1px 0 #fff;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #999;
  float: left;
  font: 16px Lucida Sans, Trebuchet MS, Tahoma, sans-serif;
  height: 43px;
  padding: 10px;
  width: 320px;
}

.form-wrapper #search:focus {
  border-color: #aaa;
  -webkit-box-shadow: 0 1px 1px #bbb inset;
  -moz-box-shadow: 0 1px 1px #bbb inset;
  box-shadow: 0 1px 1px #bbb inset;
  outline: 0;
}

.form-wrapper #search:-moz-placeholder,
.form-wrapper #search:-ms-input-placeholder,
.form-wrapper #search::-webkit-input-placeholder {
  color: #999;
  font-weight: normal;
}

.form-wrapper #submit {
  background-color: #0483a0;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#31b2c3),
    to(#0483a0)
  );
  background-image: -webkit-linear-gradient(top, #31b2c3, #0483a0);
  background-image: -moz-linear-gradient(top, #31b2c3, #0483a0);
  background-image: -ms-linear-gradient(top, #31b2c3, #0483a0);
  background-image: -o-linear-gradient(top, #31b2c3, #0483a0);
  background-image: linear-gradient(top, #31b2c3, #0483a0);
  border: 1px solid #00748f;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 0 #fff;
  -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 0 #fff;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 0 #fff;
  color: #fafafa;
  cursor: pointer;
  height: 42px;

  font: 15px Arial, Helvetica;
  padding: 0;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
  width: 100px;
}

.form-wrapper #submit:hover,
.form-wrapper #submit:focus {
  background-color: #31b2c3;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0483a0),
    to(#31b2c3)
  );
  background-image: -webkit-linear-gradient(top, #0483a0, #31b2c3);
  background-image: -moz-linear-gradient(top, #0483a0, #31b2c3);
  background-image: -ms-linear-gradient(top, #0483a0, #31b2c3);
  background-image: -o-linear-gradient(top, #0483a0, #31b2c3);
  background-image: linear-gradient(top, #0483a0, #31b2c3);
}

.form-wrapper #submit:active {
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset;
  outline: 0;
}

.form-wrapper #submit::-moz-focus-inner {
  border: 0;
} */
.myApp {
  background: #fafafa;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: linear-gradient(42deg, #0182dd, #169bf5);
}
.left {
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.middle {
  margin-right: 6em;
}
.fa {
  font-size: 1.9rem;
  padding: 0.8rem;
}
.fa:nth-child(2) {
  font-size: 1.4rem;
}
.mybtn {
  padding: 0.2rem 0.5rem;
  color: white;
  border: 1px solid white;
  background: transparent;
}
.mybtn:hover {
  background: #419ce5 !important;
}
</style>
