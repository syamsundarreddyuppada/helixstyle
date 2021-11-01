<template>
  <div>
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <section class="card" id="SectionCard">
        <div
          class="card--content"
          v-for="(item, index) in items"
          :key="index"
          :style="{ minWidth: item.flex }"
          @click.stop="displayCardsOff(item.path)"
        >
          <router-link class="routerLink" :to="item.path">
            <img
              class="myimg"
              :src="item.image"
              :alt="item.title"
              height="50"
            />

            <h4 class="titleHead">{{ item.title }}</h4>
            <i
              class="fa fa-long-arrow-left"
              @click="scrollLeft"
              aria-hidden="true"
            ></i>
            <i
              class="fa fa-long-arrow-right"
              @click="scrollWin"
              aria-hidden="true"
            ></i>
            <h5
              class="Tlefttitle"
              v-for="(sub, index) in item.subTitle2"
              :key="index"
            >
              {{ sub.child }}
            </h5>
            <div class="myFlex">
              <h5 class="Tleft">{{ item.subTitle1 }}</h5>
              <div class="myFlexsub">
                <div
                  class="myFlexsub__child"
                  v-for="(subchild, index) in item.childsub"
                  :key="index"
                >
                  <span
                    v-for="(child, index) in subchild.subTitle2Options"
                    :key="index"
                  >
                    <h6 class="Tleft1">
                      {{ child.title }}
                    </h6>
                    <p class="Pleft">
                      {{ child.subField }}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </section>
      <div class="endTitle"><span> report </span><span> v2.4.5</span></div>
    </div>
    <div class="content">
      <div class="title">Fullscreen Overlay Navigation Bar</div>
      <p>(Hamburger Menu-2)</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menuitems from "./MenuItems.vue";

@Component({
  components: {
    Menuitems,
  },
})
export default class Menu extends Vue {
  items = [
    {
      path: "/dashboard",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZH30hzF-rY2f4wR5smm7uaZsaSWTLzN4JB5lymYvMTjUG9OIOs1ZV8L6qNMRwDku80I&usqp=CAU",
      title: "Dashboard",
      subTitle1: "Time management",
    },
    {
      path: "/inventry",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGZuZvRtFcjGL-rTp-4kjnJaEObgHghYWEL8HM7-ZtI1LLU_S65N53S8e4ITPRPtRRJw&usqp=CAU",
      title: "Google",
      subTitle1: "GoogleServices",
      subTitle2: [{ child: "Time management" }],
      flex: "300px",
      childsub: [
        {
          subTitle2Options: [
            { title: "GoogleServer" },
            { subField: "GoogleSales" },
            { subField: "GoogleMaps" },
            { subField: "GoogleDrive" },
            { subField: "Googleshare" },
            { subField: "GooglePay" },
            { subField: "GoogleChrome" },
          ],
        },
        {
          subTitle2Options: [
            { title: "GoogleDataBase" },
            { subField: "GoogleSearch" },
            { subField: "Googleplay" },
            { subField: "GoogleBug" },
            { subField: "Googleplay" },
            { subField: "Googlestore" },
            { subField: "Googlemusic" },
          ],
        },
        {
          subTitle2Options: [
            { title: "GoogleTeam" },
            { subField: "GoogleGpay" },
            { subField: "GoogleSearch" },
            { subField: "Googleshare" },
            { subField: "GooglePay" },
            { subField: "GoogleChrome" },
          ],
        },
      ],
    },
    {
      path: "/inventry",
      image:
        "https://www.clipartmax.com/png/middle/42-429025_technology-clipart-computer-tool-computer-tools-icon.png",
      title: "Services",
      subTitle1: "Data Shring",
      subTitle2: [
        { child: "data management" },
        { child: "Data Science" },
        { child: "Data store" },
      ],
      childsub: [
        {
          subTitle2Options: [
            { title: "Data Base" },
            { subField: "Services" },
            { subField: "StorageLimit" },
            { subField: "Pricing" },
          ],
        },
      ],
    },
    {
      path: "/inventry",
      image:
        "https://st2.depositphotos.com/5266903/7878/v/380/depositphotos_78789568-stock-illustration-refund-icon-from-business-bicolor.jpg",

      title: "Money Transfer",
      subTitle1: "Banking",
      subTitle2: [
        { child: "Funds" },
        { child: "Refunds" },
        { child: "Payments" },
      ],
    },
    {
      path: "/reports",
      image:
        "https://piweb.azureedge.net/i/features/home/customizable-reports.svg",
      title: "Reports",
      subTitle1: "Stastics",
    },
    {
      path: "/inventry",
      image:
        "https://vectorseek.com/wp-content/uploads/2021/02/Google-Maps-Logo-Vector-scaled.jpg",
      title: "Locations",
      subTitle1: "Reservations",
    },

    {
      path: "/inventry",
      image:
        "https://banner2.cleanpng.com/20180505/eww/kisspng-microsoft-azure-application-programming-interface-5aed70aa987fc0.0971373915255103146247.jpg",
      title: "Support",
      subTitle1: "24x7 Avalible ",
      subTitle2: [{ child: "data management" }, { child: "Data Science" }],
    },
  ];
  scrollWin() {
    let section = document.getElementById("SectionCard");
    console.log("scr Right");

    section.scrollTo(500, 0);
  }
  scrollLeft() {
    let section = document.getElementById("SectionCard");
    section.scrollTo(0, 0);
    console.log("scr Left");
  }
  displayCardsOff(id) {
    console.log("called", id);
    let active = document.getElementById("active") as HTMLInputElement;
    if (active.checked === true) {
      active.checked = false;
    }
  }
}
</script>

