	$('.nav-link').click(function(){
		$('.nav-link:not(this)').removeClass('active');
		$(this).addClass('active');
	});

	$('.all').click(function(){
		$('.box').show(1000);
	});

	$('.web').click(function(){
		$('.box').show();
		$('.box:not(".web")').hide(1000);
	});

	$('.app').click(function(){
		$('.box').show();
		$('.box:not(".app")').hide(1000);
	});

	$('.icon').click(function(){
		$('.box').show();
		$('.box:not(".icon")').hide(1000);
	});