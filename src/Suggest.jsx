import styles from "./Suggest.module.css";

const Suggest = () => {
  const handleButtonClick = () => {
    document.getElementById("button").textContent = "Sent!"
    setTimeout(() => {
      document.getElementById("button").textContent = "Suggest"
    }, 5000);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <h1>Suggest me</h1>
          <p>
            I will really appericiate it if you take time to suggest me
            something good to watch.
          </p>
        </div>
        <div className={styles.suggest}>
          <h1>Suggest something to watch</h1>
          <input type="text" placeholder="Title..."/>
          <button id="button" onClick={handleButtonClick}>Suggest</button>
        </div>
      </div>
    </>
  );
};

export default Suggest;
