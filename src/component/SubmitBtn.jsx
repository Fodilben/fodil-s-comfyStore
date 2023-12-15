import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  return (
    <button className="btn btn-primary btn-block capitalize">
      {isSubmiting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
