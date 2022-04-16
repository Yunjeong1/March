var mapContainer = document.getElementById('map');
const contact = document.querySelector('.contact');
const articles = contact.querySelectorAll('article');
const branch_btns = contact.querySelectorAll('span');
var drag = true;
var zoom = false;

//map
mapOption = {
	center: new kakao.maps.LatLng(37.51199745517824, 127.09855357200387),
	level: 3,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions = [
	{
		title: '잠실점',
		latlng: new kakao.maps.LatLng(37.51199745517824, 127.09855357200387),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(40, 64),
		imgPos: { offset: new kakao.maps.Point(20, 64) },
		button: branch_btns[2],
	},
	{
		title: '강남점',
		latlng: new kakao.maps.LatLng(37.50217213555704, 127.02516882411847),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(40, 64),
		imgPos: { offset: new kakao.maps.Point(20, 99) },
		button: branch_btns[1],
	},
	{
		title: '명동점',
		latlng: new kakao.maps.LatLng(37.56250041835499, 126.98516157408622),
		imgSrc: 'img/marker.png',
		imgSize: new kakao.maps.Size(40, 64),
		imgPos: { offset: new kakao.maps.Point(20, 64) },
		button: branch_btns[0],
	},
];

for (let i = 0; i < markerOptions.length; i++) {
	new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: new kakao.maps.MarkerImage(
			markerOptions[i].imgSrc,
			markerOptions[i].imgSize,
			markerOptions[i].imgPos
		),
	});

	branch_btns.forEach((el, index) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			if (e.currentTarget.classList.contains('on')) return;
			moveTo(markerOptions[index].latlng);

			for (let btn of branch_btns) {
				btn.classList.remove('on');
			}
			branch_btns[index].classList.add('on');

			for (let article of articles) {
				article.classList.remove('on');
			}
			articles[index].classList.add('on');
		});
	});
}

window.addEventListener('resize', () => {
	let active_btn = document.querySelector('.branch span.on');
	let active_index = active_btn.getAttribute('data-index');
	map.setCenter(markerOptions[active_index].latlng);
});

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

kakao.maps.event.addListener(map, 'center_changed', function () {
	var level = map.getLevel();
	var latlng = map.getCenter();
});

setDraggable(drag);
function setDraggable(draggable) {
	map.setDraggable(draggable);
}

setZoomable(zoom);
function setZoomable(zoomable) {
	map.setZoomable(zoomable);
}

function moveTo(target) {
	var moveLatLon = target;
	map.setCenter(moveLatLon);
}
