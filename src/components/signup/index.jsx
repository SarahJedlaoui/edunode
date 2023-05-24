import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import sign from './signup.jpg'
import google from './google.png'
function Signup() {
	const googleAuth = () => {
		window.open(
			`http://localhost:5001/auth/google/callback`,
			"/dashbord"
		);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src={sign} alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src={google} alt="google icon" />
						<span>Sing up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/loginn">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;