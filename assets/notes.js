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
				alert("note added")
				location.assign('./');
			}
		});

		return false;
	})

	$('.delete').on('click', function() {
		var item = $(this).parent().text(),
			title = item.slice(0, item.length - 2).replace(/ /g, '-'),
			uberParent = $(this).parentsUntil('.allNotes');
		console.log(title);
		$.ajax({
			type: 'DELETE',
			url: '/noteList/' + title,
			success: function() {
				uberParent.remove();
				console.log('Note Removed');
			}
		})
	})

})