const makeElement = () => ({ type: Title, props: { color: 'red', children: 'Hello, Child!' } });

// IMPERATIVE
const toLowerCase = (input) => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase());
  }
  return output;
};

// DECLARATIVE
const toLowerCase = (input) => input.map((value) => value.toLowerCase());

// IMPERATIVE
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: myLatLng
});

const marker = new google.maps.Marker({ position: myLatLng, title: 'Work Location' });

marker.setMap(map);

// DECLARATIVE
const reactMap = (
  <Gmaps zoom={4} center={myLatLng}>
    <Marker position={myLatLng}>Work location</Marker>
  </Gmaps>
);
