const BookingForm = () => {
    return (
      <div className="bg-gray-100 p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <form>
          <label>Date:</label>
          <input type="date" className="border p-2 mb-4 w-full" />
          <label>Guests:</label>
          <input type="number" className="border p-2 mb-4 w-full" />
          <button className="bg-blue-500 text-white px-4 py-2">Book Now</button>
        </form>
      </div>
    );
  };
export default BookingForm;  