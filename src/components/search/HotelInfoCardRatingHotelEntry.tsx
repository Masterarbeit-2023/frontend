interface HotelInfoCardRatingHotelEntryProps {
  name: string;
  rating: number;
}

const HotelInfoCardRatingHotelEntry = (
  props: HotelInfoCardRatingHotelEntryProps
) => {
  let ratingText = "";
  const rating = props.rating;
  if (rating >= 8.5) {
    ratingText = "Hervorragend";
  } else if (rating >= 8.0) {
    ratingText = "Sehr gut";
  } else if (rating >= 7.5) {
    ratingText = "Gut";
  } else if (rating >= 7.0) {
    ratingText = "Angemessen";
  } else {
    ratingText = "Akzeptabel";
  }
  
  const widthPercentage = `${rating * 10}%`;
  return (
    <div className="flex">
      <div className="w-1/3 font-bold">{props.name}</div>
      <div className="w-2/3">
        <div className="relative">
          <div className="h-2 bg-gray-200 rounded"></div>
          <div className="absolute inset-0 flex">
            <div className={"h-2 bg-blue-400 rounded "} style={{ width: widthPercentage }}></div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <p>{ratingText}</p>
          <p className="font-bold">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoCardRatingHotelEntry;
