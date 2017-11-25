var promo = 0;
var base = 0;
var perTv = 0;
var dtv = 1;
var uverse = 0;
var program = 0;
var internet = 0;
var iThirty = 0;
var iFifty = 0;
var iSeventy = 0;
var autopay = -5;
var unlimited = -15;
var programList = [[40, 76], [45, 87]]




function updatePrice () {
	let newPromo = promo + perTv + unlimited
	let newBase = base + perTv + unlimited
	document.getElementById("promoPrice").innerHTML = newPromo;
	document.getElementById("basePrice").innerHTML = newBase;
};

function updateProgram() {
	promo = programList[program][0];
	base = programList[program][1];
	console.log(promo, base);
};

function updateTv() {
	if (dtv == 1) {
		$('#dtv').addClass('active');
		$('#uverse').removeClass('active');
	} else {
		$('#uverse').addClass('active');
		$('#dtv').removeClass('active');
	}
};

function setProgram(prog, active) {
	program = prog;
	$('#select').removeClass('active');
	$('#entertainment').removeClass('active');
	$('#choice').removeClass('active');
	$('#xtra').removeClass('active');
	$('#ultimate').removeClass('active');
	$('#premier').removeClass('active');
	$(active).addClass('active');
	update();
}

function setTv(tv) {
	if (tv == 'dtv') {
		dtv = 1;
		uverse = 0;
	} else {
		uverse = 1
		dtv = 0
	}
	update();
};

function update() {
	updateTv();
	updateProgram();
	updatePrice();

}

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
