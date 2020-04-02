function getWelcomePage() {
    return '<div class="d-flex flex-column my-auto">\
      <h2 class="text-center text-muted">Welcome to</h2>\
      <div class="brand-area">\
        <h1 class="text-center feature-text m-0 display-2 shiny">PLANNIT </h1>\
        <p class="welcome-icons text-center m-0 display-1 text-muted shiny">\
          <i class="fas fa-globe-americas"></i>\
          <i class="fas fa-plane plane"></i>\
          <i class="fas fa-sun"></i>\
        </p>\
        </div>\
        <div class="m-4">\
          <h4 class="text-center text-muted">Your one-stop site for planning your entire vacation.</h4>\
          <h4 class="text-center text-muted">Are you ready?</h4>\
        </div>\
        <input type="submit" id="start-button" value="LET\'S GO &#11157" class="btn btn-lg btn-info align-self-center m-0">\
    </div>';
}

function getForm() {
    return '<div class="form-container d-flex flex-column">\
    <h2 class="text-center">Let\'s plan your trip!</h2>\
    <form class="input-form">\
        <div class="row form-group input-item">\
            <label for="dateRange">Select travel dates:</label><br>\
            <input type="text" id="dateRange" class="form-control" placeholder="Choose your travel dates" value="04-14-2020 to 04-15-2020"/>\
        </div>\
        <div class="row form-group input-item">\
            <label for="fromLocation">From:</label><br>\
            <input type="text" id="fromLocation" class="form-control" value="Glasgow" placeholder="Enter an address, city or airport code" required/><br>\
        </div>\
        <div class="row form-group input-item">\
            <label for="toLocation">To:</label><br>\
            <input type="text" id="toLocation" class="form-control" value="London" placeholder="Enter an address, city or airport code" required/>\
        </div>\
        <div class="row custom-control custom-switch">\
            <input type="checkbox" class="custom-control-input" id="drive-switch">\
            <label class="custom-control-label" for="drive-switch">I\'d rather drive</label>\
        </div>\
        <input type="submit" id="submit-form-button" value="Submit" class="btn btn-lg btn-outline-info">\
    </form>\
    <h5 id="error-message"></h5>\
  </div>';
}

// .no-gutters for margins
function getResultsContainers(data) {
    return `<div class="results-page container d-flex flex-column">\
    <h1 class="text-center display-4 mb-4">Your trip to <span class="shiny feature-text display-3">${data.toCity}</span></h1>\
    <div class="row">\
      <div id="flights-container" class="d-flex flex-column result-box mb-3 col-sm-7">
        <h4 class="result-heading">Flights <i class="fas fa-plane-departure"></i></h4>\
      </div>\
      <div id="restaurants-container" class="d-flex flex-column result-box mb-3 col-sm-5">
        <h4 class="result-heading">Restaurants <i class="fas fa-utensils"></i></h4>\
      </div>\
    </div>\
    <div class="row">\
      <div id="hotels-container" class="d-flex flex-column result-box mb-3 col-sm-4">
        <h4 class="result-heading">Hotels <i class="fas fa-hotel"></i></h4>\
      </div>\
      <div id="activities-container" class="rd-flex flex-column esult-box mb-3 col-sm-8">
        <h4 class="result-heading">Activities <i class="fas fa-camera"></i></h4>\
      </div>\
    </div>\
    <div class="row">\
      <div id="weather-container" class="d-flex flex-column result-box col-sm-12">\
        <h4 class="result-heading">Weather <i class="fas fa-cloud-sun"></i></h4>\
      </div>\
    </div>\
    <div class="row justify-content-center">\
      <input type="submit" id="new-search-button" value="new search &#10558" class="btn btn-md btn-info center mt-4 mb-0">\
    </div>\
  </div>`;
}

function getFlights(data) {
    const flightData = `
    <h4 class="result-heading">Flights <i class="fas fa-plane-departure"></i></h4>\
    <div class="data-section">
    <h5>We found a flight for you from <span class="font-weight-bold">${data.fromAirport}</span> to \
    <span class="font-weight-bold">${data.toAirport}</span> for <span class="font-weight-bold">$${data.flightPrice}</span>.</h5>\
    <a href="${data.flightLink}" target="_blank" class="btn btn-lg btn-info">See flight</a></div>`;
    $("#flights-container").html(flightData);
    $("#flights-container .data-section").css("opacity", "0");
    $("#flights-container .data-section").animate({opacity: 1}, 3000)
}

function getRestaurants(something) {
    return `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate et dolor temporibus perferendis ut odit cumque illum? Voluptatum quasi perferendis cum voluptate? Eos praesentium nostrum, fugit voluptatum ea voluptates?</p>`;
}

function getHotels(something) {
    return `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate et dolor temporibus perferendis ut odit cumque illum? Voluptatum quasi perferendis cum voluptate? Eos praesentium nostrum, fugit voluptatum ea voluptates?</p>`;
}

function getActivities(something) {
    return `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate et dolor temporibus perferendis ut odit cumque illum? Voluptatum quasi perferendis cum voluptate? Eos praesentium nostrum, fugit voluptatum ea voluptates?</p>`;
}

function getWeather(something) {
    return `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate et dolor temporibus perferendis ut odit cumque illum? Voluptatum quasi perferendis cum voluptate? Eos praesentium nostrum, fugit voluptatum ea voluptates?</p>`;
}