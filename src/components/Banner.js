// eslint-disable-next-line
import React, { useState } from 'react'
import '../styles/Banner.css'
import useModal from './useModal'
import Modal from './modal'


function Banner({ Children, Logo }) {

	const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
	const {
		isShowing: isRegistrationFormShowed,
		toggle: toggleRegistrationForm
	} = useModal();

	return (

		<> <img src={Logo} alt='Le retour du pâton' className='lrdp-logo'></img>
			<div className='lrdp-banner'>{Children}

				<div className="Btn-login">
					<button className="modal-toggle" onClick={toggleLoginForm}>
						Connexion
					</button>
					<button className="modal-toggle" onClick={toggleRegistrationForm}>
						Inscrivez vous
					</button>

					<Modal
						isShowing={isLoginFormShowed}
						hide={toggleLoginForm}
						title="Connexion"
					>
						<form>
							<div className="form-group">
								<input type="text" placeholder="adresse mail" />
							</div>
							<div className="form-group">
								<input type="text" placeholder="Mot de passe" />
							</div>
							<div className="form-group">
								<input type="submit" value="Connexion" />
							</div>
						</form>
					</Modal>

					<Modal
						isShowing={isRegistrationFormShowed}
						hide={toggleRegistrationForm}
						title="Inscrivez vous"
					>
						<form>
							<div className="form-group">
								<input type="text" placeholder="Adresse mail" />
							</div>

							<div className="form-group">
								<input type="text" placeholder="Votre prénom" />
							</div>

							<div className="form-group">
								<input type="text" placeholder="Votre nom" />
							</div>
							<div className="form-group">
								<input type="text" placeholder="Mot de passe" />
							</div>
							<div className="form-group">
								<input type="submit" value="Enregistrer" />
							</div>
						</form>
					</Modal>
				</div>
			</div>




		</>


	)
}

export default Banner