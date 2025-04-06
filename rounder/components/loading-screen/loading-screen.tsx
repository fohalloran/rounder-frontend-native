import s from "./loading-screen.module.css"

const BouncingBlobsLoader = () => {
  return (
    <div className={s.blobLoader}>
      <div className={s.blob1} />
      <div className={s.blob2} />
      <div className={s.blob3} />
    </div>
  );
};

export default BouncingBlobsLoader;
