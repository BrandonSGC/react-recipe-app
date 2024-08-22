import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { DraftUser } from "../../types";
import { registerUser } from "../../api/authentication";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DraftUser>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: DraftUser) => {
    await registerUser(data);
    reset();
    navigate("/auth/login");
    toast.success("User created successfully");
  });

  return (
    <div className="register">
      <div className="register__info">
        <h2 className="legend">Create account</h2>
        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="form__inputs">
          <input
            className="form__input input"
            type="text"
            id="name"
            placeholder="First Name"
            autoComplete="true"
            {...register("name", { required: "Please type your name" })}
          />

          <input
            className="form__input input"
            type="text"
            id="lastname"
            placeholder="Last Name"
            autoComplete="true"
            {...register("lastname", { required: "Please type your lastname" })}
          />
        </div>

        <input
          className="form__input input"
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="true"
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
          {...register("password", {
            required: "Please type a password",
            minLength: {
              value: 4,
              message: "Password must be at least 4 digits",
            },
          })}
        />

        <div className="form__errors">
          {errors.email && <p className="error">{errors.email.message}</p>}
          {errors.name && <p className="error">{errors.name.message}</p>}
          {errors.lastname && (
            <p className="error">{errors.lastname.message}</p>
          )}
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <div className="form__terms">
          <input type="checkbox" id="terms" name="terms" />
          <p>
            I agree to Recipe App <a href="#">Terms of service</a> and{" "}
            <a href="#">Privacy policy</a>{" "}
          </p>
        </div>

        <button className="form__button button">Create Account</button>
      </form>

      <hr />

      <div className="register__buttons">
        <button className="button">Continue with Google</button>
        <button className="button">Continue with Apple</button>
      </div>
    </div>
  );
};
