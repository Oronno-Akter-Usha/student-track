import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvider";

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // Sign in user in Firebase
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <Sheet
        sx={{
          width: 300,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" textAlign="center">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm" textAlign="center">
            Sign in to continue.
          </Typography>
        </div>
        <form onSubmit={handleLogin}>
          <FormControl sx={{ mb: 2 }}>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>

          <Button sx={{ mt: 3 }} fullWidth type="submit">
            Log in
          </Button>
        </form>
      </Sheet>
    </main>
  );
}
