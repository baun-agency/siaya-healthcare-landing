import Header from "@/components/Header";
import AppointmentBooking from "@/components/AppointmentBooking";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AppointmentBooking />
      </div>
      <Footer />
    </main>
  );
};

export default Booking;
