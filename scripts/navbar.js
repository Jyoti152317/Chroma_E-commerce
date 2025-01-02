const navbar = () => {
  let nav = ` 
  <nav class="navbar">
      <div class="logo">
        <a href="index.html">crom<span class="macron">a</span></a>
      </div>
      <div class="toggle-menu" id="toggle-menu">
        <i class="fa fa-bars"></i>Menu
      </div>
      <div class="search-bar">
        <input type="text" placeholder="What are you looking for" />
        <button type="button" class="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="nav-icons">
        <a href="location.html" class="icon"><i class="fas fa-map-marker-alt"></i></a>
        <a href="profile.html" class="icon user"><i class="fas fa-user"></i></a>
        <a href="cart.html" class="icon"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </nav>
    `;
  document.getElementById("nav").innerHTML = nav;
};
navbar();
