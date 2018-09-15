import wixData from 'wix-data';
//import {visionRequest} from 'backend/APICaller.jsw';

let fileURL; 

let knownlang;
let newlang;

$w.onReady(function () {

});

export function uploadButton1_change(event) {
	$w('#imageUpload').startUpload()
	.then( (uploadedFile) => {
		fileURL = uploadedFile.url;
/*
		//make vision API request with image. receive entity data.
		let visionData = visionRequest(fileURL);
		visionData.forEach(entity => {
			console.log(entity.name);
			console.log(entity.score);
		})

		//manipulate data
		
		
		//make translate API requests with entity names. receive translated entity names.
*/

		//update image src with uploaded image.
		$w('#image1').src = uploadedFile.url;

		//overlay translate text onto image

	})
}

export function drpdwnKnownLang_change(event) {
	knownlang = event.target.value;
}

export function drpdownNewLang_change(event) {
	newlang = event.target.value;
}

export function helpLink_click(event) {

}
