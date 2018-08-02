class Movie{
    constructor(movieName , rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
    printAllAttributes(){
        console.log(this.movieName);
        console.log(this.rating);
        console.log(this.yearReleased);

}


}
function main() {
    var movie1 = new Movie("Jurrasic Park", 5, 1990);
    var movie2 = new Movie(" Green Lantern", 2, 2007);
    //console.log(movie1);
    //console.log(movie2);
    movie1.printAllAttributes();
    movie2.printAllAttributes();

}
main();