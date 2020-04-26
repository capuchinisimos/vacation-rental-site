$(document).ready(function() {

	$('.modal-btn').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('a[data-rel^=lightcase]').lightcase({
		swipe: true,
		maxWidth: 1500,
		maxHeight: 1500
	});

	$('.phone-input').mask('+7(999) 999-9999');

	//Отправка данных на почту
	$(".callback-form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$('.callback-popup-success').css('z-index', '1');
			$('.callback-popup-success').css('opacity', '1');
			setTimeout(function() {
				$('.callback-popup-success').css('z-index', '-1');
				$('.callback-popup-success').css('opacity', '0');
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	// Плавный скролл
	$(".slowly").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top + 0;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	var scene = document.getElementById('parallax-1');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-2');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-3');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-4');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-5');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-6');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-7');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-8');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-9');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-10');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-11');
	var parallaxInstance = new Parallax(scene);

	var scene = document.getElementById('parallax-12');
	var parallaxInstance = new Parallax(scene);

	new WOW().init();

});
