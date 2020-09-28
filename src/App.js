import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Layout from './components/Layout';
import Spinner from './components/Spinner';
import Pagination from './components/Pagination';
import CardCharacter from './components/CardCharacter';
import Card from './components/Card';
import Info from './components/Info';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTERS,
         GET_LOCATIONS,
         GET_EPISODES,
         GET_INFO_CHARACTER,
         GET_INFO_LOCATION,
         GET_INFO_EPISODE } from './graphql/Query';

Modal.setAppElement('#root');

function App() {

  const [ getCharacter, objectCharacter ] = useLazyQuery(GET_CHARACTERS);
  const [ getLocation, objectLocation ] = useLazyQuery(GET_LOCATIONS);
  const [ getEpisode, objectEpisode ] = useLazyQuery(GET_EPISODES);
  const [ getInfoChar, objInfoChar] = useLazyQuery(GET_INFO_CHARACTER);
  const [ getInfoLoc, objInfoLoc] = useLazyQuery(GET_INFO_LOCATION);
  const [ getInfoEpi, objInfoEpi] = useLazyQuery(GET_INFO_EPISODE);

  const [radioBotton, setRadioBotton] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorFilter, setErrorFiler] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [variables, setVariables] = useState(null);

  useEffect(() => {
    
    if(searchType.length >= 3 && searchName.length >= 3){
      if(!radioBotton) return setErrorFiler('First select a filter and try again');
      setErrorFiler(null);
      getDataByNameType(radioBotton);
      return;
    }
    
    if(searchName.length >= 3){
      if(!radioBotton) return setErrorFiler('First select a filter and try again');
      setErrorFiler(null);
      getDataByName(radioBotton);
      return;
    }

    if(searchType.length >= 3){
      if(!radioBotton) return setErrorFiler('First select a filter and try again');
      setErrorFiler(null);
      getDataByType(radioBotton);
      return;
    }
  }, [searchName, searchType, radioBotton]); // eslint-disable-next-line
  
  useEffect(() => {
    const { data, error, variables } = objectCharacter;
    setData(data);
    setError(error);
    setVariables(variables);
  }, [objectCharacter]);
  
  useEffect(() => {
    const { data, error, variables } = objectLocation;
    setData(data);
    setError(error);
    setVariables(variables);
  }, [objectLocation]);
  
  useEffect(() => {
    const { data, error, variables } = objectEpisode;
    setData(data);
    setError(error);
    setVariables(variables);
  }, [objectEpisode]);

  useEffect(() => {
    const { data } = objInfoChar;
    setInfo(data);
  }, [objInfoChar]);
  
  useEffect(() => {
    const { data } = objInfoLoc;
    setInfo(data);
  }, [objInfoLoc]);

  useEffect(() => {
    const { data } = objInfoEpi;
    setInfo(data);
  }, [objInfoEpi]);

  const buildPagination = data => {
    if(!data) return null;

    const pagination = [];
    
    if(data.characters){
      for (let i = 1; i <= data.characters.info.pages; i++){
        pagination.push(i);
      };
    }

    if(data.locations){
      for (let i = 1; i <= data.locations.info.pages; i++){
        pagination.push(i);
      };
    }

    if(data.episodes){
      for (let i = 1; i <= data.episodes.info.pages; i++){
        pagination.push(i);
      };
    }

    return pagination;
  };

  const getDataByName = async (radioBotton) => {
    switch(radioBotton){
      case 'character':
        await getCharacter({
          variables: {
            filter: {
              name: searchName
            }
          }
        });
        return;
      
      case 'location':
        await getLocation({
          variables: {
            filter: {
              name: searchName
            }
          }
        });
        return;

      case 'episode':
        await getEpisode({
          variables: {
            filter: {
              name: searchName
            }
          }
        });
        return;

      default:
        return;
    }
  };

  const getDataByType = async (radioBotton) => {
    switch(radioBotton){
      case 'character':
        await getCharacter({
          variables: {
            filter: {
              type: searchType
            }
          }
        });
        return;

      case 'location':
        await getLocation({
          variables: {
            filter: {
              type: searchType
            }
          }
        });
        return;

      case 'episode':
        await getEpisode({
          variables: {
            filter: {
              episode: searchType
            }
          }
        });
        return;
    
      default:
        return;
    }
  };

  const getDataByNameType = async (radioBotton) => {
    switch(radioBotton){
      case 'character':
        await getCharacter({
          variables: {
            filter: {
              name: searchName,
              type: searchType
            }
          }
        });
        return;

    case 'location':
      await getLocation({
        variables: {
          filter: {
            name: searchName,
            type: searchType
          }
        }
      });
      return;

    case 'episode':
      await getEpisode({
        variables: {
          filter: {
            name: searchName,
            type: searchType
          }
        }
      });
      return;
    
      default:
        return;
    }
  };

  const pagination = buildPagination(data);

  return (
    <Layout botton={setRadioBotton} >

      <Modal
        isOpen={modalIsOpen}
        style={{content:{top: "8%", left: "30vw"}}}
        className="border border-gray-400 bg-white overflow-auto rounded-md w-2/4 sm:w-2/4 md:w-2/5 outline-none absolute px-2 py-1"
      >
        <div className="flex justify-end">
          <button
            className="uppercase font-bold text-gray-500 hover:text-black px-1" 
            onClick={() => setModalIsOpen(false)}>x</button>
        </div>
        {(objInfoChar.loading || objInfoLoc.loading || objInfoEpi.loading) && <Spinner />}
        {info && <Info info={info} />}
      </Modal>
      
      <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
        <div className="w-4/5 mb-2">
          <input 
            type="text"
            placeholder="Search by name"
            id="name"
            className="w-full rounded px-2 py-1 shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            />
        </div>
        <div className="flex">
          <input 
            type="text"
            placeholder={radioBotton === 'episode' ? "Search episode" :"Search by type"}
            id="type"
            className=" w-4/5 rounded px-2 py-1 shadow appearance-none border text-gray-700 focus:outline-none focus:shadow-outline"
            onChange={(e) => setSearchType(e.target.value)}
            value={searchType}
            />
          <button
            className="mx-3 px-2 py-1 bg-teal-600 border rounded hover:bg-teal-400 text-white uppercase"
            onClick={(e) => {
              e.preventDefault();
              setData(null);
              setSearchName('');
              setSearchType('');
              setErrorFiler(null);
              setError(null);
            }}
            >
            reset
          </button>
        </div>
      </form>
      
      {(objectCharacter.loading || objectLocation.loading || objectEpisode.loading) && <Spinner />}
      {error && error.message.replace('404: ', '')}
      {errorFilter && errorFilter}
      
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-4">
        
        {(data && data.characters)  && data.characters.results.map(character => 
          <CardCharacter
            key={character.id}
            clickable={true}
            character={character}
            modal={setModalIsOpen}
            getInfo={{getInfoChar}}/>
        )}

        {(data && data.locations) && data.locations.results.map(location =>
          <Card 
            key={location.id}
            name={location.name}
            location={location}
            modal={setModalIsOpen}
            getInfo={{getInfoLoc}} />
        )}

        {(data && data.episodes) && data.episodes.results.map(episode =>
          <Card
            key={episode.id}
            name={episode.name}
            episode={episode}
            modal={setModalIsOpen}
            getInfo={{getInfoEpi}}/>
        )}

      </div>
      
      <div className="flex justify-center">
        
        {pagination && pagination.map(page => 
          <Pagination
            key={page}
            page={page}
            data={data}
            variables={variables}
            getData={ {getCharacter, getLocation, getEpisode} } />
        )}

      </div>

    </Layout>
  );
}

export default App;
