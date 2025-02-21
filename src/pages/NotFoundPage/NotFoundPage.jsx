const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>BU SAYFA BULUNAMADI</h1>
      <p style={styles.message}>Aradığınız sayfa mevcut değil.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#ff6347",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
    margin: "20px 0",
  },
};

export default NotFoundPage;
