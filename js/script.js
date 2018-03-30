var promo = 0;
var base = 0;
var perTv = 0;
var dtv = 0;
var program = 0;
var internet = 0;
var internetStandAlone = 0;
var internetActive = 0;
var autopay = 0;
var unlimited = 0;
var programList = [[40, 78], [45, 90], [50, 105], [60, 117], [65,128], [115, 181], [40, 81], [60, 102], [65, 119], [115, 147]]




function updatePrice () {
	let newPromo = 0;
	let newBase = 0;
	if (internetStandAlone > 0 && (autopay < 0 || unlimited < 0)) {
		newPromo = promo + perTv + internet;
		newBase = base + perTv + internet + internetStandAlone;
	} else {
		newPromo = promo + perTv + unlimited + internet + autopay;
		newBase = base + perTv + unlimited + internet + internetStandAlone;
	};
	
	if (newPromo <= 0) {
		document.getElementById("promoPrice").innerHTML = 0;
		document.getElementById("basePrice").innerHTML = 0;
	} else {
		document.getElementById("promoPrice").innerHTML = newPromo;
		document.getElementById("basePrice").innerHTML = newBase;
	}
};

function updateProgramPricing() {
	promo = programList[program][0];
	base = programList[program][1];
};

function updateTvSelection() {
	if (dtv == 1) {
		$('#select').removeClass('active');
		$('#entertainment').removeClass('active');
		$('#choice').removeClass('active');
		$('#xtra').removeClass('active');
		$('#ultimate').removeClass('active');
		$('#premier').removeClass('active');
		$('#dtvPrograms').removeClass('hide');
		$('#dtvProgram').removeClass('hide');
		$('#uversePrograms').addClass('hide');
		$('#uverseProgram').addClass('hide');
		promo = 0
		base = 0
		updatePrice();
	} else {
		$('#uFamily').removeClass('active');
		$('#u200').removeClass('active');
		$('#u300').removeClass('active');
		$('#u450').removeClass('active');
		$('#uversePrograms').removeClass('hide');
		$('#uverseProgram').removeClass('hide');
		$('#dtvPrograms').addClass('hide');
		$('#dtvProgram').addClass('hide');
		promo = 0
		base = 0
		updatePrice();
	}
};

function updateTv() {
	if (dtv == 1) {
		$('#dtv').addClass('active');
		$('#uverse').removeClass('active');
		numberOfTvs(1, '#1')
		updateTvSelection();
	} else {
		$('#uverse').addClass('active');
		$('#dtv').removeClass('active');
		numberOfTvs(1, '#1')
		updateTvSelection();
	}
};

function setProgram(prog, active) {
	if(internetStandAlone > 0) {
		internetStandAlone = 0;
		internet -= 10;
	}
	
	program = prog;
	$('#select').removeClass('active');
	$('#entertainment').removeClass('active');
	$('#choice').removeClass('active');
	$('#xtra').removeClass('active');
	$('#ultimate').removeClass('active');
	$('#premier').removeClass('active');
	$('#uFamily').removeClass('active');
	$('#u200').removeClass('active');
	$('#u300').removeClass('active');
	$('#u450').removeClass('active');
	$(active).addClass('active');
	update();
}

function numberOfTvs(num, active) {
	$('#1').removeClass('active');
	$('#2').removeClass('active');
	$('#3').removeClass('active');
	$('#4').removeClass('active');
	$('#5').removeClass('active');
	$('#6').removeClass('active');
	$('#7').removeClass('active');
	$('#8').removeClass('active');
	$(active).addClass('active');
	if (dtv == 1) {
		perTv = (num-1) * 7

	} else {
		perTv = (num-1) * 10
	}
	updatePrice();
}

function setTv(tv) {
	if (tv == 'dtv') {
		dtv = 1;
	} else {
		dtv = 0
	}
	updateTv();
};

function includeInternet() {
	if (internetActive == 0) {
		$('#includeInternet').addClass('active');
		$('#internetThirty').removeClass('hide');
		$('#internetFifty').removeClass('hide');
		$('#internetSeventy').removeClass('hide');
		internetActive = 1
	} else {
		$('#includeInternet').removeClass('active');
		$('#internetThirty').addClass('hide');
		$('#internetFifty').addClass('hide');
		$('#internetSeventy').addClass('hide');
		$('#internetThirty').removeClass('active');
		$('#internetFifty').removeClass('active');
		$('#internetSeventy').removeClass('active');
		internetActive = 0;
		internet = 0;
		updatePrice();
	}
};

