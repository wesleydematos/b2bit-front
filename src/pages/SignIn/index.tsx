import logo from "../../assets/logo.png";

export default function SignIn() {
  const labelStyles = "block mb-2 text-sm font-medium";
  const inputStyles = "";

  return (
    <main className="bg-grey w-screen h-screen flex font-sans">
      <form className="mx-auto my-auto bg-grey-l p-7 rounded-2xl shadow-custom">
        <img src={logo} alt="logo" className="mb-7" />

        <div className="min-w-[288px]">
          <label htmlFor="email" className={labelStyles}>
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={inputStyles}
            placeholder="@gmail.com"
          />
        </div>

        <div className="min-w-[288px] mt-5">
          <label htmlFor="password" className={labelStyles}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••••••"
            className={inputStyles}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-grey py-2 w-full rounded-lg mt-5"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
