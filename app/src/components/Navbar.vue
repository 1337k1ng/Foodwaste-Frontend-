<template>
    

  <div id="nav">
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo Here</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">About</router-link>
            <router-link to="/Tilbud" class="nav-link">Tilbud</router-link>
            <router-link to="/Stores" class="nav-link">Stores</router-link>
        </div>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</nav>
 </div>

 </template>


<style  scoped>

 #nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.rout{

}




#nav {
  position: sticky;
        position: -webkit-sticky;
        top: 0px;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: rgb(4, 126, 24);
  border-radius: .5rem;
}

#nav a.router-link-active {
  color: whitesmoke;
  background: rgb(4, 126, 24);
  border-radius: .5rem;
}
</style>>


