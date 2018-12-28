$(document).ready(function(){

	// const STORAGE_KEY = 'formData';

		//When you click this button
		//The main content card is hidden and the form is shown

		$('#editButton').click(function(){
		$('#mainView').addClass('hidden');
		$('#editForm').removeClass('hidden');

		//Set the forms values from what is on the page
		$('#pageTitleInput').val( $('#pageTitle').text() );
		$('#pageTextInput').val( $('#pageText').text() );
	});


		// sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPageContent));

		// console.log(updatedPageContent);

		//When you cick this button
		//The changes on the form are NOT saved
		//The view just switches back to main content

		$('#cancelButton').click(function(){
		
		//Toggle view
		$('#editForm').addClass('hidden');
		$('#mainView').removeClass('hidden');

	});	

		//When you click this button (special button with type Submit)
		//You trigger the "submit" event for this specific form
		//Changes on the form ARE saved
		//Then you get returned back to the main view

		$('#editForm').on('submit', function(event){

		//Stop default browser functions from happening
		//(In this case, your page will be refreshed/redirected)

		event.preventDefault();

		//Toggle View

		$('#editForm').addClass('hidden');
		$('#mainView').removeClass('hidden');

		//Set the header and paragraph text to be what you want

		$('#pageTitle').text( $('#pageTitleInput').val() );
		$('#pageText').text( $('#pageTextInput').val() );

	});

});



	

