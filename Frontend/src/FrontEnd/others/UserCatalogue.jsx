import { boxingHarcut, barberSign } from "../../assets/images";

const UserCatalogue = () => {
  return (
    <div className="container">
      <div className="row" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <img
          src={barberSign}
          alt="Barber Sign"
          style={{ width: '40%' }}
        />
        <img
          src={boxingHarcut}
          alt="Boxing Haircut"
          style={{ width: '40%' }}
        />
      </div>
    </div>
  );
}

export default UserCatalogue;
