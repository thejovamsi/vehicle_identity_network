import NotificationCard from "./cards/NotificationCard";
import VehicleCard from "./cards/Vehciecard";


export default function FeatureCards() {
  return(
   <section className="py-32 bg-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid grid-cols-2 gap-8">

      <VehicleCard />


      <NotificationCard />

    </div>

  </div>
</section>
  )
}