var albums = [
    {
    "Starboy": [{
        "Superstar" : {
            "Year": "2011",
               "Tracks": [ 
                       "Holla at Your Boy",
                       "Love My Baby",
                       ]
           }       
    },{
        "Superstar" : {
            "Year": "2011",
               "Tracks": [ 
                       "Holla at Your Boy",
                       "Love My Baby",
                       ]
           }    

    }
]   
    },
    {
    "Wizkid": [{
            "Superstar" : {
                "Year": "2011",
                   "Tracks": [ 
                           "Holla at Your Boy",
                           "Dont Dull",
                           ]
               }       
        },{
            "Made in Lagos" : {
                "Year": "2011",
                   "Tracks": [ 
                           "Holla at Your Boy",
                           "Don't Dull",
                           "Scatter the Floor",
                           "Love my Baby"
                           ]
               }    
    
        }
    ]   
    }
];

//var albumCopy = JSON.stringify(albums)

//console.log(albumCopy);

//var trackSecondArtistSecondAlbum = JSON.stringify(albums[1].Wizkid[1]["Made in Lagos"].Tracks[2]) ;
//console.log(trackSecondArtistSecondAlbum)
var albumsLength = albums.length
function addArtist(nameOfArtist){

    
    var message = "Field is empty, Please enter a value"

    if (nameOfArtist === ""){
        return message
    }else
    albums.push([nameOfArtist]);

    return JSON.stringify(albums);
}

console.log(albumsLength)
console.log(addArtist("Brymo"));