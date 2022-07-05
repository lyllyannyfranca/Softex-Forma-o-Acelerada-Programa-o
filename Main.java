public class Main
{
	public static void main(String[] args) {
	    try {
    		Movie movie = new Movie();
    		movie.setName("Alien - O 8º Passageiro");
    		movie.setYear(1979);
    		movie.setSynopsis("Tripulantes de uma nave espacial precisam lutar por suas vidas ao serem contaminados por uma especie alienigena predadora.");
    		System.out.println(movie);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	    }
	}
}

class Movie 
{
    private String name;
    private Integer year;
    private String synopsis;
    private final Integer firstMovieYear = 1888;
    
    public Movie() {}
    
    public Movie(String name, Integer year, String synopsis) {
        this.name = name;
        this.year = year;
        this.synopsis = synopsis;
    }
    
    public String getName() {
        return name;
    }
    
    public Integer getYear() {
        return year;
    }
    
    public String getSynopsis() {
        return synopsis;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setYear(Integer year) throws Exception {
        if (year > firstMovieYear) 
            this.year = year;
        else
            throw new Exception("Valor inválido");
    }
    
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }
    
    public String toString() {
        String message =  "";
        message += "Nome: " + getName() + "\n";
        message += "Ano: " + getYear() + "\n";
        message += "Sinopse: " + getSynopsis() + "\n";
        return message;
    }
}