(function() {

	var $navList = $('.nav-list')

	sectionView('group');
	$navList.on('click', 'li', function(event) {
		event.preventDefault();

		$('.nav-list li').removeClass('active');
		$(this).addClass('active');

		sectionView($(this).data('data'))

	});

	function sectionView (select) {
		var url = './html/'+select+'.html';

		$.get(url,function (data) {
			$('.f-view').empty().append($(data));
		})
		
	}


})();