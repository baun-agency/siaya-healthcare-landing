import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AppointmentBooking from "@/components/AppointmentBooking";
import Footer from "@/components/Footer";
import headerBooking from "@/assets/header-booking.jpg";

const Booking = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <PageHeader
          title="Book an Appointment"
          description="Select a service, choose your doctor, and schedule your visit."
          backgroundImage={headerBooking}
        />
        <AppointmentBooking />
      </div>
      <Footer />
    </main>
  );
};

export default Booking;
