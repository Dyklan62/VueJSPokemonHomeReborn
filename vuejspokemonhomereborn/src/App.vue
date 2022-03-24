
<template>
  <header>
      <div class="Menu">
        <nav class="Menu navbar navbar-expand-lg navbar-light navcolor">
          <div class="Menu container-fluid">
            <div class="mx-auto navbar-collapse" id="navbarNav">
              <ul class="nav navbar-nav mx-auto">
                <div class="dropdown mx-auto">
                  <div
                    class="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="@/assets/Logo1.png" alt="Logo1" />
                  </div>
                  <ul
                    class="text-center dropdown-menu"
                    aria-labelledby="LoginOrRegister"
                  >
                    <div v-if="Loged">
                      <li>
                        <a class="dropdown-item noborderalink"
                          ><router-link class="nav-link" to="/Account"
                            >Gestion de compte</router-link
                          ></a
                        >
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item noborderalink"
                          ><router-link class="nav-link" to="/disconect">
                            Deconnexion
                          </router-link></a
                        >
                      </li>
                    </div>
                    <div v-if="!Loged">
                      <li>
                        <a class="dropdown-item noborderalink"
                          ><router-link class="nav-link" to="/login">
                            Connection
                          </router-link></a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item noborderalink"
                          ><router-link class="nav-link" to="/register">
                            Incription
                          </router-link></a
                        >
                      </li>
                    </div>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <router-view/>
    </header>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
