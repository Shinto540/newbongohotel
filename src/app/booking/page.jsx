import Image from "next/image";
import HotelOverview from "../components/HotelOverview/hotelOverview"
import PhotoGallery from "../components/PhotoGallery/photoGallery"
import RoomTypesAndPrices from "../components/RoomTypesAndPrices/roomTypesAndPrice";
import Amenities from "../components/Amenities/amenities";
import Reviews from "../components/Reviews/review";
import LocationAndMap from "../components/Reviews/review"
import BookingForm from "../components/BookingForm/bookingForm"
import Policies from "../components/Policies/policies";
import PageHeader from "../components/PageHeader/pageheader";
import FAQs from "../components/FAQ/faq";
import SpecialOffers from "../components/SpecialOffers/specialOffers";





const booking = () => {
  return (
    <>
      <main className="bg-gray-100 pb-16">
        <PageHeader pageTitle={"Booking"} />

        <div className="top-[10%] grid grid-cols-2 w-[90%] mt-16 mx-auto py-12 px-[60px] bg-white container p-6">
      <HotelOverview />
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <PhotoGallery /> 
        </div>
        <div>
          <RoomTypesAndPrices />
          <Amenities /> 
        </div>
      </div>
      <Reviews />
      <LocationAndMap /> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Policies />
        <BookingForm /> 
      </div>
       <FAQs />
      <SpecialOffers />  
    </div>
    
      
      </main>
    </>
  );
};

export default booking;
