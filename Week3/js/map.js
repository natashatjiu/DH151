
let map = L.map('map').setView([50,0],10);


        let cities = ['Singapore','Bali','Los Angeles','Seoul','Tokyo','New York City']

        let data = [
	{
		'title':'SINGAPORE, 2017',
		'description': 'The river by Clarke Quay, <br> near where I lived for the first 18 years of my life.',
		'lat': 1.3521,
		'lon': 103.8198,
        'img': "https://raw.githubusercontent.com/natgrace/DH151/1804339e9e59c6ae6a0e572730e58053798bd521/Week%202/singapore.jpg",
	},
	{
		'title':'BALI, 2019',
		'description': 'A rare shot of an empty beach in pre-corona Bali. <br> The first place people think of when I mention my home country. A 9 hour drive from Surabaya, <br> where I am right now!',
		'lat': -8.3405,
		'lon': 115.0920,
        'img': 'https://raw.githubusercontent.com/natgrace/DH151/1804339e9e59c6ae6a0e572730e58053798bd521/Week%202/bali.jpg'
	},
	{
		'title':'LOS ANGELES, 2019',
		'description': 'Santa Monica Pier, one of the first places I visited <br> when I moved to LA for college. <br> Just a short bus ride away from my community college.',
		'lat': 34.0522,
		'lon': -118.2437,
        'img': "https://raw.githubusercontent.com/natgrace/DH151/1804339e9e59c6ae6a0e572730e58053798bd521/Week%202/la.jpg"
	},
	{
		'title':'SEOUL, 2019',
		'description': 'My third time visiting South Korea. <br> Also, unknowingly to me then, my last vacation <br> for a while. ',
		'lat': 37.5665,
		'lon': 126.9780,
        'img': "https://raw.githubusercontent.com/natgrace/DH151/1804339e9e59c6ae6a0e572730e58053798bd521/Week%202/seoul.jpg"
	},
	{
		'title':'TOKYO, 2018',
		'description': 'My first time traveling without my family <br> and my first time to Japan! <br> Also, my favorite picture of the six.',
		'lat': 35.6762,
		'lon': 139.6503,
        'img': "https://raw.githubusercontent.com/natgrace/DH151/52b4f948a203010d14b1f6d40a52b6799b90a9d2/Week%202/tokyo.jpg"
	},
	{
		'title':'NEW YORK CITY, 2018',
		'description': 'I flew across the country for a concert. <br> My first trip after moving to LA.',
		'lat': 40.7128,
		'lon': -74.0060,
        'img': "https://raw.githubusercontent.com/natgrace/DH151/1804339e9e59c6ae6a0e572730e58053798bd521/Week%202/nyc.jpg"
	},
	]

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);



// create a feature group 
let myMarkers = L.featureGroup();

// loop through data 

let icon = L.icon({
	iconUrl: 'https://raw.githubusercontent.com/natgrace/DH151/main/Week3/icons8-camera-100.png',
	iconSize: [50, 50],
	iconAnchor: [29, 49],
	popupAnchor: [0, -41],
})


data.forEach(function(item,index){
	let marker = L.marker([item.lat,item.lon], {icon: icon}).addTo(map)
		    .bindPopup("<center> <h2>" + item.title + "</h2>" + item.description + "<p>" + "<img src ='" + item.img + "' style='width:200px;height:200px;'/> ")
			.openPopup()
	


	myMarkers.addLayer(marker)

		$('.sidebar').append(`<div class="sidebar-item"
		onclick="flyToIndex(${index})">${item.title}</div>`)				
}); 

myMarkers.addTo(map)

//define layers
let layers = {
	"My Markers": myMarkers
}

L.control.layers(null,layers).addTo(map)

function flyToIndex(index){
	map.flyTo([data[index].lat + 0.3,data[index].lon],10)
	myMarkers.getLayers()[index].openPopup()

}