function internetPriceSelection(active, price) {
	internetStandAlone = 0;
	$('#internetThirty').removeClass('active');
	$('#internetFifty').removeClass('active');
	$('#internetSeventy').removeClass('active');
	$(active).addClass('active');
	if(base == 0) {
		price += 10;
		internetStandAlone += 10;
	} else {
		internet = price;
	};
	internet = price;
	updatePrice();
}

function plusDiscount() {
	if (unlimited == 0) {
		$("#plusDiscount").addClass('active');
		unlimited = -15;
		updatePrice();
	} else {
		$("#plusDiscount").removeClass('active');
		unlimited = 0;
		updatePrice();
	}
};

function autopayDiscount() {
	if (autopay == 0) {
		$("#autopayDiscount").addClass('active');
		autopay = -5;
		updatePrice();
	} else {
		$("#autopayDiscount").removeClass('active');
		autopay = 0;
		updatePrice();
	}
};

function clear() {
	promo = 0;
	base = 0;
	perTv = 0;
	dtv = 0;
	program = 0;
	internet = 0;
	internetActive = 0;
	autopay = 0;
	unlimited = 0;
	$('#select').removeClass('active');
	$('#entertainment').removeClass('active');
	$('#choice').removeClass('active');
	$('#xtra').removeClass('active');
	$('#ultimate').removeClass('active');
	$('#premier').removeClass('active');
	$('#dtvPrograms').removeClass('hide');
	$('#dtvProgram').removeClass('hide');
	$('#uversePrograms').addClass('hide');
	$('#uverseProgram').addClass('hide');
	$('#1').addClass('active');
	$('#2').removeClass('active');
	$('#3').removeClass('active');
	$('#4').removeClass('active');
	$('#5').removeClass('active');
	$('#6').removeClass('active');
	$('#7').removeClass('active');
	$('#8').removeClass('active');
	$("#autopayDiscount").removeClass('active');
	$("#plusDiscount").removeClass('active');
	$('#internetThirty').removeClass('active');
	$('#internetFifty').removeClass('active');
	$('#internetSeventy').removeClass('active');
	$('#includeInternet').removeClass('active');
	$('#uverse').removeClass('active');
	$('#dtv').removeClass('active');
	$('#internetThirty').addClass('hide');
	$('#internetFifty').addClass('hide');
	$('#internetSeventy').addClass('hide');
	updatePrice();
}
function update() {
	updateProgramPricing();
	updatePrice();
}

$("#clear").click(function() {
	clear();
});
$("#plusDiscount").click(function() {
	plusDiscount();
});
$("#autopayDiscount").click(function() {
	autopayDiscount();
});
$("#includeInternet").click(function() {
	includeInternet();
});
$("#internetThirty").click(function() {
	internetPriceSelection("#internetThirty", 30);
});
$("#internetFifty").click(function() {
	internetPriceSelection("#internetFifty", 50);
});
$("#internetSeventy").click(function() {
	internetPriceSelection("#internetSeventy", 70);
});
$("#dtv").click(function() {
	setTv('dtv');
});
$("#uverse").click(function() {
	setTv('uverse');
});
$("#select").click(function() {
	setProgram(0, "#select");
});
$("#entertainment").click(function() {
	setProgram(1, "#entertainment");
});
$("#choice").click(function() {
	setProgram(2, "#choice");
});
$("#xtra").click(function() {
	setProgram(3, "#xtra");
});
$("#ultimate").click(function() {
	setProgram(4, "#ultimate");
});
$("#premier").click(function() {
	setProgram(5, "#premier");
});
$("#uFamily").click(function() {
	setProgram(6, "#uFamily");
});
$("#u200").click(function() {
	setProgram(7, "#u200");
});
$("#u300").click(function() {
	setProgram(8, "#u300");
});
$("#u450").click(function() {
	setProgram(9, "#u450");
});
$("#1").click(function() {
	numberOfTvs(1, "#1");
});
$("#2").click(function() {
	numberOfTvs(2, "#2");
});
$("#3").click(function() {
	numberOfTvs(3, "#3");
});
$("#4").click(function() {
	numberOfTvs(4, "#4");
});
$("#5").click(function() {
	numberOfTvs(5, "#5");
});
$("#6").click(function() {
	numberOfTvs(6, "#6");
});
$("#7").click(function() {
	numberOfTvs(7, "#7");
});
$("#8").click(function() {
	numberOfTvs(8, "#8");
});

// From https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
