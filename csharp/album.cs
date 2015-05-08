// Code written in answer to an inquiry about how to handle 
// keeping track of music. The inquiry included code that had an 
// `Album` data type inheriting from `List<T>`

// My response: 

// Don't inherit from List<T>. You aren't making a list, you're making an album. 

class Album {
  private readonly List<Track> _tracklist;
  public ReadOnlyCollection<Track> Tracklist {
    get {
      return new ReadOnlyCollection<Track>(_tracklist);
    }
 }

  public Album(IEnumerable<Track> tracklist) {
    _tracklist = new List<Track>(tracklist);
  }
}

// Later usage

var album = new Album(new List<Track> {
  new Track { Name = "Blonde"}, 
  new Track { Name = "K.-O."}, 
  new Track { Name="Alcaline"}, 
  new Track { Name="Seulement pour te plaire"}, 
  new Track { Name="L'amour renfort"},
  new Track { Name="Bi"},
  new Track { Name="Mon planeur"},
  new Track { Name="Ce qui tue l'amour"},
  new Track { Name="Tweet"},
  new Track { Name="Charles est stone"},
  new Track { Name="Mylène Farmer"},
  new Track { Name="Plus de bye bye"}
});

var culture = new CultureInfo("fr-FR");
var tracks = album.Tracklist.OrderBy(t => t.Name, StringComparer.Create(culture, false));
tracks.ToList().ForEach(Console.WriteLine);