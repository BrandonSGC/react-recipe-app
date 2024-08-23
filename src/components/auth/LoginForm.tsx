import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../types";
import { login } from "../../api/authentication";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors, isValidating },
    handleSubmit,
    reset,
  } = useForm<Login>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: Login) => {
    setError("");
    setIsLoading(true);
    const response = await login(data);
    setIsLoading(false);
    if (!response.success) {
      setError(response.message);
      return;
    }
    toast.success(response.message);
    navigate("/home");
    reset();
  });

  // Effect that disappears the "Invalid credentials when typing the password again".
  useEffect(() => {
    isValidating && setError("");
  }, [isValidating]);

  return (
    <div className="login">
      <div className="login__info">
        <h2 className="legend">Welcome Back</h2>
        <p>
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </p>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <input
          className="form__input input"
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="on"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
        />

        <input
          className="form__input input"
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
          {...register("password", {
            required: "Please type a password",
          })}
        />

        <div className="form__errors">
          {errors.email && <p className="error">{errors.email.message}</p>}
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          {error && <p className="error">{error}</p>}
        </div>

        <button className="form__button button">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>

      <hr />

      <div className="login__buttons">
        <button className="button">Continue with Google</button>
        <button className="button">Continue with Apple</button>
      </div>
    </div>
  );
};
