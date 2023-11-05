import { useHttp } from './../hooks/http.hook';

const useMarvelService = () => {
  const { isLoading, request, isError, clearError } = useHttp();

  const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=0a9e60f4eb0ce21410bb05a125f0276f';
  const _baseOffset = 210;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacterById = async (id: number) => {
    const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const transformDescription = (desc: string) => {
    if (!desc) {
      return 'There are no description for this character((';
    }
    return desc.length <= 220 ? desc : desc.slice(0, 220) + '...';
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: transformDescription(char.description),
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || 'en-us',
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : 'not available',
    };
  };

  return {
    isLoading,
    isError,
    clearError,
    getAllCharacters,
    getCharacterById,
    getAllComics,
    getComics,
  };
};
export default useMarvelService;
