import LoginPage from "@/components/Login/Login";
import NavBar from "@/components/ui/NavBar";


const Login = () => {
  return (
    <>
    <NavBar />
      <div
      style={{
        backgroundColor: "#f3f2f1",
      }}
    >
      <LoginPage />
    </div>
    </>
  );
};

export default Login;
