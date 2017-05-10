$(document).ready(function() {

	$('form').on('submit', function() {
		var title = $('#title').val(),
			yourNote = $('#yourNote').val(),
			date = $('#year').val() + $('#month').val() + $('#day').val(),
			item = {title: title, note: yourNote, date: date};

		$.ajax({
			type: 'POST',
			url: '/addNote',
			data: item,
			success: function(data) {
				console.log(data)
				console.log("note added")
			}
		});

		return false;
	})

})