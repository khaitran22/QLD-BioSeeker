function zoomInBackgroundImage(string) {
	$(string).css({
		"-webkit-transform": "scale(1.1)",
		"-moz-transform": "scale(1.1)",
		"-ms-transform": "scale(1.1)",
		"-o-transform": "scale(1.1)",
		"transform": "scale(1.1)",
		"transition": "all 0.5s ease",
	});

	$(string + " img").css({
		"box-shadow": "10px 10px 8px rgb(0 0 0 / 30%)",
		"transition": "all 0.5s ease",
	});
}

function zoomOutBackgroundImage(string) {
	$(string).css({
		"-webkit-transform": "scale(1)",
		"-moz-transform": "scale(1)",
		"-ms-transform": "scale(1)",
		"-o-transform": "scale(1)",
		"transform": "scale(1)",
		"transition": "all 0.5s ease"
	});

	$(string + " img").css({
		"box-shadow": "0 0 0 rgb(0 0 0 / 30%)",
		"transition": "all 0.5s ease",
	});
}

$('#rainforest_environment').mouseenter(function () {
	zoomInBackgroundImage('#rainforest_environment');
});
$('#rainforest_environment').mouseleave(function () {
	zoomOutBackgroundImage('#rainforest_environment');
});

$('#outback_environment').mouseenter(function () {
	zoomInBackgroundImage('#outback_environment');
});
$('#outback_environment').mouseleave(function () {
	zoomOutBackgroundImage('#outback_environment');
});

$('#rainforest_environment, #outback_environment').click(function (e) {
	window.open('./rain_forest.html', "_self");
});

$('#outback_environment').click(function (e) {
	window.open('./outback.html', "_self");
});

var path = window.location.pathname;
var page = path.split("/").pop();

//#region HOMEPAGE
function mouse_move(id, top, left, e) {
	$(id).offset({
		top: top - e.pageY,
		left: left - e.pageX
	});
}

function closePage(id) {
	$(id).css("width", 0);
}

$('#reference_button').click(function () {
	$('.reference').css("width", "100%");
});

$('#About').click(function () {
	$('.about_us').css({
		"width": "100%",
	});
});

$('#About, #reference_button').mouseenter(function () {
	$(this).css({
		"background-color": "#85d000",
		"transition": "all 0.3s ease",
		"font-weight": "bold",
	});
});

$('#About, #reference_button').mouseleave(function () {
	$(this).css({
		"background-color": "transparent",
		"transition": "all 0.3s ease",
		"font-weight": "normal",
	});
});

function closeReference() {
	closePage('.reference');
}

function closeAbout() {
	closePage('.about_us');
}

$('.logo').click(function (e) {
	window.open('./index.html', "_self");
});

$('.logo').mouseenter(function () {
	$(this).css("cursor", "pointer");
});

if (page != 'index.html') {
	function additionalDetails(id, title) {
		$(function () {
			$(id).tooltip({
				trigger: 'hover',
				html: true,
				title: title
			});
		});


		$(id).mouseleave(function () {
			$(this).tooltip('hide');
		});
	}

	additionalDetails('#next_envi_button', 'Do you want visit the next environment?');
}



var user_visit_next_envi = true;


