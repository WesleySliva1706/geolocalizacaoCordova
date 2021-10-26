var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        alert("onDeviceReady: function() {...");
        this.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(
            this.onGeolocationSuccess,
            this.onGeolocationError,
            { timeout: 120000 });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },

    onGeolocationSuccess: function(position) {
        alert("onGeolocationSuccess: function(position) {...");
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lng").value = position.coords.longitude;
    },
    
    onGeolocationError: function(err) {
        alert("onGeolocationError:function(position) {...");
        alert(err.code +" "+err.message);
    }
};

app.initialize();