<style scoped>
.routerLink {
  text-decoration: none !important;
  color: white;
}

.fa-long-arrow-right {
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 1.4rem;
  color: black;
  background: white;
  border-radius: 50%;
  padding: 12px;
  display: none;
  cursor: pointer;
}
.fa-long-arrow-left {
  position: absolute;
  top: 50%;
  left: 5px;
  font-size: 1.4rem;
  color: black;
  background: white;
  border-radius: 50%;
  padding: 12px;
  display: none;
  cursor: pointer;
}
.card {
  background-color: linear-gradient(42deg, #097ac9, #169bf5);
  min-width: 100%;
  min-height: 460px;
  border-bottom: 1px dashed;
  scroll-behavior: smooth;
}
.wrapper :hover .fa {
  display: block;
}

.card--content {
  background-color: #419ce5;
  min-width: 200px;

  margin: 10px;

  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0px 1px 1px black;
}
.card {
  display: flex;
}

.card {
  overflow-x: auto;
  color: white;
}
.card--content:hover {
  margin-top: -1px;
}

.wrapper {
  position: fixed;
  top: 60px;
  /*left: -100%;*/
  right: -100%;
  height: 75vh;
  width: 100%;
  background: linear-gradient(42deg, #097ac9, #169bf5);
  z-index: 1;
  transition: all 0.6s ease-in-out;
}
#active:checked ~ .wrapper {
  /*left: 0;*/
  right: 0;
}
.menu-btn {
  position: absolute;
  z-index: 2;
  right: 20px;
  /*left: 20px; */
  top: 7px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  /*color: #fff;*/
  /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
  /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
  /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
  transition: all 0.3s ease-in-out;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid rgb(255, 255, 255);
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before {
  transform: translateY(-8px);
}
.menu-btn:after {
  transform: translateY(8px);
}

.close {
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
}

/* closing animation */
#active:checked + .menu-btn span {
  transform: scaleX(0);
}
#active:checked + .menu-btn:before {
  transform: rotate(45deg);
  border-color: #fff;
}
#active:checked + .menu-btn:after {
  transform: rotate(-45deg);
  border-color: #fff;
}
.wrapper ul {
  position: absolute;
  top: 60%;
  left: 50%;
  height: 90%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
  padding: 0;
}
.wrapper ul li {
  height: 10%;

  min-height: 330px;
  width: -webkit-fill-available;
  margin: 5px;
  display: flex;
  flex-basis: auto;

  border-radius: 10px;
}

input[type="checkbox"] {
  display: none;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title {
  font-size: 40px;
  font-weight: 700;
}
.content p {
  font-size: 35px;
  font-weight: 600;
}

/*new*/
.myimg {
  width: 40px;

  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 40px;
}
.Tleft {
  text-align: left;
  font-weight: 400;
}
.Tleft1 {
  font-size: 13px;
  font-weight: 500;
  text-align: left;
}
.Tlefttitle {
  text-align: left;
  font-size: 14px;
  font-weight: 400;
}
.Pleft {
  text-align: left;
  padding-left: 10px;
  margin: 0;
  font-size: small;
}
.titleHead {
  font-size: 17px;
  font-weight: 500;
}
.myFlex {
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  flex-wrap: wrap;
}
.myFlexsub {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 0;

  flex-wrap: wrap;
  width: 100%;
}
.myFlexsub__child {
  width: 80px;
  margin: 5px;
}
::-webkit-scrollbar {
  width: 70vw;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
.endTitle {
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 1rem;
}
</style>