if (page == 'rain_forest.html') {
	//#region DEFINE CONSTANT
	const square_position_top = $('.cassowary').offset().top;
	const square_position_left = $('.cassowary').offset().left;
	const cassorawy_cover_top = $('.cassowary_cover').offset().top;
	const cassowary_cover_left = $('.cassowary_cover').offset().left;
	const brown_snake_top = $('.brown_snake').offset().top;
	const brown_snake_left = $('.brown_snake').offset().left;
	const tree_kangaroo_top = $('.tree_kangaroo').offset().top;
	const tree_kangaroo_left = $('.tree_kangaroo').offset().left;
	const lace_monitor_top = $('.lace_monitor').offset().top;
	const lace_monitor_left = $('.lace_monitor').offset().left;
	const sound_button_top = $('.sound_button').offset().top;
	const whip_bird_top = $('.whip_bird').offset().top;
	const whip_bird_left = $('.whip_bird').offset().left;

	var i = 0;
	var audio = null;
	var audio_background = null;
	var element = ['.brown_snake', '.cassowary', '.tree_kangaroo', '.lace_monitor', '.whip_bird'];
	var sounds = ['./sound/Snake_Shake_Sound.mp3', './sound/Cassowary_Shake_Sounds.mp3', null, './sound/Lace_Monitor_Shake_Sound.mp3', './sound/Whip_Bird_Sounds.mp3']
	var sounds_detail = {
		'cassowary_animal': './sound/Cassowary_Sounds.mp3',
		'brown_snake_animal': './sound/Snake_Slivering_Sound.mp3',
		'tree_kangaroo_animal': null,
		'lace_monitor_animal': './sound/Lace_Monitor_Walking_Sound.mp3',
		'whip_bird_animal': './sound/Whip_Bird_Sounds.mp3'
	}
	var titles = ["<b>Eastern Brown Snake</b> <p>Don't mess with me!</p>", "<b>Cassorawy</b> <p>I can run faster than your car.!!</p>", "<b>Tree Kangaroo</b> <p>Hello cuties!</p>", "<b>Lace Monitor</b> <p>Leave me aloneee!</p>", "<b>Eastern Whip Bird</b> <p>I'm Beyoncé</p>"]
	var animal_taxionids = ['1087', '522', '920', '61', '1623'];
	var animal_ids = ['cassowary_animal', 'brown_snake_animal', 'tree_kangaroo_animal', 'lace_monitor_animal', 'whip_bird_animal']
	var texts = {};
	var background_parallax = {
		'cassowary_animal': "url('./images/parallax/cassorawy/Leaves overlay 2.png'), url('./images/parallax/cassorawy/Leaves overlay 1.png'), url('./images/parallax/cassorawy/Fern.png'), url('./images/parallax/cassorawy/Fern 2.png'), url('./images/parallax/cassorawy/Cassowary.png'), url('./images/parallax/cassorawy/Back Layer.png')",
		'brown_snake_animal': "url('./images/parallax/brown snake/front_ferns.png'), url('./images/parallax/brown snake/snake.png'), url('./images/parallax/brown snake/moss_rock.png'), url('./images/parallax/brown\ snake/rainforest_background.png')",
		'tree_kangaroo_animal': "url('./images/parallax/tree kangaroo/leves_overlay2.png'), url('./images/parallax/tree kangaroo/leves_overlay1.png'), url('./images/parallax/tree kangaroo/Tree_Front_Layer.png'), url('./images/parallax/tree\ kangaroo/Tree_Front_Layer2.png'), url('./images/parallax/tree\ kangaroo/Tree_Kangaroo.png'), url('./images/parallax/tree\ kangaroo/Tree_Back_Layer.png')",
		'lace_monitor_animal': "url('./images/parallax/lace monitor/leaves3.png'), url('./images/parallax/lace monitor/leaves2.png'), url('./images/parallax/lace monitor/leaves1.png'), url('./images/parallax/lace\ monitor/lizard.png'), url('./images/parallax/lace\ monitor/back_layer.png')",
		'whip_bird_animal': "url('./images/parallax/whip bird/Layer 4.png'), url('./images/parallax/whip bird/Layer 3.png'), url('./images/parallax/whip bird/Layer 2.png'), url('./images/parallax/whip bird/Whip bird.png')"
	};

	var content = {
		'cassowary_animal': "<p>Adult southern cassowaries are 1.5 to 1.8 m (5 to 6 ft) tall, although some females may reach 2 m (6.6 ft) and weigh 58.5 kg (130 lb).</p><p> Cassowaries have three-toed feet with sharp claws. The second toe, the inner one in the medial position, sports a dagger-like claw that may be 125 mm (5 in) long. Cassowaries can run at up to 50 km/h (30 mph) through the dense forest and can jump up to 1.5 m (5 ft). They are good swimmers, crossing wide rivers and swimming in the sea.</p><p>Cassowaries are predominantly frugivorous, but omnivorous opportunistically when small prey is available. Besides fruits, their diet includes flowers, fungi, snails, insects, frogs, birds, fish, rats, mice, and carrion. Fruit from at least 26 plant families has been documented in the diet of cassowaries. Fruits from the laurel, podocarp, palm, wild grape, nightshade, and myrtle families are important items in the diet. The cassowary plum takes its name from the bird.</p>",
		'brown_snake_animal': "<p>The brown tree snake (Boiga irregularis), also known as the brown cat snake, is an arboreal rear-fanged colubrid snake native to eastern and northern coastal Australia, eastern Indonesia (Sulawesi to Papua), Papua New Guinea, and many islands in northwestern Melanesia. This snake is infamous for being an invasive species responsible for extirpating the majority of the native bird population in Guam. It is also one of the very few colubrids found in Australia, where elapids are more common.</p><p>The brown tree snake is a nocturnal, arboreal species that uses visual and chemical cues in hunting in the tropical rainforest canopy and/or on the ground. It is a member of the subfamily Colubrinae, genus Boiga, which is a group of roughly twenty five species that are referred to as \"cat-eyed\" snakes for their vertical pupils. The brown tree snake is generally 1–2 m (3–6 ft) in length in its native range. The snake is long and slender, which facilitates its climbing ability and allows it to pass through tiny spaces in buildings, logs, and other shaded locations, where it seeks refuge during daylight. Variations in coloration occur in the snake's native range, ranging from a lightly patterned brown to yellowish/green or even beige with red, saddle-shaped blotches. They are rear-fanged, have a large head in relation to their body, and can survive for extended periods of time without food.</p>",
		'tree_kangaroo_animal': "<p>Bennett's tree-kangaroo (Dendrolagus bennettianus) is a large tree-kangaroo. Males can weigh from 11.5 kg up to almost 14 kg (25 to 31 lbs), while the females range between about 8 to 10.6 kg (17.6 to 23 lbs). They are very agile and are able to leap 9 metres (30 ft) down to another branch and have been known to drop as far as 18 metres (59 ft) to the ground without injury.</p><p>Like other tree-kangaroos it has longer forelimbs and shorter hind limbs than terrestrial kangaroos and a long bushy tail. It is mostly dark brown above and lighter fawn on chin, throat and lower abdomen. The forehead and muzzle are greyish. The feet and hands are black. The tail has a black patch at the base and a light patch on the upper part. The ears are short and rounded</p><p>This very elusive (or \"cryptic\") tree-kangaroo is found in both mountain and lowland tropical rain forests south of Cooktown, Queensland to just north of the Daintree River; an area of only about 70 km by 50 km (44 miles by 31 miles). It is also occasionally found in sclerophyll woodlands. It lives almost completely on the leaves of a wide range rainforest trees, notably Schefflera actinophylla (the umbrella tree), vines, ferns and various wildfruits.</p>",
		'lace_monitor_animal': "<p>The lace monitor or tree goanna (Varanus varius) is a member of the monitor lizard family native to eastern Australia. A large lizard, it can reach 2 metres (6.6 ft) in total length and 14 kilograms (31 lb) in weight. The lace monitor is considered to be a least-concern species according to the International Union for Conservation of Nature.</p><p>The second-largest monitor in Australia after the perentie, the lace monitor can reach 2 m (7 ft) in total length, or 76.5 cm snout–vent length (SVL), and weigh up to 14 kg (30 lb). The male reaches sexual maturity when it has a SVL of 41.5 cm. Females are generally smaller than males, with a maximum SVL of 57.5 cm, and becoming sexually mature at a SVL of 38.5 cm. The tail is long and slender and about 1.5 times the length of the head and body.The tail is cylindrical at its base, but becomes laterally compressed towards the tip. Historically, it has been described as growing as much as 8 ft long. Regardless of the accuracy of these reports, lace monitors of such size likely no longer exist.</p><p>These common terrestrial and often arboreal monitors are found in eastern Australia and range from Cape Bedford on Cape York Peninsula to south-eastern South Australia. They frequent both open and closed forests and forage over long distances (up to 3 km (1.9 miles) a day). The lace monitor is considered to be a least-concern species according to the International Union for Conservation of Nature. They are mainly active from September to May, but are inactive in cooler weather and shelter in tree hollows or under fallen trees or large rocks.</p>",
		'whip_bird_animal': "<p>The eastern whipbird (Psophodes olivaceus) is an insectivorous passerine bird native to the east coast of Australia. Its whip-crack song is a familiar sound in forests of eastern Australia. Two subspecies are recognised. Heard much more often than seen, it is dark olive-green and black in colour with a distinctive white cheek patch and a crest. The male and female are similar in plumage.</p><p>A slim bird some 26–30 cm (10–12 in) in length and 47–72 grams (1.7–2.5 oz) in weight, it is olive green with a black head and breast. It has a small black crest with a white cheek-patch on its face. It has a paler abdomen with a long dark olive-green tail tipped with white. The iris is brown and bill is black with blackish feet. The male is slightly larger than the female. Juveniles are a duller olive-brown and lack the white cheek stripes and dark throat.The eastern whipbird is generally shy, and is heard much more often than seen. It’s long drawn out call - a long note, followed by a \"whip crack\" (which is the source of the common name) and some follow on notes - is one of the most distinctive sounds of the eastern Australian bush. The call is usually a duet between the male and female, the male producing the long note and whip crack and female the following notes. Calls are most frequent in the early morning, though do occur through the day with small peaks at noon and sunset. Though male calls are consistent across the species range, a high degree of variation in female calls has been reported. The call samples have been used in many films such as: Bush Christmas 1983 and The Dark Crystal 1982.</p><p>The eastern whipbird is found in wet temperate forests including both rainforests and wet sclerophyll forests, generally near water. It occurs from eastern Victoria north through to central Queensland. A northern race, sometimes known as the northern whipbird (Psophodes olivaceus lateralis) is found in the wet tropics of North Queensland from Cooktown to Townsville. At least one study has found it to be a specialist species in terms of habitat and threatened by urbanisation.</p>"
	}

	var background_detailed = {
		'cassowary_animal': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Cassowary.gif')",
		'brown_snake_animal': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Brown_Snake.gif')",
		'tree_kangaroo_animal': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Tree_Kangaroo.gif')",
		'lace_monitor_animal': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Lace_Monitor.gif')",
		'whip_bird_animal': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Whip_Bird.gif')"
	}

	var found = {
		'cassowary_animal': false,
		'brown_snake_animal': false,
		'tree_kangaroo_animal': false,
		'lace_monitor_animal': false,
		'whip_bird_animal': false
	}

	var is_sound_on = false;
	var is_detail_page_open = false;
	var clicked_id = null;
	var audio_detail = null;
	var found_animal = 0;
	//#endregion

	//#region LOADING ANIMAL DATA
	for (let order = 0; order < animal_ids.length; order++) {
		$.getJSON("https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + animal_taxionids[order] + '"', function (data) {
			texts[animal_ids[order]] = data.Species;
		});
	}

	function nextEnvi() {
		window.open('./outback.html', "_self");
	}
	//#endregion
	function closeSplash() {
		$('#splashWrapper').css({
			"opacity": "0",
			"height": "0",
			"width": "0"
		});

		audio_background = new Audio('./sound/Rainforest Sound.mp3');
		audio_background.loop = true;
		setInterval(function () {
			audio_background.play();
		}, 100);

		setInterval(function () {
			shakeAndSound(is_detail_page_open);
		}, 4000);
	}



	$('#background-image').mousemove(function (e) {
		e.preventDefault();
		var pageX = -e.pageX + "px";
		var pageY = -e.pageY + "px";

		$(this).css("background-position", pageX + " " + pageY);
		mouse_move('.cassowary', square_position_top, square_position_left, e);
		mouse_move('.cassowary_cover', cassorawy_cover_top, cassowary_cover_left, e);
		mouse_move('.brown_snake', brown_snake_top, brown_snake_left, e);
		mouse_move('.tree_kangaroo, .tree_kangaroo_cover', tree_kangaroo_top, tree_kangaroo_left, e);
		mouse_move('.lace_monitor', lace_monitor_top, lace_monitor_left, e);
		mouse_move('.whip_bird, .whip_bird_cover', whip_bird_top, whip_bird_left, e);
	});


	$('.cassowary_cover, #tree_kangaroo_cover, .whip_bird_cover').click(function () {
		$(this).fadeOut("slow", function () {
			$(this).css("display", "none");
		});
	});



	function shakeAndSound(is_detail_page_open) {
		if (!is_detail_page_open) {
			if (i >= element.length) {
				i = 0;
			}

			if (i < element.length) {
				var current_class = element[i];
				var sound = sounds[i];

				$(current_class).effect('shake', {
					times: 10,
					distance: 5
				}, 30);

				if (sound != null) {
					if (audio != null) {
						audio.pause();
						audio.currentTime = 0;
					}
					audio = new Audio(sound);
					audio.play();
				}
			}
			i += 1;
		}
		else {
			if (audio != null) {
				audio.pause();
				audio.currentTime = 0;
			}

		}
	}
	//#endregion

	//#region DETAIL PAGE

	$('#detailpage').mousemove(function (e) {
		const w = $('#detailpage').innerWidth() / 2;
		const h = $('#detailpage').innerHeight() / 2;
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var depth_1 = (50 + (mouseX - w) * 0.01) + "% " + (50 + (mouseY - h) * 0.01) + "%";
		var depth_2 = (50 + (mouseX - w) * 0.02) + "% " + (50 + (mouseY - h) * 0.02) + "%";
		var depth_3 = (50 + (mouseX - w) * 0.04) + "% " + (50 + (mouseY - h) * 0.04) + "%";
		var depth_4 = (50 + (mouseX - w) * 0.06) + "% " + (50 + (mouseY - h) * 0.06) + "%";
		var depth_5 = (50 + (mouseX - w) * 0.08) + "% " + (50 + (mouseY - h) * 0.08) + "%";
		var depth_6 = (50 + (mouseX - w) * 0.1) + "% " + (50 + (mouseY - h) * 0.1) + "%";
		var depth = depth_6 + ', ' + depth_5 + ', ' + depth_4 + ', ' + depth_3 + ', ' + depth_2 + ', ' + depth_1;
		$('.parallax').css("background-position", depth);
	});

	function getClassName(data) {
		var className = data.ClassName + " (<i>" + data.ClassCommonName + "</i>)";
		return className;
	}

	function getFamilyName(data) {
		var familyName = data.FamilyName + " (<i>" + data.FamilyCommonName + "</i>)";
		return familyName;
	}

	function getScientificName(data) {
		var scientificName = data.ScientificName.split(" (")[0];
		return scientificName;
	}

	function getAnimalType(data) {
		var type = data.ClassCommonName.charAt(0).toUpperCase() + data.ClassCommonName.slice(1);
		return type;
	}

	function getConserStatus(data) {
		return data.ConservationStatus.NCAStatus;
	}

	function getAnimalCharacteristics(data) {
		var characteristics = "N/A";

		if (data.PestStatus != "Nil") {
			return data.PestStatus;
		}

		return characteristics;
	}

	function getAnimalDetails(data, id) {
		var animalDetail = "<div class='col-lg-5'><div class='content-detailpage border'><p><b>CLASS:</b> <i>" + getClassName(data) + "</i></p>" + "<p><b>FAMILY:</b> <i>" + getFamilyName(data) + "</i></p>" + "<p><b>SCIENCETIFIC NAME:</b> <i>" + getScientificName(data) + "</i></p>" + "<p><b>TYPE:</b> " + getAnimalType(data) + "</p>" + "<p><b>CHARACTERISTICS:</b> " + getAnimalCharacteristics(data) + "</p></div>" + "<div class='border'><h4 class='conser_status'>NCA Conservation Status: " + getConserStatus(data) + "</h4><div class='conservation-status-container'><div>UN</div><div>LC</div><div>NT</div><div>VU</div><div>EN</div><div>CR</div><div>EW</div><div>EX</div></div><div class='row addition_explain'><div class='col-lg-6'>UNKNOWN</div><div class='col-lg-6 class_test'>EXTINCT</div></div></div><img class='map' src='" + 'https://biocache.ala.org.au/ws/density/map?q=' + getScientificName(data) + "'></div>" + "<div class='col-lg-7'><div class='parallax'></div><div class='description'><h2>Description</h2>" + content[id] + "</div></div>";
		return animalDetail;
	}

	function displayConserStatus(data) {
		var conserCode = data.ConservationStatus.NCAStatusCode;
		var pos = 0;
		switch (conserCode) {
			case "C": case "SL":
				pos = 2;
				break;
			case "NT":
				pos = 3;
				break;
			case "V":
				pos = 4;
				break;
			case "E":
				pos = 5;
				break;
			case "CR":
				pos = 6;
				break;
			case "PE":
				pos = 7;
				break;
			case "EX":
				pos = 8;
				break;
			default:
				pos = 1;
				break;
		}

		return ".conservation-status-container div:nth-child(" + pos + ")";
	}

	function changeBackgroundSoundVolume(is_detail_page_open) {
		var volume;
		if (is_detail_page_open) {
			volume = 0.3;
		}
		else {
			volume = 1.0;
		}
		audio_background.volume = volume;
		shakeAndSound(is_detail_page_open);
	}

	$('body').on('click', function (e) {
		e.preventDefault();
		var id = e.target.id;
		if (animal_ids.includes(id)) {

			clicked_id = id;
			if (found[id] == false) {
				found[id] = true;
				found_animal++;
				$('.check_list_animal ul').append("<li>" + (texts[id].AcceptedCommonName.split(" (")[0]).toUpperCase() + "</li>");
				$('.check_list_animal p').replaceWith("<p>You have " + (Object.keys(found).length - found_animal) + " animals left!</p>");
			}
			$('#detailpage').css("width", "100%");
			is_detail_page_open = true;
			changeBackgroundSoundVolume(is_detail_page_open);
			$('.title-detail-page').empty();
			$('.title-detail-page').append("<p class='title'>" + (texts[id].AcceptedCommonName.split(" (")[0]).toUpperCase() + "</p>");
			$('.content-structure').empty();
			var detail = getAnimalDetails(texts[id], id);
			$('.content-structure').append(detail);
			$('.parallax').css({
				"position": "relative",
				"width": "120%",
				"height": "80vh",
				"background-image": background_parallax[id],
				"background-repeat": "no-repeat",
				"background-position": "top",
				"background-position": "50% 50%",
				"background-size": "800px",
				"margin-left": "10%"
			});

			$('.detailedpage').css({
				"background-image": background_detailed[id],
				"background- position": "center",
				"background-repeat": "no-repeat",
				"background-size": "cover",
			});

			$(displayConserStatus(texts[id])).addClass('active');
		}
	});


	function closeDetailPage() {
		$('#detailpage').css("width", "0");
		audio_background.volume = 1.0;
		is_sound_on = false;
		is_detail_page_open = false;
		changeBackgroundSoundVolume(is_detail_page_open);
		$('#sound_button').empty();
		$('#sound_button').append("<i class='fas fa-circle-thin fa-volume-mute'></i>");
		if (audio_detail != null && !audio_detail.paused) {
			audio_detail.pause();
			audio_detail.currentTime = 0;
		}
		clicked_id = null;
		if (found_animal == Object.keys(found).length && user_visit_next_envi == true) {
			$('#congrat_popup').css("width", "100%");
		}
	}


	function closeCongrat() {
		closePage('#congrat_popup');
		user_visit_next_envi = false;
		if (found_animal == Object.keys(found).length) {
			$('#next_envi_button').css("visibility", "visible");
		}
	}

	$('#next_envi_button').click(function () {
		window.open('./outback.html', "_self");
	});

	$('#sound_button').click(function () {
		$(this).empty();
		if (is_sound_on == false) {
			$(this).append("<i class='fas fa-circle-thin fa-volume-up'></i>");
			if (sounds_detail[clicked_id] != null) {
				audio_detail = new Audio(sounds_detail[clicked_id]);
				audio_detail.play();
				audio_detail.loop = true;
			}
		}
		else {
			$(this).append("<i class='fas fa-circle-thin fa-volume-mute'></i>");
			audio_detail.pause();
		}
		is_sound_on = !is_sound_on;
	});
	//#endregion

	//#endregion
	$(document).ready(function () {


		for (let j = 0; j < element.length; j++) {
			additionalDetails(element[j], titles[j]);
		}

		$.ajaxSetup({ cache: true });
	});
}
else if (page == 'outback.html') {
	const kangaroo_top = $('.kangaroo').offset().top;
	const kangaroo_left = $('.kangaroo').offset().left;
	const crocodial_top = $('.crocodial').offset().top;
	const crocodial_left = $('.crocodial').offset().left;
	const crocodia_cover_top = $('.crocodial_cover').offset().top;
	const crocodia_cover_left = $('.crocodial_cover').offset().left;
	const dingo_top = $('.dingo').offset().top;
	const dingo_left = $('.dingo').offset().left;
	const koala_top = $('.koala').offset().top;
	const koala_left = $('.koala').offset().left;
	const cockatoo_top = $('.black_cockatoo').offset().top;
	const cockatoo_left = $('.black_cockatoo').offset().left;

	var element = ['.kangaroo', '.crocodial', '.dingo', '.koala', '.black_cockatoo'];
	var sounds = ['./sound/Kangaroo Shake Sound.mp3', './sound/Crocodile Shake Sound.mp3', './sound/Dingo Shake Sound.mp3', './sound/Koala Shake Sound.mp3', './sound/Black Cockatoo Shake Soundl.mp3'];
	var is_detail_page_open = false;
	var i = 0;
	var titles = ["<b>Kangaroo</b> <p>You wanna fight?</p>", "<b>Crocodile</b> <p>I'm sexyyyy</p>", "<b>Dingo</b> <p>Shark isn't my worries!</p>", "<b>Koala</b><p>Hola, I'm Koala</P>", "<b>Black Cockatoo</b><p>I'm prettier than your whip bird..!</p>"]
	var animal_ids = ['kangaroo', 'crocodial', 'dingo', 'koala', 'black_cockatoo']
	var animal_taxionids = ['901', '584', '1068', '860', '1196'];
	var texts = {};
	var is_sound_on = false;
	var is_detail_page_open = false;
	var clicked_id = null;
	var audio_detail = null;
	var found_animal = 0;
	var found = {
		'kangaroo': false,
		'crocodial': false,
		'dingo': false,
		'koala': false,
		'black_cockatoo': false
	}
	var audio_background = null;
	var background_parallax = {
		'kangaroo': "url('./images/parallax/Kangaroo/kangaroo fern.png'), url('./images/parallax/Kangaroo/kangaroo rock.png'), url('./images/parallax/Kangaroo/kangaroo main.png'), url('./images/parallax/Kangaroo/kangaroo clouds.png')",
		'crocodial': "url('./images/parallax/Crocodile/croc main.png'), url('./images/parallax/Crocodile/croc bush1.png'), url('./images/parallax/Crocodile/croc bush2.png'), url('./images/parallax/Crocodile/croc leaves1.png'), url('./images/parallax/Crocodile/croc leaves2.png'), url('./images/parallax/Crocodile/croc leaves3.png'), url('./images/parallax/Crocodile/croc background.png')",
		'dingo': "url('./images/parallax/Dingo/Bush_grass.png'), url('./images/parallax/Dingo/dingo.png'), url('./images/parallax/Dingo/sand_dune.png'), url('./images/parallax/Dingo/background_grass.png')",
		'koala': "url('./images/parallax/Koala/koala eucalyptus branch3.png'), url('./images/parallax/Koala/koala eucalyptus branch2.png'), url('./images/parallax/Koala/koala eucalyptus branch1.png'), url('./images/parallax/Koala/koala eucalyptus leaves2.png'), url('./images/parallax/Koala/koala image.png'), url('./images/parallax/Koala/koala eucalyptus leaves2.png'), url('./images/parallax/Koala/koala eucalyptus leaves3.png')",
		'black_cockatoo': "url('./images/parallax/cockatoo/front_bush_grass_1.png'), url('./images/parallax/cockatoo/banksia_tilt_shift2.png'), url('./images/parallax/cockatoo/banksia_layer_3.png'), url('./images/parallax/cockatoo/black_cockatoo_4.png'), url('./images/parallax/cockatoo/black_cockatoo_background_5.png')"
	};

	var content = {
		'kangaroo': "<p>The kangaroo is a marsupial from the family Macropodidae (macropods, meaning \"large foot\"). In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo. Kangaroos are indigenous to Australia and New Guinea. The Australian government estimates that 42.8 million kangaroos lived within the commercial harvest areas of Australia in 2019, down from 53.2 million in 2013.</p><p> As with the terms \"wallaroo\" and \"wallaby\", \"kangaroo\" refers to a paraphyletic grouping of species. All three refer to members of the same taxonomic family, Macropodidae, and are distinguished according to size. The largest species in the family are called \"kangaroos\" and the smallest are generally called \"wallabies\". The term \"wallaroos\" refers to species of an intermediate size. There are also the tree-kangaroos, another type of macropod, which inhabit the tropical rainforests of New Guinea, far northeastern Queensland and some of the islands in the region. Kangaroos have large, powerful hind legs, large feet adapted for leaping, a long muscular tail for balance, and a small head. Like most marsupials, female kangaroos have a pouch called a marsupium in which joeys complete postnatal development.</p><p>Because of its grazing habits, the kangaroo has developed specialized teeth that are rare among mammals. Its incisors are able to crop grass close to the ground and its molars chop and grind the grass. Since the two sides of the lower jaw are not joined or fused together, the lower incisors are farther apart, giving the kangaroo a wider bite. The silica in grass is abrasive, so kangaroo molars are ground down and they actually move forward in the mouth before they eventually fall out, and are replaced by new teeth that grow in the back. This process is known as polyphyodonty and, amongst other mammals, only occurs in elephants and manatees.</p>",
		'crocodial': "<p>Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae), and all other living and fossil Crocodylomorpha.</p><p> Although they appear similar, crocodiles, alligators and the gharial belong to separate biological families. The gharial, with its narrow snout, is easier to distinguish, while morphological differences are more difficult to spot in crocodiles and alligators. The most obvious external differences are visible in the head, with crocodiles having narrower and longer heads, with a more V-shaped than a U-shaped snout compared to alligators and caimans. Another obvious trait is that the upper and lower jaws of the crocodiles are the same width, and the teeth in the lower jaw fall along the edge or outside the upper jaw when the mouth is closed; therefore, all teeth are visible, unlike an alligator, which possesses in the upper jaw small depressions into which the lower teeth fit. Another trait that separates crocodiles from other crocodilians is their much higher levels of aggression.</p><p>Crocodile size, morphology, behaviour and ecology differ somewhat among species. However, they have many similarities in these areas as well. All crocodiles are semiaquatic and tend to congregate in freshwater habitats such as rivers, lakes, wetlands and sometimes in brackish water and saltwater. They are carnivorous animals, feeding mostly on vertebrates such as fish, reptiles, birds and mammals, and sometimes on invertebrates such as molluscs and crustaceans, depending on species and age. All crocodiles are tropical species that, unlike alligators, are very sensitive to cold. They separated from other crocodilians during the Eocene epoch, about 55 million years ago. Many species are at the risk of extinction, some being classified as critically endangered.</p>",
		'dingo': "<p>The dingo (Canis familiaris, Canis familiaris dingo, Canis dingo, or Canis lupus dingo) is an ancient (basal) lineage of dog found in Australia. The dingo is a medium-sized canine that possesses a lean, hardy body adapted for speed, agility, and stamina. The dingo's three main coat colourations are light ginger or tan, black and tan, or creamy white. The skull is wedge-shaped and appears large in proportion to the body. The dingo is closely related to the New Guinea singing dog and the New Guinea Highland wild dog: their lineage split early from the lineage that led to today's domestic dogs, and can be traced back through the Malay Archipelago to Asia.</p><p> The dingo's habitat covers most of Australia, but they are absent in the southeast and Tasmania, and an area in the southwest (see map). As Australia's largest extant terrestrial predators, dingoes prey on mammals up to the size of the large red kangaroo, in addition to birds, reptiles, fish, crabs, frogs, insects, and seeds. The dingo's competitors include the native quoll, the introduced European red fox and the feral cat. A dingo pack usually consists of a mated pair, their offspring from the current year, and sometimes offspring from the previous year.</p><p>The first British colonists who settled at Port Jackson in 1788 recorded dingoes living with indigenous Australians, and later at Melville Island in 1818, and the lower Darling and Murray rivers in 1862, indicating that dingoes were under some form of domestication by aboriginal Australians. When livestock farming began expanding across Australia in the early 19th century, dingoes began preying on sheep and cattle. Numerous population-control measures have been implemented since then, with only limited success. The dingo is recognised as a native animal under the laws of all Australian jurisdictions. The dingo plays a prominent role in the Dreamtime stories of indigenous Australians; however, it rarely appears depicted in their cave paintings when compared with the extinct thylacine, also known as the Tasmanian wolf or Tasmanian tiger.</p>",
		'koala': "<p>The <b>koala</b> or, inaccurately, <b>koala bear</b> (<i>Phascolarctos cinereus</i>), is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which are members of the family Vombatidae. The koala is found in coastal areas of the mainland's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia. It is easily recognisable by its stout, tailless body and large head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60–85 cm (24–33 in) and weighs 4–15 kg (9–33 lb). Fur colour ranges from silver grey to chocolate brown. Koalas from the northern populations are typically smaller and lighter in colour than their counterparts further south. These populations possibly are separate subspecies, but this is disputed.</p><p> Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. They are asocial animals, and bonding exists only between mothers and dependent offspring. Adult males communicate with loud bellows that intimidate rivals and attract mates. Males mark their presence with secretions from scent glands located on their chests. Being marsupials, koalas give birth to underdeveloped young that crawl into their mothers' pouches, where they stay for the first six to seven months of their lives. These young koalas, known as joeys, are fully weaned around a year old. Koalas have few natural predators and parasites, but are threatened by various pathogens, such as Chlamydiaceae bacteria and the koala retrovirus.</p>",
		'black_cockatoo': "<p>Red-tailed black cockatoos are around 60 centimetres (24 in) in length and sexually dimorphic. The male's plumage is all black with a prominent black crest made up of elongated feathers from the forehead and crown. The bill is dark grey. The tail is also black with two lateral bright red panels. Females are black with yellow-orange stripes in the tail and chest, and yellow grading to red spots on the cheeks and wings. The bill is pale and horn-coloured. The underparts are barred with fine yellow over a black base. Male birds weigh between 670 and 920 grams (1.5–2 lb), while females weigh slightly less at 615–870 grams (1.25–1.75 lb). In common with other cockatoos and parrots, red-tailed black cockatoos have zygodactyl feet, two toes facing forward and two backward, that allow them to grasp objects with one foot while standing on the other, for feeding and manipulation. Black cockatoos are almost exclusively left-footed (along with nearly all other cockatoos and most parrots).</p><p> Juvenile red-tailed black cockatoos resemble females until puberty, which occurs around four years of age, but have paler yellow barred underparts. As the birds reach maturity, males gradually replace their yellow tail feathers with red ones; the complete process takes around four years.</p><p>As with other cockatoos, the red-tailed black cockatoo can be very long-lived in captivity; in 1938, ornithologist Neville Cayley reported one over fifty years old at Taronga Zoo. Another bird residing at London and Rotterdam Zoos was 45 years and 5 months of age when it died in 1979.</p><p>The red-tailed black cockatoo principally occurs across the drier parts of Australia. It is widespread and abundant in a broad band across the northern half of the country, where it has been considered an agricultural pest, with more isolated distribution in the south. It is found in a wide variety of habitats, from shrublands and grasslands through eucalypt, sheoak and Acacia woodlands, to dense tropical rainforests.[5] The bird is dependent on large, old eucalypts for nesting hollows, although the specific gums used vary in different parts of the country.</p>"
	}

	var background_detailed = {
		'kangaroo': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Kangaroo.gif')",
		'crocodial': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Crocodile.gif')",
		'dingo': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Dingo.gif')",
		'koala': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Koala.gif')",
		'black_cockatoo': "linear-gradient(to bottom right, rgba(0,0,0,.7), rgba(0,0,0,.7)), url('./images/background_detail/Black Cockatoo.gif')"
	}

	var sounds_detail = {
		'kangaroo': './sound/Kangaroo Call.mp3',
		'crocodial': './sound/Crocodile Call.mp3',
		'dingo': './sound/Dingo Call.mp3',
		'koala': './sound/Koala Call.mp3',
		'black_cockatoo': './sound/Black Cockatoo Call.mp3'
	}

	//#region LOADING ANIMAL DATA
	for (let order = 0; order < animal_ids.length; order++) {
		$.getJSON("https://apps.des.qld.gov.au/species/?op=getspeciesbyid&taxonid=" + animal_taxionids[order] + '"', function (data) {
			texts[animal_ids[order]] = data.Species;
		});
	}
	// #endregion

	$('.map').css("margin", "400px auto");

	$('#background-image-outback').mousemove(function (e) {
		e.preventDefault();
		var pageX = -e.pageX + "px";
		var pageY = -e.pageY + "px";

		$(this).css("background-position", pageX + " " + pageY);
		mouse_move('.kangaroo, .kangaroo_cover', kangaroo_top, kangaroo_left, e);
		mouse_move('.crocodial, .crocodial_cover', crocodial_top, crocodial_left, e);
		mouse_move('.crocodial_cover', crocodia_cover_top, crocodia_cover_left, e);
		mouse_move('.dingo, .dingo_cover', dingo_top, dingo_left, e);
		mouse_move('.koala', koala_top, koala_left, e);
		mouse_move('.black_cockatoo', cockatoo_top, cockatoo_left, e);
	});

	$('.kangaroo_cover, .crocodial_cover, .dingo_cover').click(function () {
		$(this).fadeOut("slow", function () {
			$(this).css("display", "none");
		});
	});

	//#endregion

	//#region DETAIL PAGE

	$('#detailpage').mousemove(function (e) {
		const w = $('#detailpage').innerWidth() / 2;
		const h = $('#detailpage').innerHeight() / 2;
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var depth_1 = (50 + (mouseX - w) * 0.01) + "% " + (50 + (mouseY - h) * 0.01) + "%";
		var depth_2 = (50 + (mouseX - w) * 0.02) + "% " + (50 + (mouseY - h) * 0.02) + "%";
		var depth_3 = (50 + (mouseX - w) * 0.04) + "% " + (50 + (mouseY - h) * 0.04) + "%";
		var depth_4 = (50 + (mouseX - w) * 0.06) + "% " + (50 + (mouseY - h) * 0.06) + "%";
		var depth_5 = (50 + (mouseX - w) * 0.08) + "% " + (50 + (mouseY - h) * 0.08) + "%";
		var depth_6 = (50 + (mouseX - w) * 0.1) + "% " + (50 + (mouseY - h) * 0.1) + "%";
		var depth = depth_6 + ', ' + depth_5 + ', ' + depth_4 + ', ' + depth_3 + ', ' + depth_2 + ', ' + depth_1;
		$('.parallax').css("background-position", depth);
	});

	function getClassName(data) {
		var className = data.ClassName + " (<i>" + data.ClassCommonName + "</i>)";
		return className;
	}

	function getFamilyName(data) {
		var familyName = data.FamilyName + " (<i>" + data.FamilyCommonName + "</i>)";
		return familyName;
	}

	function getScientificName(data) {
		var scientificName = data.ScientificName.split(" (")[0];
		return scientificName;
	}

	function getAnimalType(data) {
		var type = data.ClassCommonName.charAt(0).toUpperCase() + data.ClassCommonName.slice(1);
		return type;
	}

	function getConserStatus(data) {
		return data.ConservationStatus.NCAStatus;
	}

	function getAnimalCharacteristics(data) {
		var characteristics = "N/A";

		if (data.PestStatus != "Nil") {
			return data.PestStatus;
		}

		return characteristics;
	}

	function getAnimalDetails(data, id) {
		var animalDetail = "<div class='col-lg-5'><div class='content-detailpage border'><p><b>CLASS:</b> <i>" + getClassName(data) + "</i></p>" + "<p><b>FAMILY:</b> <i>" + getFamilyName(data) + "</i></p>" + "<p><b>SCIENCETIFIC NAME:</b> <i>" + getScientificName(data) + "</i></p>" + "<p><b>TYPE:</b> " + getAnimalType(data) + "</p>" + "<p><b>CHARACTERISTICS:</b> " + getAnimalCharacteristics(data) + "</p></div>" + "<div class='border'><h4 class='conser_status'>NCA Conservation Status: " + getConserStatus(data) + "</h4><div class='conservation-status-container'><div>UN</div><div>LC</div><div>NT</div><div>VU</div><div>EN</div><div>CR</div><div>EW</div><div>EX</div></div><div class='row addition_explain'><div class='col-lg-6'>UNKNOWN</div><div class='col-lg-6 class_test'>EXTINCT</div></div></div><img class='map' src='" + 'https://biocache.ala.org.au/ws/density/map?q=' + getScientificName(data) + "'></div>" + "<div class='col-lg-7'><div class='parallax'></div><div class='description'><h2>Description</h2>" + content[id] + "</div></div>";
		return animalDetail;
	}

	function displayConserStatus(data) {
		var conserCode = data.ConservationStatus.NCAStatusCode;
		var pos = 0;
		switch (conserCode) {
			case "C": case "SL":
				pos = 2;
				break;
			case "NT":
				pos = 3;
				break;
			case "V":
				pos = 4;
				break;
			case "E":
				pos = 5;
				break;
			case "CR":
				pos = 6;
				break;
			case "PE":
				pos = 7;
				break;
			case "EX":
				pos = 8;
				break;
			default:
				pos = 1;
				break;
		}

		return ".conservation-status-container div:nth-child(" + pos + ")";
	}

	function shakeAndSound(is_detail_page_open) {
		if (!is_detail_page_open) {
			if (i >= element.length) {
				i = 0;
			}

			if (i < element.length) {
				var current_class = element[i];
				var sound = sounds[i];

				$(current_class).effect('shake', {
					times: 10,
					distance: 5
				}, 30);

				if (sound != null) {
					if (audio != null) {
						audio.pause();
						audio.currentTime = 0;
					}
					audio = new Audio(sound);
					audio.play();
				}
			}
			i += 1;
		}
		else {
			if (audio != null) {
				audio.pause();
				audio.currentTime = 0;
			}

		}
	}

	function changeBackgroundSoundVolume(is_detail_page_open) {
		var volume;
		if (is_detail_page_open) {
			volume = 0.3;
		}
		else {
			volume = 1.0;
		}
		audio_background.volume = volume;
		shakeAndSound(is_detail_page_open);
	}

	$('body').on('click', function (e) {
		e.preventDefault();
		var id = e.target.id;
		if (animal_ids.includes(id)) {

			clicked_id = id;
			if (found[id] == false) {
				found[id] = true;
				found_animal++;
				var a = texts[id];
				$('.check_list_animal ul').append("<li>" + (texts[id].AcceptedCommonName.split(" (")[0]).toUpperCase() + "</li>");
				$('.check_list_animal p').replaceWith("<p>You have " + (Object.keys(found).length - found_animal) + " animals left!</p>");
			}
			$('#detailpage').css("width", "100%");
			is_detail_page_open = true;
			changeBackgroundSoundVolume(is_detail_page_open);
			$('.title-detail-page').empty();
			$('.title-detail-page').append("<p class='title'>" + (texts[id].AcceptedCommonName.split(" (")[0]).toUpperCase() + "</p>");
			$('.content-structure').empty();
			var detail = getAnimalDetails(texts[id], id);
			$('.content-structure').append(detail);
			$('.parallax').css({
				"position": "relative",
				"width": "120%",
				"height": "80vh",
				"background-image": background_parallax[id],
				"background-repeat": "no-repeat",
				"background-position": "top",
				"background-position": "50% 50%",
				"background-size": "800px",
				"margin-left": "10%"
			});

			$('.detailedpage').css({
				"background-image": background_detailed[id],
				"background- position": "center",
				"background-repeat": "no-repeat",
				"background-size": "cover",
			});

			$(displayConserStatus(texts[id])).addClass('active');
		}
	});


	function closeDetailPage() {
		$('#detailpage').css("width", "0");
		audio_background.volume = 1.0;
		is_sound_on = false;
		is_detail_page_open = false;
		changeBackgroundSoundVolume(is_detail_page_open);
		$('#sound_button').empty();
		$('#sound_button').append("<i class='fas fa-circle-thin fa-volume-mute'></i>");
		if (audio_detail != null && !audio_detail.paused) {
			audio_detail.pause();
			audio_detail.currentTime = 0;
		}
		clicked_id = null;
		if (found_animal == Object.keys(found).length && user_visit_next_envi == true) {
			$('#congrat_popup').css("width", "100%");
		}
	}


	function closeCongrat() {
		closePage('#congrat_popup');
		user_visit_next_envi = false;
		if (found_animal == Object.keys(found).length) {
			$('#next_envi_button').css("visibility", "visible");
		}
	}

	$('#next_envi_button').click(function () {
		window.open('./rain_forest.html', "_self");
	});

	$('#sound_button').click(function () {
		$(this).empty();
		if (is_sound_on == false) {
			$(this).append("<i class='fas fa-circle-thin fa-volume-up'></i>");
			if (sounds_detail[clicked_id] != null) {
				audio_detail = new Audio(sounds_detail[clicked_id]);
				audio_detail.play();
				audio_detail.loop = true;
			}
		}
		else {
			$(this).append("<i class='fas fa-circle-thin fa-volume-mute'></i>");
			audio_detail.pause();
		}
		is_sound_on = !is_sound_on;
	});
	//#endregion

	function closeSplash() {
		$('#splashWrapper').css({
			"opacity": "0",
			"height": "0",
			"width": "0"
		});

		audio_background = new Audio('./sound/Outback Sound.mp3');
		audio_background.loop = true;
		setInterval(function () {
			audio_background.play();
		}, 100);



		setInterval(function () {
			shakeAndSound(is_detail_page_open);
		}, 4000);
	}

	function nextEnvi() {
		window.open('./rain_forest.html', "_self");
	}

	$(document).ready(function () {
		for (let j = 0; j < element.length; j++) {
			additionalDetails(element[j], titles[j]);
		}

		$.ajaxSetup({ cache: true });
	});
}