<template>
  <div class="home">
    <section class="banner">
      <div class="container mypadCOn">
        <div class="banner-text">
          <h1>Microsoft</h1>
          <p>
            <strong
              >We make it easy to get the most out of your virtual
              machine.</strong
            >
            Our tools make it simple to track how your Data are performing and
            help you to respond quickly if there is a problem
          </p>
          <button @click="signUp">Sign Up</button>
        </div>
      </div>
    </section>
    <section class="mySection" id="mySection2">
      <div class="container">
        <div class="user signinBx">
          <div class="formBx">
            <form action="" onsubmit="return false;">
              <h2>Sign In</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value="Login" />
              <p class="signup">
                Don't have an account ?
                <a href="#" onclick="toggleForm();">Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    signUp() {
      var x = document.getElementById("mySection2");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: space-between;
}
.mypadCOn {
  padding-left: 7rem;
  margin: 0;
}
.banner {
  height: auto;
  margin: 32px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
@media (min-width: 768px) {
  .banner {
    height: 450px;
    margin-bottom: 32px;
  }
}

.banner .banner-text {
  max-width: 550px;
  float: left;
}
.banner .banner-text h1 {
  color: #00106a;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 1rem;
}
.banner .banner-text p {
  color: #00106a;
  font-size: 1.05rem;
  line-height: 1.75;
}
.banner button {
  border: 0;
  border-radius: 50px;
  padding: 0.75rem 2.75rem;
  background: #4b71ff;
  color: #ffffff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
}
.banner button:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.25);
}
/*right form*/
.mySection {
  position: relative;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 500px;
  margin-right: 3rem;
}

.mySection .container {
  position: relative;
  width: 539px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0;
}

.mySection .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #ff0;
  transition: 0.5s;
}

.mySection .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySection .container .user .formBx {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

.mySection .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}

.mySection .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}

.mySection .container .user .formBx form input[type="submit"] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

.mySection .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

.mySection .container .user .formBx form .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}

.mySection .container .signupBx {
  pointer-events: none;
}

.mySection .container.active .signupBx {
  pointer-events: initial;
}

.mySection .container .signupBx .formBx {
  left: 100%;
}

.mySection .container.active .signupBx .formBx {
  left: 0;
}

.mySection .container .signupBx .imgBx {
  left: -100%;
}

.mySection .container.active .signupBx .imgBx {
  left: 0%;
}

.mySection .container .signinBx .formBx {
  left: 0%;
}

.mySection .container.active .signinBx .formBx {
  left: 100%;
}

.mySection .container .signinBx .imgBx {
  left: 0%;
}

.mySection .container.active .signinBx .imgBx {
  left: -100%;
}

@media (max-width: 991px) {
  .mySection .container {
    max-width: 400px;
  }

  .mySection .container .imgBx {
    display: none;
  }

  .mySection .container .user .formBx {
    width: 100%;
  }
}
</style>
