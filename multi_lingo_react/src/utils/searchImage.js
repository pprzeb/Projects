
import {CognitiveServicesCredentials} from 'ms-rest-azure';
import Search from 'azure-cognitiveservices-search';


let serviceKey = ' '
let credentials = new CognitiveServicesCredentials(serviceKey);

let imageSearchApiClient = new Search.ImageSearchAPIClient(credentials);

console.log(credentials)
console.log(Search)
console.log(imageSearchApiClient)

// const config = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.app
//   };
export const searchImageBing = async (searchTerm) => {
    let firstImageResult;
    let allResult;
    
    await imageSearchApiClient.imagesOperations.search(searchTerm, {
        
        aspect: "Square"
        })
        .then(imageResults => {
        if (imageResults == null) {
        console.log("No image results were found.");
        }
        else {
            console.log(`Total number of images returned: ${imageResults.value.length}`);
            firstImageResult = imageResults.value[0];
            allResult = imageResults
            //display the details for the first image result. After running the application,
            //you can copy the resulting URLs from the console into your browser to view the image.
            console.log(`Total number of images found: ${imageResults.value.length}`);
            console.log(`Copy these URLs to view the first image returned:`);
            console.log(`First image thumbnail url: ${firstImageResult.thumbnailUrl}`);
            console.log(`First image content url: ${firstImageResult.contentUrl}`);
        }
      })
      .catch(err => console.error(err))


return allResult

}





