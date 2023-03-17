
class MarvelService {
   getResourse = async (url) => {
      let res = await fetch(url);
      if(!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }

   getAllCharacters = () => {
      return this.getResourse("https://gateway.marvel.com:443/v1/public/characters?apikey=67d450180c995215a562c25bafa39221");
   }
}

export default MarvelService;