import NotificationCard from "./cards/NotificationCard";
import VehicleCard from "./cards/Vehciecard";
import CertificateCard from "./cards/CertificateCard";
import QRCard from "./cards/QrCode";
import ReportCard from "./cards/ReportCard";
import Marquee from "./ui/StatsBar";

export default function FeatureCards() {
  return (
   <section className="py-32 ">
  <div className="relative mx-auto " style={{ width: '100%',  maxWidth: 850, height: 460}}>

    <VehicleCard />

    <CertificateCard />

    <QRCard />

    <ReportCard />

    <NotificationCard />
  </div>
   <Marquee/>
</section>
  );
}