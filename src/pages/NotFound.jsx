export const NotFound = () => {
  const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column-reverse'
  };

  return (
    <div style={style}>
        <h2>This page doesn't exist</h2> 
        <img 
          src="https://psv4.vkuseraudio.net/s/v1/d/U2pgEzBMXyAuqr0kQsN_MlAK1iYb7JEeJ_oEXnS0-TLO7QqfqgJ6giNAZg4Pv9QMEdeogPtfMGUndJSecJ9ByVybR9mHQp81UcPkcR0F61aZJ1g9ep6keA/1586129214529.gif" 
          alt="gif"
          />
    </div>
  );
};


