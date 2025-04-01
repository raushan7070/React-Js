import {useEffect} from 'react'

const Fetch = () => {
  let [photos,setPhotos] = useEffect(null);
     
     async function getPhotos() {
       let response = await fetch("https://jsonplaceholder.typicode.com/photos");
       let data = await response.json();
       console.log(data); //[......]
       setPhotos(data);
        
     }

     useEffect(() => {
        getPhotos();
     },[]);
  return (
    <div>
      <h1>Fetch API using useEffect</h1>
      {photos?.map((ele) => {
            console.log(ele);  
            
        })}
    </div>
  )
}

export default Fetch;
