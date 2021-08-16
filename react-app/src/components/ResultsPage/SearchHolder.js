import React from "react";
import { Link } from "react-router-dom";

const SearchHolder = ({ place, api }) => {
  const photoref = (place.photos && place.photos[0].photo_reference);


  const address = () => {
    let newAddress = place.formatted_address.split(' ')
    newAddress.pop()
    newAddress.pop()
    newAddress.pop()
    return newAddress.join(' ')
  }

  return api && (
    <div>
      <Link className='searchholder__main' to={`/course/${place.place_id}`}>
        <div className='searchholder__photoholder'>
          <img alt='golf course' className='searchholder__photo' src={photoref ?
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=500&photoreference=${photoref}&key=${api}`
          : 'https://teetimesbucket.s3.us-east-2.amazonaws.com/download.jpg'}/>
        </div>
        <div className='searchholder__details'>
          <div>{place.name}</div>
          <div style={{'fontStyle' : 'italic'}}>{address()}</div>
        </div>
      </Link>
    </div>
  )
}

export default SearchHolder;
