import style from './Loading.module.css';

const Loading = () => {
  const html = (
    <div className={style.loadingContainer}>
      <div className={style.spinner} />
    </div>
  );

  return html;
};

export default Loading;
