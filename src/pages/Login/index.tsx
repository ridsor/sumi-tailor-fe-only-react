import axios from "axios";
import { useState } from "react";
const backendURL = import.meta.env.BACKEND_URL;

interface InputsLogin {
	email: string;
	password: string;
}

const index = () => {
	const [inputsLogin, setInputsLogin] = useState<InputsLogin>({
		email: '',
		password: ''
	});
	const [nodeValidation, setNodeValidation] = useState<React.ReactNode | undefined>(undefined);

	const handleSubmitFormLogin = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if(handleValidationLogin()) return;

		const data = await axios.post(backendURL+'/api/auth/login',inputsLogin).then(res => res.data);
		if(data.status !== 'success') console.error(data.message);
	}

	const handleValidationLogin = () => {
		setNodeValidation(undefined);

		const listValidation = [];
		var result = false;
		if(!inputsLogin.email) {
			listValidation.unshift('Email tidak boleh kosong.');
			result = true;
		}
		
		var rs = inputsLogin.email;
		var atps=rs.indexOf("@");
		var dots=rs.lastIndexOf(".");
		if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
			listValidation.unshift('Alamat email tidak valid.');
			result = true;
		}

		if(!inputsLogin.password) {
			listValidation.unshift('Password tidak boleh kosong.');
			result = true;
		}

		if(listValidation.length > 0) {
			setNodeValidation(
				<div>
					<h5 className="text-red-500 text-center">Terdapat kesalahan yang terjadi</h5>
					<ul className="[list-style:inherit]">
						{listValidation.map((x,i) => (
							<li key={i} className="text-center">{x}</li>
						))}
					</ul>
				</div>
			);
		}

		return result;
	}

	const handleChangeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputsLogin(prev => ({...prev, [e.target.name]: e.target.value}));
	}

  return (
	<>
	<section className="pt-36 pb-16">
		<div className="container">
			{(nodeValidation ? nodeValidation : '')}
			<form onSubmit={handleSubmitFormLogin} className="flex flex-col gap-3 w-full lg:w-1/2 mx-auto mt-4">
				<input type="text" name="email" className="border" onChange={handleChangeInputLogin} />
				<input type="text" name="password" className="border" onChange={handleChangeInputLogin} />
				<button className="border bg-black text-white p-3">Login</button>
			</form>
		</div>
	</section>
	</>
  )
}

export default index