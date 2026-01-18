export default function Status({ isOnline }){
  return(
    <>
    <p>{isOnline === true ? 'Online' : 'Offline'}</p>
    </>
  );
}