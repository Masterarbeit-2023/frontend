import Rating from "../../models/Rating";

interface HotelInfoCardRatingUserEntryProps {
  rating: Rating;
}

const HotelInfoCardRatingUserEntry = (
  props: HotelInfoCardRatingUserEntryProps
) => {
  const rating = props.rating;
  return (
    <div className=" py-6">
      <div className="flex text-3xl mb-3">
        <p className="font-bold">{rating.score}</p>
        <p>/10</p>
      </div>

      <p>{rating.description}</p>
      <p className="text-md font-bold text-gray-400 ">
        {rating.name}, {rating.dateRating}
      </p>
    </div>
  );
};

export default HotelInfoCardRatingUserEntry;
