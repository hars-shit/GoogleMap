
import Map from './Components/Map'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'
function App() {
{
  console.log(import.meta.env.VITE_REACT_APP_SECRET_KEY)
}
  const {isLoaded}=useLoadScript({
    googleMapsApiKey:import.meta.env.VITE_REACT_APP_SECRET_KEY
  })

  if(!isLoaded) return (<div>Loading...</div>)
       return(
        <Map />

       )
}
const Throw=()=>{
  return <GoogleMap zoom={10} center={{lat:44,lang:-80}} mapContainerClassName='map-container'></GoogleMap>
}

export default App

