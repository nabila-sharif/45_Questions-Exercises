//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function myAlbum1(artistName: string, albumTitle: string){
    return{artistName, albumTitle}
}

let album1 = myAlbum("Ali","Rang-e-Mohabbat");
let album2 = myAlbum("Madad","Roshan andhera");
let album3 = myAlbum("Ayaz","masom-e-dilt");


console.log(album1);
console.log(album2);
console.log(album3);


// number of tracks
function myAlbum(artistName: string, albumTitle: string, numberOfTracks?: number){
    return{artistName, albumTitle , numberOfTracks}
}

let album4 = myAlbum("Ali","Rang-e-Mohabbat", 30);
let album5 = myAlbum("Madad","Roshan andhera" ,55);
let album6 = myAlbum("Ayaz","masom-e-dilt", );


console.log(album4);
console.log(album5);
console.log(album6);